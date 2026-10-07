# vaibhv19.dev Repository Audit

> **Audit Date:** October 7, 2026  
> **Repository:** `vaibhv19/Portfolio-BLog`  
> **Active Branch:** `develop`  
> **Type:** Read-Only Audit & Verification Report (No modifications performed)

---

## 1. Executive Summary

| Metric | Value | Notes |
| :--- | :--- | :--- |
| **Repository Health** | **Excellent** | Clean builds, 0 TypeScript errors, 0 ESLint errors |
| **Total Non-Generated Files** | **93 files** | Excluding `.git`, `.next`, `node_modules` |
| **Total Repository LOC** | **13,559 lines** | 5,686 LOC in `src/` |
| **Potentially Removable LOC** | **~2,656 lines** | ~2,323 LOC (core dead code/data) + 333 LOC (search) |
| **Potentially Removable Files** | **26 files** | 9 code/data files, 2 search files, 15 certificate PDFs |
| **Potentially Removable Assets** | **15 PDFs (~7.83 MB)** | Unreferenced certificate PDFs in `public/certificates/` |
| **Potentially Unused Dependencies** | **1 package** | `fuse.js` (tied exclusively to `/search`) |
| **Stale Redirects / References** | **3 stale redirects** | In `next.config.ts` targeting removed `/technology` route |
| **Build Status** | **PASSED (0 errors)** | 26 static pages successfully pre-rendered |
| **TypeScript Typecheck** | **PASSED (0 errors)** | Strict mode type-safe |
| **ESLint Status** | **PASSED (0 errors)** | 0 errors, 2 informational `<img>` warnings |

---

## 2. SAFE TO DELETE

These items have zero active incoming imports, are unreachable in the production user experience, and were superseded by recent architectural updates (removal of `/projects` and `/technology` routes, migration of project datasets to the MyWork repository, and direct external linking to LeetCode).

### 2.1 Unused Component Files

1. **`src/components/CategoryFolder.tsx`**
   - **Type:** React Client Component (`.tsx`)
   - **LOC / Size:** 179 lines (~6.3 KB)
   - **Why Unused:** Collapsible accordion folder component originally created to render project categories on the `/projects` page. The `/projects` route was removed, and the project catalog now lives at `mywork.vaibhv19.dev`.
   - **References Checked:** Grepped across `src/`. Zero active pages import it.
   - **Confidence:** **HIGH**

2. **`src/components/TechnologyCategoryFolder.tsx`**
   - **Type:** React Client Component (`.tsx`)
   - **LOC / Size:** 148 lines (~4.2 KB)
   - **Why Unused:** Category folder component for the removed `/technology` knowledge web index.
   - **References Checked:** Zero active pages import it.
   - **Confidence:** **HIGH**

3. **`src/components/LeetCodeStatsCard.tsx`**
   - **Type:** React Client Component (`.tsx`)
   - **LOC / Size:** 134 lines (~4.2 KB)
   - **Why Unused:** Client component that polled `/api/leetcode-stats` to render problem-solving breakdown cards. Replaced on the About page with a direct link to `https://leetcode.com/u/vaibhv_19/`.
   - **References Checked:** Not imported by `src/app/about/page.tsx` or any other file.
   - **Confidence:** **HIGH**

---

### 2.2 Unused Helper & Library Files

4. **`src/lib/technologyArticles.ts`**
   - **Type:** TypeScript Library (`.ts`)
   - **LOC / Size:** 233 lines (~14.1 KB)
   - **Why Unused:** Helper functions (`getAllTechnologyArticles`, `getTechnologyArticleBySlug`, `getTechnologyBreadcrumb`, etc.) for generating static params and content for `/technology` routes.
   - **References Checked:** Zero active files import this library.
   - **Confidence:** **HIGH**

5. **`src/lib/leetcode.ts`**
   - **Type:** TypeScript Library (`.ts`)
   - **LOC / Size:** 183 lines (~6.2 KB)
   - **Why Unused:** Multi-tier fallback fetcher (GraphQL $\rightarrow$ REST proxy $\rightarrow$ local snapshot) for LeetCode statistics. Only imported by the unused `LeetCodeStatsCard.tsx` and `src/app/api/leetcode-stats/route.ts`.
   - **References Checked:** Zero references in active components or pages.
   - **Confidence:** **HIGH**

---

### 2.3 Unused API Route Handlers

6. **`src/app/api/leetcode-stats/route.ts`**
   - **Type:** Next.js Route Handler (`route.ts`)
   - **LOC / Size:** 24 lines (~0.7 KB)
   - **Why Unused:** Backend endpoint returning JSON LeetCode stats. Since `LeetCodeStatsCard.tsx` is no longer rendered on the frontend, nothing requests this endpoint.
   - **References Checked:** Zero active frontend calls.
   - **Confidence:** **HIGH**

