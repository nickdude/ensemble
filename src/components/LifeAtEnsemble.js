"use client";

import { peopleAndCultureData } from "@/data/home/peopleAndCultureData";

export default function LifeAtEnsemble({ data = peopleAndCultureData }) {
  const { lifeAtEnsemble } = data;

  return (
    <section className="life-at-ensemble">
      <div className="life-at-ensemble__inner">
        <h2 className="life-at-ensemble__title">{lifeAtEnsemble.title}</h2>
        <div className="life-at-ensemble__gallery">
          {lifeAtEnsemble.gallery.map((item, index) => (
            <div key={`${item.alt}-${index}`} className={`life-at-ensemble__tile life-at-ensemble__tile--${index + 1}`}>
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}