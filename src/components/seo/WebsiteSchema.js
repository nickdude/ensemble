// Standalone WebSite JSON-LD. The site-wide instance is emitted by
// <StructuredData/>; this wrapper is provided for ad-hoc / isolated use.
import { websiteSchema } from "@/lib/seo/schemas";
import JsonLd from "./JsonLd";

export default function WebsiteSchema() {
  return (
    <JsonLd data={{ "@context": "https://schema.org", ...websiteSchema() }} />
  );
}
