import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Ensemble Infrastructure to discuss your design and build workplace project. Send us an inquiry today.",
  path: "/contactus",
});

export default function ContactUsLayout({ children }) {
  return children;
}
