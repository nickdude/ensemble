import News from "@/components/News";
import OurProjects from "@/components/OurProjects";
import TitlePara from "@/components/TitlePara";
import Image from "next/image";
import { blogsData } from "@/data/home/blogsData";
import NewsMobile from "@/components/NewsMobile";
import { notFound } from "next/navigation";
import { parseDate } from "@/lib/seo/structuredData";

export async function generateStaticParams() {
  return Object.keys(blogsData.blogDetail || {}).map((slug) => ({ slug }));
}

export default async function DetailBlog({ params }) {
  const { slug } = await params;
  const blogDetail = blogsData.blogDetail[slug];
  if (!blogDetail) notFound();

  const isoDate = parseDate(blogDetail.date);

  return (
    <article className="py-10 px-4 md:py-20 md:px-16 flex flex-col items-center justify-center gap-4">
      <h1 className="font-poppins font-semibold text-xl md:text-4xl">{blogDetail.title}</h1>
      <p className="font-poppins font-light text-sm md:text-[22px]">{blogDetail.subtitle}</p>
      <hr className="w-full" />
      <div className="flex gap-5 font-poppins text-sm md:text-lg">
        <span>{blogDetail.author?.trim()}</span>
        <Image src="/assets/icons/point.svg" alt="" width={4} height={4} aria-hidden="true" />
        <time dateTime={isoDate || undefined}>{blogDetail.date}</time>
        <Image src="/assets/icons/point.svg" alt="" width={4} height={4} aria-hidden="true" />
        <span>{blogDetail.readTime}</span>
      </div>
      <div className="relative mt-16 aspect-video w-full overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900">
        <Image
          src={blogDetail.mainImage}
          alt={blogDetail.mainImageAlt || blogDetail.title}
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="px-4 md:px-20">
        {blogDetail.sections.map((section, index) => (
          <TitlePara
            key={index}
            title={section.title}
            para={section.para}
          />
        ))}
      </div>
      <hr className="w-full mt-10" />
      <OurProjects />
      <div className="relative z-20 w-screen max-w-screen overflow-x-hidden py-10 md:py-20">
        <div className="hidden md:block">
          <News />
        </div>
        <div className="md:hidden">
          <NewsMobile />
        </div>
      </div>
    </article>
  );
}
