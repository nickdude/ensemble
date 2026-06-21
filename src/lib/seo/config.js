// Central Schema.org / structured-data configuration.
//
// Single source of truth for the Organization + WebSite identity used by every
// JSON-LD block. Values are read from environment variables where available and
// fall back to existing site data (footer / contact) so nothing is hardcoded
// twice and the schema stays in sync with what the site already renders.
//
// Supported environment variables (all optional — sensible fallbacks apply):
//   NEXT_PUBLIC_SITE_URL          Production origin (already used site-wide).
//   NEXT_PUBLIC_ORG_NAME          Organization display name.
//   NEXT_PUBLIC_ORG_LEGAL_NAME    Registered legal name.
//   NEXT_PUBLIC_ORG_DESCRIPTION   Short organization description / tagline.
//   NEXT_PUBLIC_ORG_LOGO          Absolute (or root-relative) logo URL.
//   NEXT_PUBLIC_ORG_FOUNDING_DATE Founding year, e.g. "2001".
//   NEXT_PUBLIC_ORG_EMAIL         Public contact email.
//   NEXT_PUBLIC_ORG_PHONE         Public contact phone (E.164-ish).
//   NEXT_PUBLIC_SOCIAL_URLS       Comma-separated sameAs URLs (overrides footer).
//   NEXT_PUBLIC_SITE_LOCALE       BCP-47 language tag, e.g. "en".
import { SITE_URL } from "@/lib/seo";
import { footerData } from "@/data/home/footerData";
import { contactData } from "@/data/home/contactData";

const env = process.env;

// sameAs: explicit env list wins; otherwise derive from the footer social links
// the site already maintains.
const socialFromFooter = (footerData?.socialMedia || [])
  .map((s) => s.url)
  .filter(Boolean);

const sameAs = env.NEXT_PUBLIC_SOCIAL_URLS
  ? env.NEXT_PUBLIC_SOCIAL_URLS.split(",")
      .map((s) => s.trim())
      .filter(Boolean)
  : socialFromFooter;

// Headquarters office (first office in the contact data) → PostalAddress.
const hqOffice = contactData?.offices?.[0]?.locations?.[0];

export const seoConfig = {
  siteUrl: SITE_URL,
  name: env.NEXT_PUBLIC_ORG_NAME || "Ensemble Infrastructure",
  legalName:
    env.NEXT_PUBLIC_ORG_LEGAL_NAME || "Ensemble Infrastructure India Pvt. Ltd.",
  description:
    env.NEXT_PUBLIC_ORG_DESCRIPTION ||
    "Future-ready spaces for thriving businesses — Ensemble Infrastructure delivers integrated design and build workplace solutions across India.",
  logo: env.NEXT_PUBLIC_ORG_LOGO || `${SITE_URL}/assets/footer_logo_black.png`,
  foundingDate: env.NEXT_PUBLIC_ORG_FOUNDING_DATE || "2001",
  email: env.NEXT_PUBLIC_ORG_EMAIL || footerData?.contact?.email || "sales@ensemble.co.in",
  phone: env.NEXT_PUBLIC_ORG_PHONE || footerData?.contact?.phone || "+91 98330 84407",
  sameAs,
  locale: env.NEXT_PUBLIC_SITE_LOCALE || "en",
  address: {
    streetAddress: hqOffice?.address || "Kamala Mills, Lower Parel, Mumbai",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400013",
    addressCountry: "IN",
  },
  areaServed: "IN",
};
