"use client";

import News from "@/components/News";
import NewsHero from "@/components/NewsHero";
import OurBlogs from "@/components/OurBlogs";
import OurProjects from "@/components/OurProjects";

export default function Blogs() {
    const blogs = {
        title: "Where Ideas Blossom,",
        subtitle: "Blogs",
        breakline: "Stories Thrive",
    }

    const blogsCards = [
        {
            img: "/assets/insights/insight1.png",
            title: "Building for Future",
            description: "Explore the latest trends in eco-friendly architecture and interior design, and how we incorporate sustainability into every project."
        },
        {
            img: "/assets/insights/insight2.png",
            title: "Innovation in Urban Spaces",
            description: "Learn how to balance heritage and cutting-edge design, creating spaces that honor the past while embracing the future."
        },
        {
            img: "/assets/insights/insight3.png",
            title: "Maximizing Small Spaces",
            description: "Get insights into designing compact spaces without compromising style or comfort, perfect for city living and smaller homes."
        },
        {
            img: "/assets/insights/insight1.png",
            title: "Building for Future",
            description: "Explore the latest trends in eco-friendly architecture and interior design, and how we incorporate sustainability into every project."
        },
        {
            img: "/assets/insights/insight2.png",
            title: "Innovation in Urban Spaces",
            description: "Learn how to balance heritage and cutting-edge design, creating spaces that honor the past while embracing the future."
        },
        {
            img: "/assets/insights/insight3.png",
            title: "Maximizing Small Spaces",
            description: "Get insights into designing compact spaces without compromising style or comfort, perfect for city living and smaller homes."
        },
        {
            img: "/assets/insights/insight1.png",
            title: "Building for Future",
            description: "Explore the latest trends in eco-friendly architecture and interior design, and how we incorporate sustainability into every project."
        },
        {
            img: "/assets/insights/insight2.png",
            title: "Innovation in Urban Spaces",
            description: "Learn how to balance heritage and cutting-edge design, creating spaces that honor the past while embracing the future."
        }
    ]
  return (
    <main className="">
       <NewsHero title={blogs.title} subtitle={blogs.subtitle} breakline={blogs.breakline}/>
       <OurBlogs blogsCards={blogsCards}/>
       <News/>
       <OurProjects/>
    </main>
  );
}