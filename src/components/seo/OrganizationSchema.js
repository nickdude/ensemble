// Standalone Organization JSON-LD. The site-wide instance is emitted by
// <StructuredData/>; use this only if you need an Organization block in
// isolation (e.g. a standalone landing page outside the main tree).
import { organizationSchema } from "@/lib/seo/schemas";
import JsonLd from "./JsonLd";

export default function OrganizationSchema() {
  return (
    <JsonLd
      data={{ "@context": "https://schema.org", ...organizationSchema() }}
    />
  );
}
