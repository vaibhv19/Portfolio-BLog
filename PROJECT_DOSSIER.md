# Portfolio & Blog (portfolio-website)

## 1. Project Overview
A production-ready personal engineering portfolio, technical blog, and systems showcase built with **Next.js 16.3.2 (App Router)**, **React 19.2.8**, **TypeScript 5**, and **Tailwind CSS v4**. The application serves as an interactive platform documenting long-form engineering essays, software system architectures, credential records, patent details, and live developer telemetry (GitHub contributions and LeetCode problem-solving stats). The codebase is designed around zero-bloat static pre-rendering, strongly typed data models, and multi-tier resilient API fallback architecture.

---

## 2. Why I Built It
Standard developer portfolios often rely on generic templates, third-party link trees, or superficial lists of buzzwords that fail to explain how systems actually behave under operational constraints. I built this platform to:
1. Treat technical writing, architecture retrospectives, and project failure analyses as first-class engineering artifacts.
2. Build a custom, cohesive visual identity (Starry Night theme, slate dark-mode ergonomics, copper/amber accents, monospace badge typography) that reflects the intersection of technical precision and visual craft.
3. Showcase real software projects with transparent architectural breakdowns, live demo endpoints, and direct source repository links without relying on heavy external CMS dependencies.

---

## 3. Problem / Question
* **Problem**: How to build an engineering portfolio and technical publishing platform that presents complex distributed systems and AI architectures with complete transparency, rigorous technical writing, and live telemetry, without introducing bloated headless CMS dependencies, fragile third-party iframe widgets, or client-side runtime parsing overhead.
* **Core Question**: How do we design an information architecture where code explanations, failure mode analyses, cross-project comparisons, and external developer metrics render seamlessly with sub-second static page loads and 100% uptime guarantees even when external APIs fail?

---

## 4. What It Actually Does
* **Long-Form Technical Writing Archive (`/writing`, `/writing/[slug]`)**: Houses comprehensive technical articles covering distributed caching, AI agent safety harnesses, hybrid RAG retrieval pipelines, real-time WebSocket framing, and engineering discipline. Pre-renders all routes statically at build time via `generateStaticParams` with bidirectional next/previous chronological navigation (`getBlogNavigation`).
* **Categorized Project Catalog (`/projects`)**: Organizes software systems into distinct classifications: Applied Projects, System Integrity & DevSecOps Guardrails, Academic Milestones, and Training Frameworks. Each entry contains technical taglines, architecture bullets, tech stack tags, live deployment links, and GitHub repository links.
* **Technology Knowledge Web (`/technology`, `/technology/[slug]`)**: An interactive technology index mapping languages, frameworks, AI/ML tools, databases, distributed caching primitives, security mechanisms, and DevOps infrastructure directly to project evidence and technical breakdowns.
* **Live Developer Activity Telemetry**:
  * **GitHub Contribution Graph (`/api/github-contributions`, `GithubContributionGraph.tsx`)**: Ingests live commit activity via a 3-tier fallback architecture (Authenticated GraphQL $\rightarrow$ Public REST proxy $\rightarrow$ Deterministic local snapshot) with a 24-hour cache header.
  * **LeetCode Statistics Card (`/api/leetcode-stats`, `LeetCodeStatsCard.tsx`)**: Displays problem-solving statistics (Total Solved, Easy/Medium/Hard breakdown, global ranking, acceptance rate) via a 3-tier fallback architecture.
* **Credentials & Intellectual Property Showcase (`/certifications`, `/intellectual-property`, `/education`, `/experience`)**: Dedicated views presenting certified credentials (IIT Kanpur, NPTEL Elite, IBM), educational background (GNIOT B.Tech CS 2023–2027), internship history (Edunet Foundation, IBM PBEL Gold Category), and a registered Indian Patent (*"Real-Time Analytics Device for E-Commerce"*).
* **Accessible Navigation Drawer (`Header.tsx`)**: Custom mobile slide-over drawer with Escape-key listeners, double-requestAnimationFrame backdrop transitions, active route indicators, and direct social endpoints.

