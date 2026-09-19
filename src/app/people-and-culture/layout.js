import { buildMetadata } from "@/lib/seo";
import { staticDescription } from "@/lib/seo/descriptions";

export const metadata = buildMetadata({
  title: "People and Culture",
  description: staticDescription("/people-and-culture"),
  path: "/people-and-culture",
});

export default function PeopleAndCultureLayout({ children }) {
  return children;
}