---

### 2.4 Unused Data Datasets

7. **`src/data/projects.ts`**
   - **Type:** TypeScript Data Dataset (`.ts`)
   - **LOC / Size:** 507 lines (~23.6 KB)
   - **Why Unused:** Contains the entire dataset of 11+ projects, training frameworks, and bullets. The project catalog dataset has been completely migrated to the dedicated MyWork repository (`mywork.vaibhv19.dev`).
   - **References Checked:** Only referenced by the unused `CategoryFolder.tsx`.
   - **Confidence:** **HIGH**

8. **`src/data/technologyContent.ts`**
   - **Type:** TypeScript Data Dataset (`.ts`)
   - **LOC / Size:** 675 lines (~97.8 KB)
   - **Why Unused:** Large collection of long-form markdown articles for individual technology pages (`/technology/[slug]`). These routes were removed.
   - **References Checked:** Only imported by unused `src/lib/technologyArticles.ts`.
   - **Confidence:** **HIGH**

9. **`src/data/technologyInventory.ts`**
   - **Type:** TypeScript Data Dataset (`.ts`)
   - **LOC / Size:** 240 lines (~6.7 KB)
   - **Why Unused:** Category and technology taxonomy mappings.
   - **References Checked:** Only imported by unused `TechnologyCategoryFolder.tsx` and `technologyArticles.ts`.
   - **Confidence:** **HIGH**

---

### 2.5 Unused Static Assets

10. **`public/certificates/*.pdf` (15 files, ~7.83 MB)**
    - `public/certificates/Certificate - E&ICT Academy, IIT Kanpur.pdf` (604.9 KB)
    - `public/certificates/Completion Certificate _ SkillsBuild.pdf` (50.5 KB)
    - `public/certificates/Exploring Quantum Computing.pdf` (23.4 KB)
    - `public/certificates/getting Started with AI.pdf` (34.3 KB)
    - `public/certificates/Getting Started with Cybersecurity.pdf` (50.5 KB)
    - `public/certificates/IBMDesign20260709-20-b30ko9.pdf` (75.4 KB)
    - `public/certificates/IBMDesign20260709-21-6qc48f.pdf` (71.8 KB)
    - `public/certificates/IFACET IITK.pdf` (551.8 KB)
    - `public/certificates/simpliLearn  docker.pdf` (373.3 KB)
    - `public/certificates/simpliLearn Java.pdf` (373.1 KB)
    - `public/certificates/simplilearn mongoDB.pdf` (373.5 KB)
    - `public/certificates/The Joy of Computing using Python.pdf` (477.9 KB)
    - `public/certificates/Troubleshoot Your Code Using IBM Bob.pdf` (50.7 KB)
    - `public/certificates/Vaibhav+Gupta_163129260.pdf` (505.9 KB)
    - `public/certificates/Vaibhav_Gupta_Exploratory Data Analysis.pdf` (440.0 KB)
    - **Why Unused:** None of these PDFs are linked or referenced in any page, article, or component.
    - **Confidence:** **HIGH**

11. **`public/fonts/README.md`**
    - **Type:** Documentation file
    - **Size:** 276 bytes
    - **Why Unused:** Describes Google Fonts setup; no local font files reside in `public/fonts/`.
    - **Confidence:** **HIGH**

---

## 3. REVIEW BEFORE DELETE

These items are functional but require user decision regarding intended site scope.

### 3.1 Search Subsystem

1. **`src/app/search/page.tsx`** (245 lines, ~8.9 KB)
2. **`src/lib/searchIndex.ts`** (88 lines, ~2.3 KB)
3. **`fuse.js` Dependency** in `package.json` (`^7.5.0`)
   - **Current State:** The search trigger button was removed from `Header.tsx`. The `/search` page still builds statically and works if accessed directly at `http://localhost:3000/search`.
   - **Decision Needed:**
     - *Option A (Retain as direct route):* Keep `/search` active for direct access or future search shortcut.
     - *Option B (Full removal):* Delete `src/app/search/`, `src/lib/searchIndex.ts`, and uninstall `fuse.js`. (Recovers 333 LOC and removes 1 npm package).
   - **Confidence:** **MEDIUM**

---

### 3.2 Backward Compatibility Aliases

4. **`src/data/writing.ts`** (8 lines)
   - **Current State:** Re-exports `PostArticle`, `WritingArticle`, `POST_ARTICLES`, and `WRITING_ARTICLES` from `./posts`.
   - **Why in Review:** The 18 individual article files in `src/data/articles/*.ts` still contain `import { WritingArticle } from "../writing";`.
   - **Recommendation:** Once the 18 article files have their imports updated from `"../writing"` to `"../posts"`, `src/data/writing.ts` can be deleted.
   - **Confidence:** **MEDIUM**

