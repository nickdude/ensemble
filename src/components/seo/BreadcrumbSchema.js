// Standalone BreadcrumbList JSON-LD.
//
// Pass an explicit `pathname` (and optional slug→label `overrides`) to render a
// breadcrumb for a specific route. The site-wide breadcrumb is already emitted
// by <StructuredData/>; use this only for one-off pages rendered outside it.
import { breadcrumbListSchema } from "@/lib/seo/breadcrumb";
import JsonLd from "./JsonLd";

/**
 * @param {{ pathname: string, overrides?: Object<string,string> }} props
 */
export default function BreadcrumbSchema({ pathname = "/", overrides }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        ...breadcrumbListSchema(pathname, overrides),
      }}
    />
  );
}
