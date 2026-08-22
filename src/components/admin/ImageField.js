"use client";

// Image field: URL input + live thumbnail preview + an alt-text input for
// accessibility/SEO. Images are hosted externally (S3 etc.), so we store/paste
// URLs — no uploads (per project decision). `alt`/`onAltChange` are optional;
// when provided, every image gets an alt box.
export default function ImageField({
  label,
  value,
  onChange,
  alt,
  onAltChange,
  hint,
}) {
  const url = typeof value === "string" ? value : "";
  const showAlt = typeof onAltChange === "function";

  return (
    <div className="flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-3">
      <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">
        {label}
      </label>
      <div className="flex items-start gap-3">
        <a
          href={url || undefined}
          target="_blank"
          rel="noreferrer"
          className="h-20 w-20 shrink-0 overflow-hidden rounded-md border border-gray-200 bg-gray-50"
          title={url ? "Open image in new tab" : undefined}
        >
          {url ? (
            // Plain <img>: arbitrary admin-entered URLs, preview only.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={url}
              alt=""
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.visibility = "hidden";
              }}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-[10px] text-gray-400">
              no image
            </div>
          )}
        </a>
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <div>
            <span className="text-[11px] text-gray-400">Image URL</span>
            <input
              type="url"
              value={url}
              onChange={(e) => onChange(e.target.value)}
              placeholder="https://…"
              className="mt-0.5 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-brand-blue focus:outline-none"
            />
          </div>
          {showAlt && (
            <div>
              <span className="text-[11px] text-gray-400">
                Alt text{" "}
                <span className="text-gray-300">
                  (describes the image for screen readers &amp; SEO)
                </span>
              </span>
              <input
                type="text"
                value={typeof alt === "string" ? alt : ""}
                onChange={(e) => onAltChange(e.target.value)}
                placeholder="e.g. Modern open-plan office reception"
                className="mt-0.5 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-brand-blue focus:outline-none"
              />
            </div>
          )}
          {hint && <p className="text-[11px] text-gray-400">{hint}</p>}
        </div>
      </div>
    </div>
  );
}
