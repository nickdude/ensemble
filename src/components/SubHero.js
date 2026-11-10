import Button from "./Button";
import homeData from "@/data/home/homeData";

export default function SubHero() {
  const data = homeData.subHero;
  return (
    <section className="w-full py-10 md:py-30 px-4 md:px-16 mt-[90vh] md:mt-[80vh]">
      <div className="flex flex-col gap-4 md:flex md:flex-row md:justify-between">
        <p className="w-full md:w-4/7 font-poppins font-medium text-2xl md:text-3xl">
          {data.title}
        </p>
        <div className="w-full md:w-1/3 gap-4 md:gap-10 flex flex-col">
          <p className="font-avenir font-normal text-base md:text-lg text-gray-600 dark:text-gray-300">
            {data.description}
          </p>
          <Button label={data.buttonLabel} link={data.buttonLink} />
        </div>
      </div>
    </section>
  );
}
