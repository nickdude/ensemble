import InsightCard from "./InsightCard";

export default function OurBlogs({ blogsCards }) {
  return (
    <section className="px-4 py-10 md:py-20 md:px-16 flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-10">
        {blogsCards.map((blog, index) => (
          <InsightCard key={index} slug={blog.slug} img={blog.img} title={blog.title} description={blog.description} width="w-full" />
        ))}
      </div>
    </section>
  );
}
