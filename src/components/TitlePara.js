"use client";

function ParagraphContent({ text }) {
  const parts = String(text || "").split(/(\[[^\]]+\]\([^\s)]+\))/g);

  return parts.map((part, index) => {
    const match = part.match(/^\[([^\]]+)\]\(([^\s)]+)\)$/);
    if (!match || !/^https?:\/\//i.test(match[2])) return <span key={index}>{part}</span>;

    return (
      <a
        key={index}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-brand-blue underline underline-offset-2"
      >
        {match[1]}
      </a>
    );
  });
}

export default function TitlePara({ title, para }) {
  return (
     <div className="flex flex-col gap-4 mt-14">
            <h2 className="font-poppins font-medium text-lg md:text-[22px]">{title}</h2>
            <p className="font-poppins font-light text-sm md:text-lg"><ParagraphContent text={para} /></p>
    </div>
  );
}