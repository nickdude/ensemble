This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## Content Admin Panel (`/admin`)

All site content lives as JSON under `src/content/*.json` (the `src/data/home/*.js`
modules simply re-export it, so every existing import keeps working). The admin panel
at **`/admin`** lets you edit every section — Home, About, Services, Sustainability,
Contact, Footer, FAQs, SEO/AEO, and the Blogs/News/Projects collections (including
per-slug articles) — through structured forms with a live preview, without touching code.

### How publishing works
- **Production:** saving from the panel commits the updated JSON to GitHub via the
  Contents API; your normal auto-deploy rebuilds the site (~1–2 min to go live).
  Every edit is a reviewable, revertable git commit.
- **Local dev:** if no GitHub token is set, saving writes the JSON file on disk so you
  can preview locally, then commit & push yourself.

### Setup
Copy `.env.example` to `.env.local` (and set the same vars in your Vercel project):

```bash
ADMIN_PASSWORD=…            # password to log into /admin
ADMIN_SESSION_SECRET=…      # random 32+ char string that signs the session cookie
GITHUB_TOKEN=…             # fine-grained PAT with "Contents: Read and write" on the repo
GITHUB_REPO=nickdude/ensemble
GITHUB_BRANCH=main
```

Then visit `/admin`, log in with `ADMIN_PASSWORD`, pick a section, edit, and **Publish**.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
