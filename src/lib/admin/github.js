// Git-based content persistence via the GitHub Contents API.
//
// The admin panel reads the live committed JSON (so the editor is never stale)
// and writes edits back as commits. On push, the existing deploy pipeline
// rebuilds the site. No database required.
//
// Env: GITHUB_TOKEN (fine-grained PAT with contents:write on the repo),
//      GITHUB_REPO (e.g. "nickdude/ensemble"), GITHUB_BRANCH (e.g. "main").

const API = "https://api.github.com";

function config() {
  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPO;
  const branch = process.env.GITHUB_BRANCH || "main";
  if (!token || !repo) {
    throw new Error("GITHUB_TOKEN and GITHUB_REPO must be set");
  }
  return { token, repo, branch };
}

function headers(token) {
  return {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
}

// base64 <-> UTF-8 helpers that work in the Node route-handler runtime.
function encodeBase64(str) {
  return Buffer.from(str, "utf-8").toString("base64");
}
function decodeBase64(b64) {
  return Buffer.from(b64, "base64").toString("utf-8");
}

/**
 * Read a JSON file from the repo.
 * @param {string} path e.g. "src/content/homeData.json"
 * @returns {Promise<{ data: any, sha: string }>}
 */
export async function readContent(path) {
  const { token, repo, branch } = config();
  const url = `${API}/repos/${repo}/contents/${encodeURIComponent(path).replace(/%2F/g, "/")}?ref=${branch}`;
  const res = await fetch(url, { headers: headers(token), cache: "no-store" });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GitHub read failed (${res.status}): ${body}`);
  }
  const json = await res.json();
  const content = decodeBase64(json.content || "");
  return { data: JSON.parse(content), sha: json.sha };
}

/**
 * Commit an updated JSON file to the repo.
 * @param {string} path
 * @param {any} data       serialized with 2-space indent (matches repo style)
 * @param {string} sha      current blob sha (from readContent) for optimistic lock
 * @param {string} message  commit message
 * @returns {Promise<{ sha: string, commit: string }>}
 */
export async function writeContent(path, data, sha, message) {
  const { token, repo, branch } = config();
  const url = `${API}/repos/${repo}/contents/${encodeURIComponent(path).replace(/%2F/g, "/")}`;
  const content = encodeBase64(JSON.stringify(data, null, 2) + "\n");
  const res = await fetch(url, {
    method: "PUT",
    headers: { ...headers(token), "Content-Type": "application/json" },
    body: JSON.stringify({ message, content, sha, branch }),
  });
  if (res.status === 409) {
    const err = new Error("Content changed since it was loaded (sha conflict)");
    err.code = "SHA_CONFLICT";
    throw err;
  }
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GitHub write failed (${res.status}): ${body}`);
  }
  const json = await res.json();
  return { sha: json.content?.sha, commit: json.commit?.html_url };
}

/** Whether the git integration is configured (used to show setup hints in UI). */
export function gitConfigured() {
  return Boolean(process.env.GITHUB_TOKEN && process.env.GITHUB_REPO);
}