---

## 5. Architecture
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          Next.js 16 App Router                              │
│                                                                             │
│  ┌─────────────────────────┐  ┌──────────────────────────────────────────┐  │
│  │   Server Components     │  │          Static Page Generation          │  │
│  │   - Layout & SEO        │  │   - /writing/[slug]                      │  │
│  │   - /projects           │  │   - /technology/[slug]                   │  │
│  │   - /about              │  │   - /writing (Archive)                   │  │
│  │   - /experience         │  │   - /certifications                      │  │
│  └─────────────────────────┘  └──────────────────────────────────────────┘  │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │                      Next.js Route Handlers                           │  │
│  │   - /api/github-contributions  (Cache-Control: s-maxage=86400)        │  │
│  │   - /api/leetcode-stats        (Cache-Control: s-maxage=86400)        │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                 │                                           │
│         ┌───────────────────────┴───────────────────────┐                   │
│         ▼                                               ▼                   │
│  ┌──────────────────────────────┐        ┌──────────────────────────────┐   │
│  │   GitHub Ingestion Pipeline  │        │  LeetCode Ingestion Pipeline │   │
│  │   1. Official GraphQL + PAT  │        │   1. Official GraphQL API    │   │
│  │   2. Public REST API Proxy   │        │   2. Alfa LeetCode REST API  │   │
│  │   3. Deterministic Fallback  │        │   3. Deterministic Snapshot  │   │
│  └──────────────────────────────┘        └──────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                     Strongly Typed Data Models (src/data)                   │
│  - writing.ts & articles/*.ts (Article Registry & Content Modules)          │
│  - projects.ts (System Records & Framework Definitions)                     │
│  - technologyInventory.ts & technologyContent.ts (Technology Index)         │
│  - experience.ts, education.ts, certifications.ts, patents.ts               │
└─────────────────────────────────────────────────────────────────────────────┘
```

* **Core Runtime**: Next.js 16.3.2 running on Node.js.
* **Component Architecture**: React 19 Server Components by default for content pages; targeted `"use client"` directives only for interactive UI components (`Header.tsx`, `StarryNightBackground.tsx`, `CategoryFolder.tsx`, `GithubContributionGraph.tsx`, `LeetCodeStatsCard.tsx`).
* **Styling & Design System**: Tailwind CSS v4 (`@tailwindcss/postcss`), custom CSS variables for Google Font `Syne` (`--font-syne`), slate-900 glassmorphic card containers, and copper (`#c87d55` / `#d98e66`) semantic accents.
* **Data Layer**: Pure TypeScript static data structures (`src/data/`), avoiding CMS network latency and enabling full compile-time type safety.

---

## 6. Important Technical Decisions

1. **Static Route Pre-Rendering (`dynamicParams = false`)**:
   * *Decision*: All blog post routes and technology subpages are pre-rendered at build time using `generateStaticParams`.
   * *Rationale*: Eliminates server-side rendering latency, provides instant page transitions, and ensures the site can be hosted statically with zero database dependencies.
2. **Three-Tier Fallback Strategy for Third-Party Telemetry**:
   * *Decision*: Both `/api/github-contributions` and `/api/leetcode-stats` implement a strict cascading fallback pipeline: (1) Authenticated official GraphQL $\rightarrow$ (2) Public hosted REST proxy $\rightarrow$ (3) Deterministic local mock/snapshot.
   * *Rationale*: External developer APIs are subject to unannounced rate-limiting, CORS restrictions, or downtime. A personal portfolio must never display a broken UI state due to an external service outage.
3. **Pure TypeScript Content Modeling over Heavy CMS/MDX Runtimes**:
   * *Decision*: Articles and project records are modeled directly as strongly typed TypeScript arrays and interfaces (`WritingArticle`, `Project`, `TechnologyCategory`) rather than parsed through external markdown runtimes or headless CMS APIs.
   * *Rationale*: Guarantees compile-time type validation for all links, slugs, and dates, eliminates runtime parsing overhead, and provides seamless IDE refactoring.
4. **Multi-Layer Blurred Background Canvas (`StarryNightBackground.tsx`)**:
   * *Decision*: Implemented a fixed, GPU-accelerated background layer utilizing a CSS-blurred (`blur-[10px]` to `blur-[14px]`) Starry Night image combined with dark gradient overlays (`bg-[#0a0d14]/78`).
   * *Rationale*: Creates depth and visual polish without impacting text contrast or DOM scroll performance.

---

## 7. Interesting Engineering Problems

1. **Windows Path Shell Collision with Ampersand in Workspace Directory**:
   * *Problem*: The root directory name contained an ampersand (`Portfolio & BLog`), causing Windows Command Prompt / PowerShell npm `.bin` wrappers to fail with syntax errors (`'BLog\node_modules\.bin\' is not recognized...`).
   * *Solution*: Directly invoked underlying Node.js runtime entry points (`node "./node_modules/typescript/bin/tsc"` and `node "./node_modules/next/dist/bin/next"`) using quoted path strings to ensure cross-platform execution stability.
2. **Deterministic Inverse Chronological Indexing Across Static Routes**:
   * *Problem*: Displaying descending chronological index numbers on both the home page and archive pages while supporting dynamic sorting by ISO date strings as new articles are published.
   * *Solution*: Implemented centralized date sorting utilities that compute position dynamically against the master `WRITING_ARTICLES` registry, ensuring newly added posts automatically inherit the top index.
3. **Double-Buffered Animation Frame Drawer Transitions**:
   * *Problem*: Mobile drawer menus in React often exhibit flickering or abrupt layout jumps when toggling visibility classes immediately after DOM mounting.
   * *Solution*: Utilized nested `requestAnimationFrame` calls in `Header.tsx` to ensure the DOM node is rendered before triggering CSS translate transitions, followed by a coordinated `setTimeout` unmount delay on close.

---

## 8. Failure Modes / Things That Went Wrong

1. **Third-Party API Rate Limiting on Serverless Deployments**:
   * *Failure Mode*: During high-frequency rebuilds or unauthenticated requests, LeetCode and GitHub GraphQL endpoints return HTTP 429 / 403 status codes.
   * *Mitigation*: Configured HTTP response caching headers (`s-maxage=86400, stale-while-revalidate=43200`) and implemented local procedural fallback generators (`getFallbackContributions`, `getFallbackLeetCodeStats`).
2. **Accidental Structural Glitches in Early Drafts**:
   * *Failure Mode*: Early content drafting introduced duplicate section headers and premature outline dumps in draft articles.
   * *Mitigation*: Executed a formal two-phase mechanical audit (`blog_audit_report.md`), followed by strict structural reassembly and `tsc --noEmit` build verification.

---

## 9. Verification / Testing
* **Type Checking**: Continuous verification using TypeScript compiler (`tsc --noEmit`) passing with **0 errors**.
* **Route Validation**: Verified static parameter generation across all dynamic article slugs (`/writing/[slug]`) and technology slugs (`/technology/[slug]`).
* **Runtime Verification**: Dev server tested locally on `http://localhost:3000`, confirming successful HTTP 200 responses, proper meta tag generation, and live telemetry rendering on the home page and article routes.

---

## 10. Deployment
* **Platform**: Vercel / Node.js Server Environment.
* **Build Command**: `next build` (compiled to optimized static HTML and serverless route handlers).
* **Caching Strategy**: Incremental Static Regeneration (ISR) with 24-hour cache windows on API endpoints (`revalidate = 86400`).

---

## 11. What I Learned
1. **Content-as-Code Reliability**: Treating documentation and technical articles as typed TypeScript data structures provides massive advantages over loose markdown files or external CMS databases—renaming a slug or refactoring a type immediately highlights broken references across the entire codebase at compile time.
2. **Resilience Engineering on the Web**: External APIs should always be treated as untrusted, flaky dependencies. Implementing cascading fallbacks is essential for maintaining production uptime and visual stability.

---

## 12. What Changed in My Thinking
* Shifted from viewing a personal website as a static resume to treating it as an active system engineering journal and technical knowledge web.
* Realized that aesthetic composition, dark-mode ergonomics, and typography are not superficial visual flair, but functional engineering tools that reduce cognitive fatigue when reading complex system diagrams and technical retrospectives.

---

## 13. Distinctive / Interesting Details
* **Deep-Dive Technical Essays**: Spanning distributed cache mechanics (Java vs Python), AI agent sandboxing (Vigil), hybrid RAG retrieval (Phoenix), WebSocket framing (Conclave/Foundry), and engineering philosophy.
* **Starry Night Background Canvas**: Custom multi-layer blurred visual overlay (`StarryNightBackground.tsx`) providing an understated, ambient aesthetic.
* **Technology Knowledge Web**: Comprehensive index mapping technology categories to project source code evidence.
* **Zero External CSS Framework Bloat**: Custom Tailwind CSS v4 theme variables tailored for high-density information presentation.

---

## 14. Skills Demonstrated

### Engineering Skills
* Full-Stack Web Architecture
* Static Site Generation (SSG) & Incremental Static Regeneration (ISR)
* REST & GraphQL API Integration
* Resilient Multi-Tier Fallback Design
* Type-Safe Data Modeling
* Technical Writing & System Documentation
* Component-Driven UI Engineering

### Technologies & Tools
* **Languages**: TypeScript, JavaScript, HTML5, CSS3
* **Frameworks & Runtimes**: Next.js 16 (App Router), React 19, Node.js
* **Styling**: Tailwind CSS v4, PostCSS
* **Icons & Typography**: Lucide React, Google Fonts (`Syne`, Monospace)
* **APIs & Tooling**: GitHub GraphQL API, LeetCode GraphQL API, Git, Vercel

### Concepts
* Server Components vs Client Components
* Static Route Pre-Rendering (`generateStaticParams`)
* HTTP Cache Headers (`s-maxage`, `stale-while-revalidate`)
* Fallback-First Resilience Architecture
* Information Hierarchy & UI Ergonomics

### Best Skills for LinkedIn (Curated)
1. **Next.js (App Router)**
2. **React 19**
3. **TypeScript**
4. **Tailwind CSS**
5. **System Architecture**
6. **GraphQL & REST APIs**
7. **Static Site Generation (SSG)**
8. **UI/UX Engineering**

---

## 15. Public Content

### LinkedIn Project Description
> Built a personal engineering platform, technical writing archive, and systems showcase using Next.js (App Router), React, TypeScript, and Tailwind CSS.
> 
> Rather than relying on generic resume templates or third-party link trees, I wanted a platform that treats technical writing, architecture retrospectives, and project documentation as first-class engineering artifacts. The site hosts long-form technical essays exploring distributed caching, multi-agent orchestration, and sandboxed AI evaluation, alongside a technology knowledge web mapped directly to project code evidence.
> 
> Key engineering highlights:
> • Zero-bloat static route generation (`generateStaticParams`) for instant page transitions across essays and technology breakdowns.
> • 3-tier cascading fallback pipelines for live developer telemetry (GitHub contributions & LeetCode stats) with 24-hour ISR caching to ensure zero UI breakage during third-party API rate limits.
> • Pure TypeScript data modeling for compile-time type safety across all slugs, links, and dates without runtime CMS overhead.

### LinkedIn Featured Description
> An interactive engineering portfolio and technical writing archive built with Next.js, React, and TypeScript—featuring live developer telemetry, deep-dive system architecture breakdowns, and a custom Starry Night visual aesthetic.

### Resume Bullets
* **Bullet 1**: Architected a personal engineering portfolio and technical publishing platform using Next.js (App Router), React, and TypeScript, statically pre-rendering long-form technical essays and system architecture breakdowns.
* **Bullet 2**: Engineered a 3-tier resilient data ingestion pipeline (authenticated GraphQL $\rightarrow$ public REST proxy $\rightarrow$ deterministic procedural fallback) with 24-hour ISR caching for live GitHub and LeetCode activity telemetry.
* **Bullet 3**: Modeled cross-project technical documentation and a technology knowledge web as compile-time typed TypeScript schemas, eliminating runtime CMS dependencies and ensuring 100% link integrity.

### GitHub Repo One-Liner
> Personal engineering portfolio, technical blog, and systems showcase built with Next.js, React, and TypeScript.

---

## 16. Claims That Should NOT Be Made
* **Do NOT use current content/project counts in public descriptions** (e.g., "15 essays", "11 projects", "8 categories"), because portfolio inventory is expected to change over time.
* **Do NOT claim**: "Serves millions of active readers" or fabricate traffic numbers.
* **Do NOT claim**: "Replaced enterprise CMS solutions" or compare to commercial SaaS blogging platforms.
* **Do NOT claim**: "Achieved 100% test coverage" (testing is currently compiler-based static type checking and runtime route validation).
* **Do NOT claim**: Arbitrary performance percentages (e.g. "reduced latency by 85%") unless backed by formal Lighthouse audit artifacts.

---

## 17. Evidence / Source References
*(Note: File references and counts below document the codebase inventory as verified at the time of this dossier)*
* **Next.js & React Setup**: [package.json](file:///d:/Coding/Projects----Miscellaneous/Portfolio%20&%20BLog/package.json#L1-L28), [src/app/layout.tsx](file:///d:/Coding/Projects----Miscellaneous/Portfolio%20&%20BLog/src/app/layout.tsx)
* **Blog Archive & Articles**: [src/data/writing.ts](file:///d:/Coding/Projects----Miscellaneous/Portfolio%20&%20BLog/src/data/writing.ts), [src/data/articles/](file:///d:/Coding/Projects----Miscellaneous/Portfolio%20&%20BLog/src/data/articles/) (15 article files verified in corpus)
* **Dynamic Article Routing & Navigation**: [src/app/writing/[slug]/page.tsx](file:///d:/Coding/Projects----Miscellaneous/Portfolio%20&%20BLog/src/app/writing/%5Bslug%5D/page.tsx), [src/lib/blogNavigation.ts](file:///d:/Coding/Projects----Miscellaneous/Portfolio%20&%20BLog/src/lib/blogNavigation.ts)
* **Project Catalog Data**: [src/data/projects.ts](file:///d:/Coding/Projects----Miscellaneous/Portfolio%20&%20BLog/src/data/projects.ts) (11+ projects & frameworks verified)
* **Technology Knowledge Web**: [src/data/technologyInventory.ts](file:///d:/Coding/Projects----Miscellaneous/Portfolio%20&%20BLog/src/data/technologyInventory.ts), [src/data/technologyContent.ts](file:///d:/Coding/Projects----Miscellaneous/Portfolio%20&%20BLog/src/data/technologyContent.ts)
* **GitHub Telemetry Handler & Fallbacks**: [src/app/api/github-contributions/route.ts](file:///d:/Coding/Projects----Miscellaneous/Portfolio%20&%20BLog/src/app/api/github-contributions/route.ts), [src/lib/github.ts](file:///d:/Coding/Projects----Miscellaneous/Portfolio%20&%20BLog/src/lib/github.ts)
* **LeetCode Telemetry Handler & Fallbacks**: [src/app/api/leetcode-stats/route.ts](file:///d:/Coding/Projects----Miscellaneous/Portfolio%20&%20BLog/src/app/api/leetcode-stats/route.ts), [src/lib/leetcode.ts](file:///d:/Coding/Projects----Miscellaneous/Portfolio%20&%20BLog/src/lib/leetcode.ts)
* **Starry Night Background & Visual Theme**: [src/components/StarryNightBackground.tsx](file:///d:/Coding/Projects----Miscellaneous/Portfolio%20&%20BLog/src/components/StarryNightBackground.tsx), [src/app/globals.css](file:///d:/Coding/Projects----Miscellaneous/Portfolio%20&%20BLog/src/app/globals.css)
* **Navigation Header & Drawer Transitions**: [src/components/Header.tsx](file:///d:/Coding/Projects----Miscellaneous/Portfolio%20&%20BLog/src/components/Header.tsx)
