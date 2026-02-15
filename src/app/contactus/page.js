"use client";

import BlogHero from "@/components/BlogHero";
import News from "@/components/News";
import OurBlogs from "@/components/OurBlogs";
import OurProjects from "@/components/OurProjects";
import { blogsData } from "@/data/home/blogsData";
import NewsMobile from "@/components/NewsMobile";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import InquiryForm from "@/components/InquiryForm";

export default function ContactUs() {
    const { blogsHero, blogsCards } = blogsData;
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;
  return (
    <main className="">
      <InquiryForm/>
    </main>
  );
}