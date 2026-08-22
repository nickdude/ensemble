"use client";

import { useState } from "react";
import ImageField from "./ImageField";
import { IMAGE_KEYS } from "@/lib/admin/sections";

/* ── label + type helpers ────────────────────────────────────────────────── */

// Friendlier names for cryptic data keys. Anything not listed is auto-humanized.
const LABEL_OVERRIDES = {
  img: "Image",
  image: "Image",
  mainImage: "Main image",
  footerImage: "Footer image",
  authorImage: "Author image",
  break: "Second heading line",
  titleHighlight: "Highlighted text",
  sectionTitle: "Section title",
  para: "Paragraph",
  desc: "Description",
  caseStudyLink: "Case study link",
  buttonLabel: "Button text",
  buttonLink: "Button link",
  submitLabel: "Submit button text",
  ariaLabel: "Accessibility label",
  readTime: "Read time",
  faqs: "Questions",
  groups: "Groups",
  points: "Points",
  counts: "Counters",
  cards: "Cards",
  members: "Team members",
  sections: "Sections",
  locations: "Locations",
  offices: "Offices",
  items: "Items",
  projects: "Projects",
  newsItems: "News items",
  blogsCards: "Blog cards",
  primaryNav: "Primary navigation",
  secondaryNav: "Secondary navigation",
  socialMedia: "Social links",
  authorName: "Author name",
  authorDesignation: "Author designation",
  authorSays: "Author quote",
};

function humanize(key) {
  if (!key && key !== 0) return "";
  if (LABEL_OVERRIDES[key]) return LABEL_OVERRIDES[key];
  return String(key)
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function isImageKey(key) {
  return IMAGE_KEYS.includes(String(key).toLowerCase());
}

function looksLikeImageUrl(str) {
  return /^https?:\/\/.+\.(png|jpe?g|webp|gif|svg|avif)(\?|#|$)/i.test(str || "");
}

// A readable title for a collapsed object card (e.g. an FAQ's question).
function summarize(obj, fallback) {
  if (obj == null || typeof obj !== "object") return fallback;
  for (const k of [
    "title",
    "question",
    "heading",
    "name",
    "label",
    "section",
    "slug",
    "author",
    "count",
  ]) {
    const v = obj[k];
    if (typeof v === "string" && v.trim()) return truncate(v);
    if (typeof v === "number") return String(v);
  }
  return fallback;
}

function truncate(s, n = 70) {
  return s.length > n ? s.slice(0, n - 1).trimEnd() + "…" : s;
}

function slugify(s) {
  return String(s)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Empty value shaped like an existing one (for "add item").
function blankLike(v) {
  if (Array.isArray(v)) return [];
  if (v && typeof v === "object") {
    const o = {};
    for (const k of Object.keys(v)) o[k] = blankLike(v[k]);
    return o;
  }
  if (typeof v === "number") return 0;
  if (typeof v === "boolean") return false;
  return "";
}

function joinPath(base, key) {
  return base === "" ? String(key) : `${base}.${key}`;
}

// Alt-text sibling key for an image key inside an object.
function altKeyFor(obj, imgKey) {
  const imageKeys = Object.keys(obj).filter((k) => isImageKey(k));
  if (imageKeys.length === 1 && "alt" in obj) return "alt";
  return `${imgKey}Alt`;
}

/* ── generic UI bits ─────────────────────────────────────────────────────── */

const inputClass =
  "w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-brand-blue focus:outline-none";

function FieldLabel({ children }) {
  return (
    <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
      {children}
    </span>
  );
}

function Collapsible({ title, subtitle, defaultOpen, actions, children }) {
  const [open, setOpen] = useState(Boolean(defaultOpen));
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="flex items-center gap-2 bg-gray-50 px-3 py-2">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex min-w-0 flex-1 items-center gap-2 text-left"
        >
          <span
            className={`text-gray-400 transition-transform ${open ? "rotate-90" : ""}`}
          >
            ▸
          </span>
          <span className="min-w-0">
            <span className="block truncate font-poppins text-sm font-semibold text-gray-800">
              {title}
            </span>
            {subtitle && !open && (
              <span className="block truncate text-xs text-gray-400">{subtitle}</span>
            )}
          </span>
        </button>
        {actions}
      </div>
      {open && <div className="flex flex-col gap-5 p-4">{children}</div>}
    </div>
  );
}

// Two-step delete: first click arms, second confirms.
function DeleteButton({ onDelete, label = "Delete" }) {
  const [armed, setArmed] = useState(false);
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        if (armed) onDelete();
        else {
          setArmed(true);
          setTimeout(() => setArmed(false), 2500);
        }
      }}
      className={`rounded px-2 py-1 text-xs font-medium transition ${
        armed
          ? "bg-brand-red text-white"
          : "text-brand-red hover:bg-brand-red/10"
      }`}
    >
      {armed ? "Confirm?" : label}
    </button>
  );
}

