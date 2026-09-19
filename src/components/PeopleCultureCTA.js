"use client";

import Link from "next/link";

function FeatureIcon({ type }) {
  if (type === "projects") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-none stroke-current stroke-[1.8]">
        <path d="M3.5 8.5h17v11h-17zM8 8.5V6.8c0-.9.7-1.6 1.6-1.6h4.8c.9 0 1.6.7 1.6 1.6v1.7M9 13h6M12 11v4" />
      </svg>
    );
  }

  if (type === "ownership") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-none stroke-current stroke-[1.8]">
        <path d="m4 16 5-5 3 3 7-7M14 7h5v5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-none stroke-current stroke-[1.8]">
      <circle cx="8" cy="8" r="2.5" />
      <circle cx="16" cy="8" r="2.5" />
      <path d="M3.5 18c.3-3 1.8-4.5 4.5-4.5s4.2 1.5 4.5 4.5M11.5 18c.3-3 1.8-4.5 4.5-4.5s4.2 1.5 4.5 4.5M12 6v6M9.5 9h5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5 fill-none stroke-current stroke-[1.5]">
      <path d="M3 10h13M11 5l5 5-5 5" />
    </svg>
  );
}

export default function PeopleCultureCTA() {
  const features = [
    { type: "projects", label: "Meaningful projects" },
    { type: "ownership", label: "Real Ownership" },
    { type: "team", label: "A supportive team" },
  ];

  return (
    <section className="people-culture-cta">
      <div className="people-culture-cta__inner">
        <h2 className="people-culture-cta__title">
          Let&apos;s build bigger together
        </h2>
        <p className="people-culture-cta__description">
          If you want to work on large commercial projects as part of a team that owns them from the first drawing to handover, we&apos;d like to hear from you.
        </p>

        <div className="people-culture-cta__actions">
          <Link
            href="/contactus"
            className="people-culture-cta__button people-culture-cta__button--primary"
          >
            <FeatureIcon type="projects" />
            <span>See Open Roles</span>
            <ArrowIcon />
          </Link>
          <Link
            href="/contactus"
            className="people-culture-cta__button people-culture-cta__button--secondary"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current stroke-[1.8]"><path d="M6.5 4.5h3l1.5 4-2 1.5c1 2.1 2.4 3.5 4.5 4.5l1.5-2 4 1.5v3c0 1.1-.9 2-2 2C10.4 19 5 13.6 5 7c0-1.4.1-2.5 1.5-2.5Z" /></svg>
            <span>Contact Us</span>
            <ArrowIcon />
          </Link>
        </div>

        <div className="people-culture-cta__features">
          {features.map((feature, index) => (
            <div key={feature.label} className="people-culture-cta__feature">
              <span className="people-culture-cta__icon">
                <FeatureIcon type={feature.type} />
              </span>
              <span className="people-culture-cta__label">{feature.label}</span>
              {index < features.length - 1 && <span className="people-culture-cta__divider" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}