"use client";

// URL-based image field: a text input for the image URL plus a live thumbnail
// preview. Images are hosted externally (S3 etc.), so we store/paste URLs —
// no uploads (per project decision).
export default function ImageField({ label, value, onChange }) {
  const url = typeof value === "string" ? value : "";
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-medium uppercase tracking-wide text-gray-500">
        {label}
      </label>
      <div className="flex items-start gap-3">
        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md border border-gray-200 bg-gray-50">
          {url ? (
            // Plain <img> (not next/image): arbitrary admin-entered URLs, preview only.
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
        </div>
        <input
          type="url"
          value={url}
          onChange={(e) => onChange(e.target.value)}
          placeholder="https://…"
          className="min-w-0 flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-brand-blue focus:outline-none"
        />
      </div>
    </div>
  );
}
