import { buildMetadata } from "@/lib/seo";

// Applies to the /news listing. The /news/[slug] pages override this with
// their own dynamic metadata.
export const metadata = buildMetadata({
  title: "News & Media",
  description:
    "Ensemble Infrastructure in the news — press coverage, media features and announcements about our workplaces and projects.",
  path: "/news",
});

export default function NewsLayout({ children }) {
  return children;
}
