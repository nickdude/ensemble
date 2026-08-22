"use client";

import { useState } from "react";
import ImageField from "./ImageField";
import { IMAGE_KEYS } from "@/lib/admin/sections";

/* ── helpers ─────────────────────────────────────────────────────────────── */

function humanize(key) {
  if (!key && key !== 0) return "";
  return String(key)
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function isImageKey(key) {
  return IMAGE_KEYS.includes(String(key).toLowerCase());
}

// Build an empty value shaped like an existing one (for "add item").
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

/* ── leaf inputs ─────────────────────────────────────────────────────────── */

function Leaf({ keyName, value, onChange }) {
  const label = humanize(keyName);

  if (isImageKey(keyName)) {
    return <ImageField label={label} value={value} onChange={onChange} />;
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

  const str = value == null ? "" : String(value);
  const multiline = str.length > 60 || str.includes("\n");
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
    </div>
  );
}

const inputClass =
  "w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-brand-blue focus:outline-none";

function FieldLabel({ children }) {
  return (
    <span className="text-xs font-medium uppercase tracking-wide text-gray-500">
      {children}
    </span>
  );
}

/* ── array editor ────────────────────────────────────────────────────────── */

function ArrayNode({ keyName, value, onChange, pathStr, section }) {
  const items = value;
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
    const template = items.length ? blankLike(items[0]) : "";
    onChange([...items, template]);
  };

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => (
        <div key={i} className="rounded-lg border border-gray-200 bg-gray-50/60 p-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-500">
              {humanize(keyName).replace(/s$/, "")} {i + 1}
            </span>
            <div className="flex items-center gap-1">
              <IconBtn title="Move up" onClick={() => move(i, -1)} disabled={i === 0}>↑</IconBtn>
              <IconBtn title="Move down" onClick={() => move(i, 1)} disabled={i === items.length - 1}>↓</IconBtn>
              <IconBtn title="Remove" onClick={() => remove(i)} danger>✕</IconBtn>
            </div>
          </div>
          <Node
            keyName={keyName}
            value={item}
            onChange={(v) => setItem(i, v)}
            pathStr={joinPath(pathStr, i)}
            section={section}
            hideLabel
          />
        </div>
      ))}
      <button
        type="button"
        onClick={add}
        className="self-start rounded-md border border-dashed border-brand-blue px-3 py-1.5 text-sm font-medium text-brand-blue hover:bg-brand-blue/5"
      >
        + Add {humanize(keyName).replace(/s$/, "").toLowerCase()}
      </button>
    </div>
  );
}

/* ── object editor ───────────────────────────────────────────────────────── */

function ObjectNode({ value, onChange, pathStr, section }) {
  const isMap = Boolean(section?.maps?.includes(pathStr));
  const keys = Object.keys(value);

  const setKey = (k, v) => onChange({ ...value, [k]: v });
  const removeKey = (k) => {
    const next = { ...value };
    delete next[k];
    onChange(next);
  };
  const addEntry = () => {
    const name = window.prompt("New entry key (e.g. a slug like 'blog3'):");
    if (!name) return;
    const key = name.trim();
    if (!key || key in value) return;
    const template = keys.length ? blankLike(value[keys[0]]) : {};
    onChange({ ...value, [key]: template });
  };

  return (
    <div className="flex flex-col gap-5">
      {keys.map((k) => {
        const child = value[k];
        const complex = child && typeof child === "object";
        return (
          <div key={k} className={complex ? "rounded-lg border border-gray-200 p-4" : ""}>
            {complex && (
              <div className="mb-3 flex items-center justify-between">
                <h4 className="font-poppins text-sm font-semibold text-gray-800">
                  {humanize(k)}
                </h4>
                {isMap && (
                  <IconBtn title="Delete entry" onClick={() => removeKey(k)} danger>
                    Delete
                  </IconBtn>
                )}
              </div>
            )}
            <Node
              keyName={k}
              value={child}
              onChange={(v) => setKey(k, v)}
              pathStr={joinPath(pathStr, k)}
              section={section}
            />
          </div>
        );
      })}
      {isMap && (
        <button
          type="button"
          onClick={addEntry}
          className="self-start rounded-md border border-dashed border-brand-blue px-3 py-1.5 text-sm font-medium text-brand-blue hover:bg-brand-blue/5"
        >
          + Add entry
        </button>
      )}
    </div>
  );
}

/* ── dispatcher ──────────────────────────────────────────────────────────── */

function Node({ keyName, value, onChange, pathStr, section, hideLabel }) {
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
  return <Leaf keyName={hideLabel ? "" : keyName} value={value} onChange={onChange} />;
}

/* ── reusable small button ───────────────────────────────────────────────── */

function IconBtn({ children, onClick, title, disabled, danger }) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      disabled={disabled}
      className={`rounded px-2 py-1 text-xs font-medium transition ${
        disabled
          ? "cursor-not-allowed text-gray-300"
          : danger
          ? "text-brand-red hover:bg-brand-red/10"
          : "text-gray-500 hover:bg-gray-100"
      }`}
    >
      {children}
    </button>
  );
}

/* ── public entry ────────────────────────────────────────────────────────── */

export default function RecursiveEditor({ value, onChange, section }) {
  return (
    <Node
      keyName=""
      value={value}
      onChange={onChange}
      pathStr=""
      section={section}
      hideLabel
    />
  );
}
