import { buildMetadata } from "@/lib/seo";
import { staticDescription } from "@/lib/seo/descriptions";

// Meta description is the manually-maintained one from lib/seo/descriptions.
export const metadata = buildMetadata({
  title: "Contact Us",
  description: staticDescription("/contactus"),
  path: "/contactus",
});

// The /contactus page renders only the inquiry form (a Client Component that
// returns null until mounted). This server-component layout supplies the single,
// server-rendered, keyword-bearing H1 for the route so the page has a visible,
// crawlable top-level heading that mirrors the "Contact Us" title tag.
export default function ContactUsLayout({ children }) {
  return (
    <>
      {/* <h1 className="font-poppins font-semibold text-[32px] md:text-[56px] text-center pt-16 md:pt-20 px-4 md:px-16">
        Contact Ensemble Infrastructure
      </h1> */}
      {children}
    </>
  );
}
