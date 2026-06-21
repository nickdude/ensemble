// Site-wide structured-data orchestrator.
//
// Rendered once from the root layout. Reads the current pathname (set by
// middleware as the `x-pathname` request header), then emits a SINGLE
// "@graph" document containing:
//   - Organization        (site-wide identity, declared once)
//   - WebSite             (site-wide, declared once)
//   - page-specific nodes (WebPage / Service / Blog / Article / …)
//   - BreadcrumbList      (dynamic, one per page)
//
// Using one @graph keyed by @id guarantees no duplicate Organization/WebSite
// across the site and connects every node into one valid graph.
import { headers } from "next/headers";
import { organizationSchema, websiteSchema } from "@/lib/seo/schemas";
import { resolvePageStructuredData } from "@/lib/seo/pageSchema";
import JsonLd from "./JsonLd";

export default async function StructuredData() {
  const headerList = await headers();
  const pathname = headerList.get("x-pathname") || "/";

  const { pageSchemas, breadcrumb } = resolvePageStructuredData(pathname);

  const graph = [
    organizationSchema(),
    websiteSchema(),
    ...pageSchemas,
    breadcrumb,
  ].filter(Boolean);

  return (
    <JsonLd data={{ "@context": "https://schema.org", "@graph": graph }} />
  );
}