function MoveButtons({ onUp, onDown, isFirst, isLast }) {
  return (
    <div className="flex items-center">
      <IconBtn title="Move up" onClick={onUp} disabled={isFirst}>↑</IconBtn>
      <IconBtn title="Move down" onClick={onDown} disabled={isLast}>↓</IconBtn>
    </div>
  );
}

function IconBtn({ children, onClick, title, disabled }) {
  return (
    <button
      type="button"
      title={title}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
      disabled={disabled}
      className={`rounded px-2 py-1 text-xs font-medium transition ${
        disabled ? "cursor-not-allowed text-gray-300" : "text-gray-500 hover:bg-gray-200"
      }`}
    >
      {children}
    </button>
  );
}

/* ── leaf inputs ─────────────────────────────────────────────────────────── */

function Leaf({ keyName, value, onChange, seoCounter }) {
  const label = humanize(keyName);
  const str = value == null ? "" : String(value);

  // Image-looking strings (e.g. marquee/logo arrays) get a thumbnail too.
  if (typeof value === "string" && (isImageKey(keyName) || looksLikeImageUrl(str))) {
    return <ImageField label={label || "Image"} value={str} onChange={onChange} />;
  }
  if (typeof value === "boolean") {
    return (
      <label className="flex items-center gap-2 text-sm text-gray-700">
        <input
          type="checkbox"
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
          className="h-4 w-4 accent-brand-blue"
        />
        {label}
      </label>
    );
  }
  if (typeof value === "number") {
    return (
      <div className="flex flex-col gap-1">
        <FieldLabel>{label}</FieldLabel>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value === "" ? 0 : Number(e.target.value))}
          className={inputClass}
        />
      </div>
    );
  }

  const multiline = str.length > 60 || str.includes("\n") || seoCounter;
  const len = str.length;
  const seoOk = len >= 150 && len <= 160;
  return (
    <div className="flex flex-col gap-1">
      <FieldLabel>{label}</FieldLabel>
      {multiline ? (
        <textarea
          value={str}
          onChange={(e) => onChange(e.target.value)}
          rows={Math.min(10, Math.max(2, Math.ceil(str.length / 60)))}
          className={inputClass + " resize-y leading-relaxed"}
        />
      ) : (
        <input
          type="text"
          value={str}
          onChange={(e) => onChange(e.target.value)}
          className={inputClass}
        />
      )}
      {seoCounter && (
        <span
          className={`text-[11px] ${
            seoOk ? "text-green-600" : len > 160 ? "text-brand-red" : "text-amber-600"
          }`}
        >
          {len} characters {seoOk ? "✓" : "· aim for 150–160"}
        </span>
      )}
    </div>
  );
}

/* ── array editor ────────────────────────────────────────────────────────── */

function ArrayNode({ keyName, value, onChange, pathStr, section }) {
  const items = value;
  const [justAdded, setJustAdded] = useState(-1);
  const singular = humanize(keyName).replace(/s$/, "");

  const setItem = (i, v) => {
    const next = items.slice();
    next[i] = v;
    onChange(next);
  };
  const remove = (i) => onChange(items.filter((_, idx) => idx !== i));
  const move = (i, dir) => {
    const j = i + dir;
    if (j < 0 || j >= items.length) return;
    const next = items.slice();
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };
  const add = () => {
    setJustAdded(items.length);
    onChange([...items, items.length ? blankLike(items[0]) : ""]);
  };

  return (
    <div className="flex flex-col gap-3">
      {items.length === 0 && (
        <p className="text-sm text-gray-400">None yet — add the first one below.</p>
      )}
      {items.map((item, i) => {
        const complex = item && typeof item === "object";
        const open = i === justAdded || items.length <= 2;
        if (!complex) {
          // primitive array item — inline row with controls
          return (
            <div key={i} className="flex items-start gap-2">
              <div className="flex-1">
                <Leaf keyName="" value={item} onChange={(v) => setItem(i, v)} />
              </div>
              <MoveButtons
                onUp={() => move(i, -1)}
                onDown={() => move(i, 1)}
                isFirst={i === 0}
                isLast={i === items.length - 1}
              />
              <DeleteButton onDelete={() => remove(i)} label="✕" />
            </div>
          );
        }
        return (
          <Collapsible
            key={i}
            defaultOpen={open}
            title={`${singular} ${i + 1}`}
            subtitle={summarize(item, "")}
            actions={
              <>
                <MoveButtons
                  onUp={() => move(i, -1)}
                  onDown={() => move(i, 1)}
                  isFirst={i === 0}
                  isLast={i === items.length - 1}
                />
                <DeleteButton onDelete={() => remove(i)} />
              </>
            }
          >
            <Node
              keyName={keyName}
              value={item}
              onChange={(v) => setItem(i, v)}
              pathStr={joinPath(pathStr, i)}
              section={section}
            />
          </Collapsible>
        );
      })}
      <button
        type="button"
        onClick={add}
        className="self-start rounded-md border border-dashed border-brand-blue px-3 py-1.5 text-sm font-medium text-brand-blue hover:bg-brand-blue/5"
      >
        + Add {singular.toLowerCase() || "item"}
      </button>
    </div>
  );
}

