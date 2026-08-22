"use client";

import FAQ from "@/components/FAQ";
import FourPointSection from "@/components/FourPointSection";

// Live preview: renders the ACTUAL production components with the in-progress
// draft as props, so what you see uses the real design/Tailwind — no divergence.
// Prop-driven pages get a faithful component preview; others link to the live
// page (changes appear there after publish + redeploy).
export default function Preview({ sectionKey, draft, livePath }) {
  if (sectionKey === "faq" && draft) {
    const pages = Object.keys(draft);
    return (
      <PreviewFrame>
        {pages.map((page) => (
          <div key={page}>
            <div className="bg-gray-50 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-gray-400">
              {page}
            </div>
            <FAQ details={draft[page]} />
          </div>
        ))}
      </PreviewFrame>
    );
  }

  if (sectionKey === "services" && draft) {
    const blocks = ["design", "general", "build", "base"].filter((k) => draft[k]);
    return (
      <PreviewFrame>
        {blocks.map((k) => (
          <FourPointSection key={k} details={draft[k]} />
        ))}
      </PreviewFrame>
    );
  }

  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
      <p className="text-sm text-gray-500">
        Live component preview isn’t available for this section yet.
      </p>
      {livePath && (
        <a
          href={livePath}
          target="_blank"
          rel="noreferrer"
          className="rounded-md bg-brand-blue px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
        >
          Open live page ↗
        </a>
      )}
      <p className="max-w-xs text-xs text-gray-400">
        Your edits go live on the page after you publish and the site redeploys
        (about a minute).
      </p>
    </div>
  );
}

function PreviewFrame({ children }) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200">
      <div className="border-b border-gray-100 bg-gray-50 px-3 py-1.5 text-xs text-gray-400">
        Live preview
      </div>
      <div className="max-h-[70vh] overflow-y-auto">{children}</div>
    </div>
  );
}