---

## 4. UNUSED DATA SUMMARY

| File | LOC | Size | Replaced By / Reason |
| :--- | :--- | :--- | :--- |
| `src/data/projects.ts` | 507 | 23.6 KB | Migrated to MyWork repository |
| `src/data/technologyContent.ts` | 675 | 97.8 KB | `/technology` routes removed |
| `src/data/technologyInventory.ts` | 240 | 6.7 KB | `/technology` routes removed |
| **Total Unused Data** | **1,422** | **128.1 KB** | |

---

## 5. UNUSED ASSETS SUMMARY

| Asset Path | Size | Type | Status |
| :--- | :--- | :--- | :--- |
| `public/certificates/*.pdf` (15 files) | ~7.83 MB | PDF Documents | Unreferenced in code |
| `public/fonts/README.md` | 276 B | Markdown | Informational |

### Active Assets (Do NOT delete):
- `public/profile-avatar.jpeg` (84.7 KB) — Rendered on HomePage hero portrait
- `public/images/WhatsApp Image 2026-08-25 at 4.50.20 AM.jpeg` (291.4 KB) — Rendered on About page
- `public/images/starry-night-bg.jpg` (2.45 MB) — Rendered in `StarryNightBackground.tsx`
- `public/favicon.ico`, `public/icon.svg`, `public/favicon.svg`, `public/favicon-16x16.png`, `public/favicon-32x32.png`, `public/apple-touch-icon.png`, `public/favicon.png` — Standard favicon & Apple touch icon bundle referenced in `RootLayout` metadata

---

## 6. UNUSED CODE & EXPORTS

1. **`src/components/GithubContributionGraph.tsx`**:
   - The fallback contribution generator inside `src/lib/github.ts` has full coverage.
2. **`src/components/BrandIcons.tsx`**:
   - Contains icons for X, Bluesky, LinkedIn, GitHub, Threads, WhatsApp, Facebook, Telegram, Pinterest.
   - `ThreadsIcon`, `WhatsappIcon`, `FacebookIcon`, `TelegramIcon`, `PinterestIcon` are actively used in `ArticleFooter.tsx` social share buttons and `Footer.tsx`. (All are in active use).
3. **`src/app/globals.css`**:
   - `.font-serif-editorial`: Used in `src/app/posts/[slug]/page.tsx` line 106 (`font-serif-editorial italic border-l-2`).
   - `.animate-page-transition`: Used in `src/components/PageTransition.tsx`.

---

## 7. DEPENDENCIES AUDIT (`package.json`)

```json
{
  "dependencies": {
    "fuse.js": "^7.5.0",      // [REVIEW] Only used by /search page
    "lucide-react": "^1.33.0", // [ACTIVE] Used across pages & icons
    "next": "16.3.2",          // [ACTIVE] Framework core
    "react": "19.2.8",         // [ACTIVE] React core
    "react-dom": "19.2.8",     // [ACTIVE] React DOM core
    "resend": "^6.26.0"        // [ACTIVE] Powers /api/contact email dispatch
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4", // [ACTIVE] Tailwind CSS v4 compiler
    "@types/node": "^20",         // [ACTIVE] TypeScript types
    "@types/react": "^19",        // [ACTIVE] TypeScript types
    "@types/react-dom": "^19",    // [ACTIVE] TypeScript types
    "eslint": "^9",               // [ACTIVE] Linter core
    "eslint-config-next": "16.3.2",// [ACTIVE] Next.js lint rules
    "tailwindcss": "^4",          // [ACTIVE] Tailwind CSS v4
    "typescript": "^5"            // [ACTIVE] TypeScript compiler
  }
}
```

---

## 8. OBSOLETE ROUTES & STALE CONFIGURATION

### 8.1 `next.config.ts` Redirects
In `next.config.ts`, lines 5–21 define redirects to `/technology`:
```ts
{
  source: "/skills",
  destination: "/technology", // Stale: /technology route was removed
  permanent: true,
},
{
  source: "/my-experience-with",
  destination: "/technology", // Stale
  permanent: true,
},
{
  source: "/my-experience-with/:slug*",
  destination: "/technology/:slug*", // Stale
  permanent: true,
}
```
**Issue:** Since `/technology` was removed, hitting `/skills` produces a redirect to a 404 page.  
**Recommendation:** Update these to redirect to `/posts` or `https://mywork.vaibhv19.dev`, and add legacy `/writing` $\rightarrow$ `/posts` 301 redirects:
```ts
{
  source: "/writing",
  destination: "/posts",
  permanent: true,
},
{
  source: "/writing/:slug*",
  destination: "/posts/:slug*",
  permanent: true,
}
```

---

## 9. ACTIVE ROUTES AUDIT

