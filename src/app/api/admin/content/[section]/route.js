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

function migrateProjectSlugs(previousData, nextData) {
  const previousProjects = previousData?.projectGallery?.projects || [];
  const projects = nextData?.projectGallery?.projects || [];
  const details = { ...(nextData?.projectDetail || {}) };

  for (const [index, project] of projects.entries()) {
    const previous = previousProjects[index];
    if (!previous?.slug || !project?.slug || previous.slug === project.slug) continue;

    const detail = details[previous.slug];
    if (detail && !details[project.slug]) {
      details[project.slug] = detail;
      delete details[previous.slug];
    }

    const legacySlugs = new Set(project.legacySlugs || []);
    legacySlugs.add(previous.slug);
    project.legacySlugs = [...legacySlugs];
  }

  for (const project of projects) {
    if (project?.slug) project.caseStudyLink = `projects/${project.slug}`;
  }

  return { ...nextData, projectDetail: details };
}

function migrateBlogSlugs(previousData, nextData) {
  const previousCards = previousData?.blogsCards || [];
  const cards = nextData?.blogsCards || [];
  const details = { ...(nextData?.blogDetail || {}) };

  for (const [index, card] of cards.entries()) {
    const previous = previousCards[index];
    if (!previous?.slug || !card?.slug || previous.slug === card.slug) continue;

    const detail = details[previous.slug];
    if (detail && !details[card.slug]) {
      details[card.slug] = detail;
      delete details[previous.slug];
    }

    const legacySlugs = new Set(card.legacySlugs || []);
    legacySlugs.add(previous.slug);
    card.legacySlugs = [...legacySlugs];
  }

  return { ...nextData, blogDetail: details };
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
    let data = body.data;
    if (key === "projects" || key === "blog") {
      const current = gitConfigured()
        ? await readContent(section.path)
        : await readLocal(section.path);
      data = key === "projects"
        ? migrateProjectSlugs(current.data, data)
        : migrateBlogSlugs(current.data, data);
    }
    const result = gitConfigured()
      ? await writeContent(section.path, data, body.sha, message)
      : await writeLocal(section.path, data);
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
