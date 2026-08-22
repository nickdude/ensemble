"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import FAQSchema from "@/components/seo/FAQSchema";

const itemKey = (groupIndex, itemIndex) => `${groupIndex}-${itemIndex}`;

export default function FAQ({ details }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only groups that actually contain at least one question are shown, so the
  // whole section stays hidden on pages that have no FAQs yet.
  const groups = (details?.groups ?? []).filter(
    (group) => (group.faqs?.length ?? 0) > 0
  );

  // Every item starts expanded; each can be collapsed independently.
  const [openItems, setOpenItems] = useState(() => {
    const keys = new Set();
    groups.forEach((group, g) =>
      (group.faqs ?? []).forEach((_, i) => keys.add(itemKey(g, i)))
    );
    return keys;
  });

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  if (!groups.length) return null;

  const isDark = theme === "dark";

  // Flatten every group's Q&A into a single list for the FAQPage JSON-LD.
  const allFaqs = groups.flatMap((group) => group.faqs ?? []);

  const toggle = (key) =>
    setOpenItems((current) => {
      const next = new Set(current);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });

  return (
    <section
      className={`px-4 w-full py-20 md:px-16 flex flex-col gap-12 md:flex-row md:gap-16 ${
        isDark
          ? "bg-black text-white border-b border-gray-700"
          : "bg-white text-black border-b border-gray-300"
      }`}
    >
      {/* JSON-LD for rich results */}
      <FAQSchema path={details.path} faqs={allFaqs} />

      {/* Heading */}
      <div className="flex flex-col gap-4 md:w-[38%] md:sticky md:top-24 md:self-start">
        {details.label && (
          <p className="font-poppins font-normal text-sm md:text-lg text-brand-blue">
            {details.label}
          </p>
        )}
        <h2 className="font-poppins font-semibold text-[32px] md:text-[56px] leading-[44px] md:leading-[64px]">
          {details.heading}
        </h2>
        {details.description && (
          <p className="font-roboto text-[16px] md:text-lg leading-[26.5px] text-gray-600">
            {details.description}
          </p>
        )}
      </div>

      {/* Grouped accordion */}
      <div className="flex flex-col gap-12 md:w-[62%]">
        {groups.map((group, g) => (
          <div key={g} className="flex flex-col">
            {/* Category title in brand blue */}
            {group.title && (
              <h3 className="font-poppins font-medium text-xl md:text-2xl text-brand-blue mb-2">
                {group.title}
              </h3>
            )}

            {(group.faqs ?? []).map((item, i) => {
              const key = itemKey(g, i);
              const isOpen = openItems.has(key);
              return (
                <div
                  key={key}
                  className={`border-b ${isDark ? "border-gray-700" : "border-gray-300"}`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(key)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-roboto font-medium text-lg md:text-xl leading-[28px]">
                      {item.question}
                    </span>
                    {/* Plus / minus toggle */}
                    <span
                      className={`relative flex h-6 w-6 shrink-0 items-center justify-center transition-transform duration-300 ease-luxury ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                      aria-hidden="true"
                    >
                      <span className="absolute h-[1.5px] w-4 bg-current" />
                      <span className="absolute h-4 w-[1.5px] bg-current" />
                    </span>
                  </button>

                  <div
                    className={`grid overflow-hidden transition-all duration-300 ease-luxury ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0">
                      <p className="font-roboto text-[16px] md:text-lg leading-[26.5px] text-gray-600 pb-6 md:pr-10">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
