# Lifegate — Landing Page

A Next.js landing page built with the App Router, Tailwind CSS and Framer Motion. Designed as a marketing/static site (client components + local assets). Includes example components such as `components/Hero.tsx` and `components/Gallery.tsx`.

## Quick facts

- **Framework:** Next.js (app directory)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Carousel:** Swiper
- **Images:** next/image (local files in `public/`)

## Repo structure (high level)

- `app/` — Next.js app routes and layout
- `components/` — UI pieces (e.g. `Hero.tsx`, `Gallery.tsx`, `components/utils/animations.ts`)
- `styles/`, `app/globals.css` — Tailwind/global styles
- `public/` — static images (e.g. `/product.png`, `/object.png`)
- `package.json`, `pnpm-lock.yaml` or `package-lock.json` — install & scripts

## Prerequisites

- Node 18+ recommended (match engines in package.json)
- pnpm (preferred if pnpm-lock.yaml exists) or npm

## Local development

1. **Install:**
   - pnpm:
     ```bash
     pnpm install
     ```
   - npm:
     ```bash
     npm install
     ```

2. **Run dev server:**
   - pnpm:
     ```bash
     pnpm dev
     ```
   - npm:
     ```bash
     npm run dev
     ```

3. Open http://localhost:3000

## Build & Static Export

If your site is fully static-exportable:

- **Build & export:**
  - pnpm:
    ```bash
    pnpm exec next build && pnpm exec next export
    ```
  - npm:
    ```bash
    npm run build && npx next export
    ```
  - Output folder: `out/` (serve as static files)

**Note:** Next App Router may use server-only features (server components, API routes, middleware, dynamic data) that prevent `next export`. If `next export` fails, deploy as a Node web service instead.

## Suggested package.json scripts (add if missing)

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start -p $PORT",
    "export": "next export"
  }
}
```

## Deploy to Render

### Option A — Static Site (if exportable)

1. Create a new Static Site on Render and connect your repo.
2. Build Command:
   - pnpm:
     ```bash
     pnpm install && pnpm exec next build && pnpm exec next export
     ```
   - npm:
     ```bash
     npm install && npm run build && npx next export
     ```
3. Publish Directory: `out`
4. Deploy.

### Option B — Web Service (recommended for App Router)

1. Create a new Web Service (Node) on Render and connect your repo.
2. Build Command:
   - pnpm:
     ```bash
     pnpm install && pnpm exec next build
     ```
   - npm:
     ```bash
     npm install && npm run build
     ```
3. Start Command:
   - pnpm:
     ```bash
     pnpm exec next start -p $PORT
     ```
   - npm:
     ```bash
     npm run start
     ```
4. Ensure Render uses a compatible Node version (set in service settings or package.json engines).

## Troubleshooting

- If `next export` fails: search for server components, API routes, or dynamic routes—these require SSR/Node.
- Check Render build logs for dependency or environment variable errors.
- Ensure local assets are in `public/` and referenced with absolute paths (e.g., `/product.png`).
- If using next/image with external hosts, update `next.config.*` with allowed domains.