/* ── object editor ───────────────────────────────────────────────────────── */

function AddEntryRow({ onAdd }) {
  const [name, setName] = useState("");
  return (
    <div className="flex items-center gap-2">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="New entry name (e.g. a blog title or slug)"
        className={inputClass + " flex-1"}
        onKeyDown={(e) => {
          if (e.key === "Enter" && name.trim()) {
            onAdd(slugify(name));
            setName("");
          }
        }}
      />
      <button
        type="button"
        onClick={() => {
          if (name.trim()) {
            onAdd(slugify(name));
            setName("");
          }
        }}
        className="rounded-md bg-brand-blue px-3 py-2 text-sm font-semibold text-white hover:opacity-90"
      >
        + Add
      </button>
    </div>
  );
}

function ObjectNode({ value, onChange, pathStr, section }) {
  const isMap = Boolean(section?.maps?.includes(pathStr));
  const isSeo = Boolean(section?.isSeo);
  const keys = Object.keys(value);

  const setKey = (k, v) => onChange({ ...value, [k]: v });
  const removeKey = (k) => {
    const next = { ...value };
    delete next[k];
    onChange(next);
  };
  const addEntry = (rawKey) => {
    const key = rawKey || "";
    if (!key || key in value) return;
    const template = keys.length ? blankLike(value[keys[0]]) : "";
    onChange({ ...value, [key]: template });
  };

  // Image keys "consume" their alt sibling so alt isn't rendered twice.
  const consumedAlt = new Set();
  for (const k of keys) {
    if (isImageKey(k)) consumedAlt.add(altKeyFor(value, k));
  }

  return (
    <div className="flex flex-col gap-5">
      {keys.map((k) => {
        if (consumedAlt.has(k) && !isImageKey(k)) return null; // rendered with its image
        const child = value[k];

        // Image field (with paired alt text)
        if (isImageKey(k) && (child == null || typeof child === "string")) {
          const aKey = altKeyFor(value, k);
          return (
            <ImageField
              key={k}
              label={humanize(k)}
              value={child}
              onChange={(v) => setKey(k, v)}
              alt={value[aKey]}
              onAltChange={(v) => setKey(aKey, v)}
            />
          );
        }

        const complex = child && typeof child === "object";
        if (complex) {
          const entryActions = isMap ? (
            <DeleteButton onDelete={() => removeKey(k)} />
          ) : null;
          return (
            <Collapsible
              key={k}
              defaultOpen={!isMap || keys.length <= 4}
              title={humanize(k)}
              subtitle={summarize(child, "")}
              actions={entryActions}
            >
              <Node
                keyName={k}
                value={child}
                onChange={(v) => setKey(k, v)}
                pathStr={joinPath(pathStr, k)}
                section={section}
              />
            </Collapsible>
          );
        }

        // primitive leaf
        return (
          <Leaf
            key={k}
            keyName={k}
            value={child}
            onChange={(v) => setKey(k, v)}
            seoCounter={isSeo}
          />
        );
      })}

      {isMap && (
        <div className="rounded-lg border border-dashed border-gray-300 p-3">
          <p className="mb-2 text-xs font-medium text-gray-500">Add a new entry</p>
          <AddEntryRow onAdd={addEntry} />
        </div>
      )}
    </div>
  );
}

/* ── dispatcher ──────────────────────────────────────────────────────────── */

function Node({ keyName, value, onChange, pathStr, section }) {
  if (Array.isArray(value)) {
    return (
      <ArrayNode
        keyName={keyName}
        value={value}
        onChange={onChange}
        pathStr={pathStr}
        section={section}
      />
    );
  }
  if (value && typeof value === "object") {
    return (
      <ObjectNode value={value} onChange={onChange} pathStr={pathStr} section={section} />
    );
  }
  return <Leaf keyName={keyName} value={value} onChange={onChange} />;
}

/* ── public entry ────────────────────────────────────────────────────────── */

export default function RecursiveEditor({ value, onChange, section }) {
  return (
    <Node keyName="" value={value} onChange={onChange} pathStr="" section={section} />
  );
}
