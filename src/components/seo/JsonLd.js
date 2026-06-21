// Server-rendered JSON-LD <script>. Renders into the initial HTML (no "use
// client"), so the structured data is present in the page source for crawlers.
//
// `<` is escaped to < to prevent a literal "</script>" inside the data from
// terminating the script element (a standard JSON-LD XSS hardening step).

/**
 * @param {{ data: object }} props  A single JSON-LD object (typically a
 *                                  "@context" + "@graph" document).
 */
export default function JsonLd({ data }) {
  if (!data) return null;
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
