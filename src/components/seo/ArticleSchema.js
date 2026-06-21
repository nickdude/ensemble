// Standalone Article / BlogPosting / NewsArticle JSON-LD.
//
// Forwards its props straight to the articleSchema builder. Handy for any
// future article-like page that renders outside the central resolver.
import { articleSchema } from "@/lib/seo/schemas";
import JsonLd from "./JsonLd";

/** @param {object} props  Forwarded to the articleSchema builder. */
export default function ArticleSchema(props) {
  return (
    <JsonLd
      data={{ "@context": "https://schema.org", ...articleSchema(props) }}
    />
  );
}
