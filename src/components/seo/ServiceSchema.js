// Standalone Service JSON-LD. Forwards props to the serviceSchema builder.
import { serviceSchema } from "@/lib/seo/schemas";
import JsonLd from "./JsonLd";

/** @param {object} props  Forwarded to the serviceSchema builder. */
export default function ServiceSchema(props) {
  return (
    <JsonLd
      data={{ "@context": "https://schema.org", ...serviceSchema(props) }}
    />
  );
}