| Route | Type | Pre-rendered | Status |
| :--- | :--- | :--- | :--- |
| `/` | Static | Yes | **Active (Home Page)** |
| `/about` | Static | Yes | **Active (About Page)** |
| `/posts` | Static | Yes | **Active (Posts Archive)** |
| `/posts/[slug]` (18 routes) | SSG | Yes | **Active (18 Post Reading Views)** |
| `/search` | Static | Yes | **Active (Direct URL only)** |
| `/api/contact` | Dynamic | N/A | **Active (Contact Form Dispatcher)** |
| `/api/github-contributions` | Dynamic | N/A | **Active (GitHub Calendar Telemetry)** |
| `/api/leetcode-stats` | Dynamic | N/A | **Orphaned (No frontend consumer)** |

---

## 10. DUPLICATION AUDIT

1. **Favicon SVG Duplication**:
   - `src/app/icon.svg` (559 B)
   - `public/icon.svg` (559 B)
   - `public/favicon.svg` (559 B)
   - *Note:* All 3 files contain identical SVG XML markup. Next.js App Router automatically handles `src/app/icon.svg`.

---

## 11. CURRENT SITE HEALTH & DIAGNOSTICS

```bash
# Next.js Production Build
▲ Next.js 16.3.2 (Turbopack)
✓ Compiled successfully in 1.4s
✓ Running TypeScript ... (0 errors)
✓ Generating static pages using 12 workers (26/26)
✓ Finalizing page optimization ...
Exit code: 0

# ESLint Diagnostic
✓ 0 errors, 2 warnings (informational <img> tag LCP tips)
Exit code: 0
```

---

## 12. ESTIMATED REMOVABLE LOC BREAKDOWN

```
Category                         Files      LOC        Disk Size
------------------------------------------------------------------
Unused Components                  3        461 LOC    14.7 KB
Unused Libraries & Helpers         2        416 LOC    20.3 KB
Unused API Routes                  1         24 LOC     0.7 KB
Unused Legacy Datasets             3      1,422 LOC   128.1 KB
------------------------------------------------------------------
Subtotal Core Safe to Delete       9      2,323 LOC   163.8 KB

Optional Search Subsystem          2        333 LOC    11.2 KB
Unused PDF Assets                 15          0 LOC     7.83 MB
------------------------------------------------------------------
TOTAL POTENTIAL CLEANUP           26      2,656 LOC     8.0 MB
```

---

## 13. RECOMMENDED CLEANUP PHASES

### Phase 1 — Safe Immediate Cleanup (Zero Risk)
Remove files that have 0 references in active application routes:
1. `src/components/CategoryFolder.tsx`
2. `src/components/TechnologyCategoryFolder.tsx`
3. `src/components/LeetCodeStatsCard.tsx`
4. `src/lib/technologyArticles.ts`
5. `src/lib/leetcode.ts`
6. `src/app/api/leetcode-stats/`
7. `src/data/technologyContent.ts`
8. `src/data/technologyInventory.ts`
9. `src/data/projects.ts` (Already secured in MyWork repo)
10. `public/certificates/` directory (7.83 MB of unused PDFs)

### Phase 2 — Configuration & Alias Cleanups
1. Update `next.config.ts`:
   - Replace `/skills` and `/my-experience-with` destinations.
   - Add `/writing` $\rightarrow$ `/posts` 301 redirects.
2. Update the 18 files in `src/data/articles/*.ts` from `import { WritingArticle } from "../writing"` to `import { PostArticle } from "../posts"`.
3. Delete `src/data/writing.ts`.

### Phase 3 — User Decision on Search
- Decide whether to preserve `/search` as a standalone direct-access tool or remove `src/app/search/`, `src/lib/searchIndex.ts`, and uninstall `fuse.js`.

---

## 14. DO NOT DELETE (Required Assets & Code)

- `src/app/page.tsx`, `src/app/about/page.tsx`, `src/app/posts/page.tsx`, `src/app/posts/[slug]/page.tsx`, `src/app/layout.tsx`
- `src/components/Header.tsx`, `src/components/Footer.tsx`, `src/components/ContactForm.tsx`, `src/components/GithubContributionGraph.tsx`, `src/components/ArticleFooter.tsx`, `src/components/BrandIcons.tsx`, `src/components/StatusBadge.tsx`, `src/components/StarryNightBackground.tsx`, `src/components/PageTransition.tsx`
- `src/data/posts.ts` and all 18 article files in `src/data/articles/`
- `src/lib/blogNavigation.ts`, `src/lib/github.ts`
- `src/app/api/contact/route.ts`, `src/app/api/github-contributions/route.ts`
- `public/profile-avatar.jpeg`, `public/images/WhatsApp Image 2026-08-25 at 4.50.20 AM.jpeg`, `public/images/starry-night-bg.jpg`
- Dependencies `resend` and `lucide-react`
