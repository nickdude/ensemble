"use client";

// Sticky action bar for editors: shows dirty/publishing state and the publish
// control. `git` indicates whether saving commits to GitHub (live) or writes a
// local file (dev).
export default function SaveBar({
  dirty,
  saving,
  status,
  git,
  livePath,
  onSave,
  onReset,
}) {
  return (
    <div className="sticky bottom-0 z-10 flex flex-wrap items-center justify-between gap-3 border-t border-gray-200 bg-white/95 px-6 py-3 backdrop-blur">
      <div className="text-sm text-gray-500">
        {status ? (
          <span
            className={
              status.type === "error"
                ? "text-brand-red"
                : status.type === "success"
                ? "text-green-600"
                : "text-gray-500"
            }
          >
            {status.message}
          </span>
        ) : dirty ? (
          <span className="text-amber-600">Unsaved changes</span>
        ) : (
          <span>All changes saved</span>
        )}
      </div>
      <div className="flex items-center gap-2">
        {livePath && (
          <a
            href={livePath}
            target="_blank"
            rel="noreferrer"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100"
          >
            View live ↗
          </a>
        )}
        <button
          type="button"
          onClick={onReset}
          disabled={!dirty || saving}
          className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-300"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={onSave}
          disabled={!dirty || saving}
          className="rounded-md bg-brand-blue px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {saving ? "Publishing…" : git ? "Publish" : "Save"}
        </button>
      </div>
    </div>
  );
}
