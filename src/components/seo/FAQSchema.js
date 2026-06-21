// Standalone FAQPage JSON-LD.
//
// No FAQ content exists in the site yet, so this is not wired into any route.
// Drop it on any future FAQ page:
//   <FAQSchema path="/services" faqs={[{ question, answer }, ...]} />
import { faqPageSchema } from "@/lib/seo/schemas";
import JsonLd from "./JsonLd";

/**
 * @param {{ path?: string, faqs: Array<{question:string, answer:string}> }} props
 */
export default function FAQSchema({ path = "/", faqs = [] }) {
  if (!faqs.length) return null;
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        ...faqPageSchema({ path, faqs }),
      }}
    />
  );
}
