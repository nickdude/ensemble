import CountContainer from "./CountContainer";
import homeData from "@/data/home/homeData";

export default function CountSection({ text }) {
  const data = homeData.countSection;
  return (
    <section className="border-y border-gray-300 py-20">
      <div className="flex flex-col md:flex-row justify-between items-center px-16 gap-10 md:gap-0">
        {data.counts.map((item, index) => (
          <CountContainer
            key={index}
            count={item.count}
            label={item.label}
            text={text}
          />
        ))}
      </div>
    </section>
  );
}
