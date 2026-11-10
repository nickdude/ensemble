import BlogHero from "@/components/BlogHero";
import News from "@/components/News";
import OurBlogs from "@/components/OurBlogs";
import OurProjects from "@/components/OurProjects";
import { blogsData } from "@/data/home/blogsData";
import NewsMobile from "@/components/NewsMobile";
import FAQ from "@/components/FAQ";
import faqData from "@/data/home/faqData";

export default function Blogs() {
  const { blogsHero, blogsCards } = blogsData;
  return (
    <main>
      <BlogHero title={blogsHero.title} subtitle={blogsHero.subtitle} breakline={blogsHero.breakline} />
      <OurBlogs blogsCards={blogsCards} />
      <div className="relative z-20 w-screen max-w-screen overflow-x-hidden py-10 md:py-20">
        <div className="hidden md:block">
          <News />
        </div>
        <div className="md:hidden pl-3">
          <NewsMobile />
        </div>
      </div>
      <OurProjects />
      <FAQ details={faqData.blog} />
    </main>
  );
}
