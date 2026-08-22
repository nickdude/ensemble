import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";
import { getSection } from "@/lib/admin/sections";
import { readContent, writeContent, gitConfigured } from "@/lib/admin/github";

// Node runtime: needs fs (local fallback) + Buffer (github base64).
export const runtime = "nodejs";

const putSchema = z.object({
  data: z.any(),
  sha: z.string().nullable().optional(),
  message: z.string().optional(),
});

function localPath(repoPath) {
  return path.join(process.cwd(), repoPath);
}

async function readLocal(repoPath) {
  const raw = await fs.readFile(localPath(repoPath), "utf-8");
  return { data: JSON.parse(raw), sha: null };
}

async function writeLocal(repoPath, data) {
  await fs.writeFile(
    localPath(repoPath),
    JSON.stringify(data, null, 2) + "\n",
    "utf-8"
  );
  return { sha: null, commit: null };
}

export async function GET(_request, { params }) {
  const { section: key } = await params;
  const section = getSection(key);
  if (!section) {
    return NextResponse.json({ error: "Unknown section" }, { status: 404 });
  }
  try {
    const result = gitConfigured()
      ? await readContent(section.path)
      : await readLocal(section.path);
    return NextResponse.json({ ...result, git: gitConfigured() });
  } catch (err) {
    return NextResponse.json({ error: String(err.message || err) }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  const { section: key } = await params;
  const section = getSection(key);
  if (!section) {
    return NextResponse.json({ error: "Unknown section" }, { status: 404 });
  }

  let body;
  try {
    body = putSchema.parse(await request.json());
  } catch {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }
  if (body.data === undefined || body.data === null) {
    return NextResponse.json({ error: "No data to save" }, { status: 400 });
  }

  const message = body.message || `admin: update ${section.label}`;
  try {
    const result = gitConfigured()
      ? await writeContent(section.path, body.data, body.sha, message)
      : await writeLocal(section.path, body.data);
    return NextResponse.json({ ok: true, ...result, git: gitConfigured() });
  } catch (err) {
    if (err.code === "SHA_CONFLICT") {
      return NextResponse.json(
        { error: "This content was changed elsewhere. Reload and retry.", code: "SHA_CONFLICT" },
        { status: 409 }
      );
    }
    return NextResponse.json({ error: String(err.message || err) }, { status: 500 });
  }
}
