import Footer from "@/components/Footer";
import "./globals.css";
import Providers from "./providers";
import Navbar from "@/components/Navbar";
import {
  poppins,
  roboto,
  inter,
  bricolage,
  // avenir,
} from "./fonts";
import { SITE_URL } from "@/lib/seo";

export const metadata = {
  // Resolves all relative canonical / Open Graph URLs to the production origin.
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ensemble Infrastructure | Design & Build Construction",
    template: "%s | Ensemble Infrastructure",
  },
  description: "Future-ready spaces for thriving businesses",
  // Default self-referencing canonical for the home page ("/").
  // Every child route overrides this with its own canonical.
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "Ensemble Infrastructure",
    type: "website",
    url: "/",
    title: "Ensemble Infrastructure | Design & Build Construction",
    description: "Future-ready spaces for thriving businesses",
  },

  verification: {
    google: "7DAAeGYXuBPrZpEit4DLdvma7LDe7FBBpDem2CwyIq8",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="7DAAeGYXuBPrZpEit4DLdvma7LDe7FBBpDem2CwyIq8" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FXM9PQKGDR"></script>
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-FXM9PQKGDR');` }} />
      </head>
      <body
        suppressHydrationWarning
        className={`
          ${poppins.variable}
          ${roboto.variable}
          ${inter.variable}
          ${bricolage.variable}
        `}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}

