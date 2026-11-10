export default function BlogHero({ title, subtitle, breakline }) {
  return (
    <section className="w-full flex flex-col items-center justify-center py-10 md:py-20 px-4 md:px-16">
      <p className="font-poppins font-normal text-[13px] md:text-lg text-center">{subtitle}</p>
      <h1 className="font-poppins font-semibold text-[32px] md:text-[56px] text-center">{title} <br /> {breakline}</h1>
    </section>
  );
}
