# SkunkWorks Projects — Website (EN | PT | ES)

This folder contains your complete website built with **React (Vite) + TailwindCSS**, fully multilingual (**English**, **Portuguese (PT-EU)**, **Spanish (ES-EU)**).

## What you (or your IT team) can do in 5–10 minutes

### Option A — Deploy on Vercel (Recommended)
1. Go to https://vercel.com and Sign up (use the email: miguel.melo@skunkworks-projects.com).
2. Click **Add New… › Project › Import** and select **Import from Git** or **Manually Upload**.
   - If manually uploading, **drag the entire unzipped folder** of this project.
3. When prompted for **Framework Preset**, choose **Vite**.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Click **Deploy**. You’ll get a live URL immediately.
7. In **Settings › Domains**, add: `www.skunkworks-projects.com` and follow the on‑screen DNS instructions from Vercel.
8. Done ✅

### Option B — Share with a developer
Send this ZIP to your IT partner; all dependencies are in `package.json`. They only need to run:
```
npm install
npm run build
```
…and upload the `dist/` folder to any static hosting.

## Content updates
- All texts are in `src/locales/*/common.json`.
- Switch default language in `src/i18n/index.js` (lng).
- Logo file: `public/assets/logo.png`.

If you want me to adjust anything (sections, colours, forms, analytics), just tell me which changes you want.
