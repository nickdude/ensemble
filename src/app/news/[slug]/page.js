"use client";

import DetailNews from "@/components/DetailNews";
import OurInsights from "@/components/OurInsights";
import OurProjects from "@/components/OurProjects";

export default function NewsInner() {
  return (
    <main className="bg-white text-black">
        <DetailNews/>
        <OurProjects/>
        <OurInsights/>
    </main>
  );
}