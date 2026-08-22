"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import RecursiveEditor from "@/components/admin/RecursiveEditor";
import SaveBar from "@/components/admin/SaveBar";
import Preview from "@/components/admin/Preview";
import { getSection } from "@/lib/admin/sections";

// section key → public route for the "View live" link.
const LIVE_PATHS = {
  home: "/",
  aboutus: "/aboutus",
  services: "/services",
  sustainability: "/sustainability",
  contact: "/contactus",
  blogs: "/blogs",
  news: "/news",
  projects: "/projects",
  footer: "/",
  faq: "/services",
  seo: null,
};

export default function SectionEditor() {
  const { section: key } = useParams();
  const section = useMemo(() => getSection(key), [key]);

  const [draft, setDraft] = useState(null);
  const [original, setOriginal] = useState(null);
  const [sha, setSha] = useState(null);
  const [git, setGit] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState(null);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    if (!section) return;
    let active = true;
    setLoading(true);
    fetch(`/api/admin/content/${key}`)
      .then(async (res) => {
        if (!res.ok) throw new Error((await res.json()).error || "Failed to load");
        return res.json();
      })
      .then((body) => {
        if (!active) return;
        setDraft(body.data);
        setOriginal(JSON.stringify(body.data));
        setSha(body.sha);
        setGit(body.git);
        setLoading(false);
      })
      .catch((err) => {
        if (!active) return;
        setLoadError(String(err.message || err));
        setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [key, section]);

  const dirty = draft != null && JSON.stringify(draft) !== original;
  const livePath = LIVE_PATHS[key] ?? null;

  const save = async () => {
    setSaving(true);
    setStatus(null);
    try {
      const res = await fetch(`/api/admin/content/${key}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: draft, sha, message: `admin: update ${section.label}` }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus({ type: "error", message: body.error || "Save failed" });
        setSaving(false);
        return;
      }
      setSha(body.sha ?? sha);
      setOriginal(JSON.stringify(draft));
      setStatus({
        type: "success",
        message: body.git
          ? "Published — the site will rebuild shortly."
          : "Saved to local file. Commit & push to publish.",
      });
      setSaving(false);
    } catch (err) {
      setStatus({ type: "error", message: String(err.message || err) });
      setSaving(false);
    }
  };

  const reset = () => {
    if (original) setDraft(JSON.parse(original));
    setStatus(null);
  };

  if (!section) {
    return (
      <div className="text-sm text-gray-600">
        Unknown section.{" "}
        <Link href="/admin" className="text-brand-blue">
          Back to dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/admin" className="text-sm text-gray-400 hover:text-gray-600">
            ← Dashboard
          </Link>
          <h1 className="mt-1 font-poppins text-2xl font-semibold text-gray-900">
            {section.label}
          </h1>
          <p className="text-sm text-gray-500">{section.description}</p>
        </div>
      </div>

      {!loading && !loadError && draft != null && (
        <div className="flex items-start gap-2 rounded-lg border border-brand-blue/20 bg-brand-blue/5 px-4 py-3 text-sm text-gray-600">
          <span aria-hidden="true">💡</span>
          <p>
            Click a card to expand it, then edit the text or images inside. Use{" "}
            <span className="font-medium">↑ ↓</span> to reorder and{" "}
            <span className="font-medium">+ Add</span> to create new items. Every image has an{" "}
            <span className="font-medium">alt text</span> box. When you’re done, press{" "}
            <span className="font-medium">{git ? "Publish" : "Save"}</span> at the bottom.
          </p>
        </div>
      )}

      {loading && <p className="text-sm text-gray-500">Loading…</p>}
      {loadError && (
        <div className="rounded-lg border border-brand-red/30 bg-brand-red/5 p-4 text-sm text-brand-red">
          {loadError}
          {!git && (
            <p className="mt-2 text-gray-600">
              Tip: set GITHUB_TOKEN &amp; GITHUB_REPO to edit live content, or run
              locally to edit the JSON files directly.
            </p>
          )}
        </div>
      )}

      {!loading && !loadError && draft != null && (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          {/* Editor */}
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <RecursiveEditor value={draft} onChange={setDraft} section={section} />
          </div>
          {/* Preview */}
          <div className="lg:sticky lg:top-6 lg:self-start">
            <Preview sectionKey={key} draft={draft} livePath={livePath} />
          </div>
        </div>
      )}

      {!loading && !loadError && draft != null && (
        <SaveBar
          dirty={dirty}
          saving={saving}
          status={status}
          git={git}
          livePath={livePath}
          onSave={save}
          onReset={reset}
        />
      )}
    </div>
  );
}
