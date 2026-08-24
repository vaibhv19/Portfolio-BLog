# Portfolio Website — Information Architecture

## 1. Document Purpose

This document defines the information architecture and high-level structural organization of the portfolio website.

It answers:

- What pages and professional sections exist?
- How are those sections organized?
- What appears on the homepage?
- What receives a dedicated page?
- How do section previews lead to complete records?
- What is the role of the About page?
- How should Featured differ from Projects?
- How should Blogs fit into the portfolio?

This document does **not** define the visual theme, color palette, typography, or motion system. Those belong to `THEME.md`.

---

## 2. Core Architectural Principle

The portfolio will use a **LinkedIn-inspired professional information architecture**.

This means the portfolio will contain the same major professional sections as the LinkedIn profile, with one intentional substitution:

> **LinkedIn Posts → Portfolio Blogs**

The portfolio is therefore the expanded, designed, and long-form representation of the same professional identity.

However:

> The portfolio copies the **information architecture and content hierarchy**, not the visual design of LinkedIn.

---

## 3. Multi-Page Architecture

The portfolio will be a multi-page website.

The homepage is the professional overview and entry point.

Dedicated pages provide the complete record for each major area.

The overall structure is:

- Home
- About
- Featured
- Projects
  - Individual Project Pages
- Experience
- Education
- Skills
- Certifications
- Writing
  - Chronological Writing Archive
  - Individual Writing Pages
- My Experience With…
  - Technology & Engineering Concept Index
  - Individual Experience Articles

The exact URL structure will be decided during technical architecture.

---

## 4. Homepage Architecture

The homepage should function as a concise professional overview.

Its purpose is to answer:

> Who is this person, what has he built, and where should I explore next?

The homepage should provide a preview of each major professional section rather than duplicating every section in full.

The high-level homepage flow is:

1. Introduction / Profile
2. About Preview
3. Featured
4. Projects Preview
5. Experience Preview
6. Education Preview
7. Skills Preview
8. Certifications Preview
9. Writing Preview (2–3 regular Writing articles only; excludes My Experience With… articles)
10. Footer

The exact order may be refined during detailed page design.

---

## 5. Preview → See All Principle

Every major section should follow the same architectural pattern:

1. Show the latest, most relevant, or selected 1–2 entries.
2. Provide a clear **See All** path to the complete section.

The homepage should not attempt to display the complete professional record.

The intended flow is:

**Homepage → Section Preview → See All → Dedicated Section Page → Complete Record**

For example:

**Home → Projects Preview → See All Projects → Projects Page → Complete Project Catalog**

This principle applies to:

- Featured
- Projects
- Experience
- Education
- Skills
- Certifications
- Writing

The homepage acts as a **professional snapshot**, while dedicated pages provide depth.

---

## 6. Featured

Featured is a curated section.

It is not a complete record.

Its purpose is:

> **Look at this first.**

Featured content may include:

- strongest projects
- strongest blog posts
- important repositories
- major achievements
- other important professional links or work

A project may appear in both Featured and Projects.

This is intentional.

### Featured

Curated highlights.

### Projects

Complete body of project work.

The principle is:

> **Featured means priority. Projects means completeness.**

The same content may appear in both when appropriate.

---

## 7. Projects

Projects represent the complete engineering body of work.

The Projects section should contain all portfolio-worthy projects.

The homepage displays only a selected preview.

The Projects page displays the complete catalog.

Major projects should receive dedicated project pages.

Individual project pages should eventually provide a detailed engineering case study.

Potential content includes:

- project context
- problem
- architecture
- engineering decisions
- implementation
- technical challenges
- verification
- results
- repository links
- relevant documentation or demonstrations

The exact project-page structure will be defined later.

---

## 8. Writing and "My Experience With…" Systems

The portfolio contains **two separate content systems** for long-form writing:

### 8.1 Writing

Writing replaces the role of LinkedIn Posts within the portfolio architecture.

The homepage shows a preview containing 2–3 regular Writing articles (title, excerpt, `Continue Reading →`, `View All Writing →`).

The Writing page (`/writing`) contains:
- Page introduction
- `Read My Experience With…` navigation button near the top (leading to the separate experience system)
- Chronological archive of regular articles (sorted by date, with titles, excerpts, and `Continue Reading →`)
- Dedicated individual reading pages supporting comments

Regular Writing focuses on:
- project stories and retrospectives
- engineering and architectural decisions
- experiments and research
- technical comparisons (e.g., Shard vs Cairn distributed cache comparison)
- lessons learned and engineering process reflections

*My Experience With…* articles **must not** appear in the Home Writing preview, the regular Writing archive, or the chronological blog list.

### 8.2 My Experience With…

This is a completely separate content system documenting personal practical experience and lessons from working with individual technologies, frameworks, tools, or engineering concepts (*My Experience With Java*, *My Experience With Docker*, *My Experience With LangGraph*).

It is discovered through two navigation entry points:
1. **Skills Page**: Clicking a technology or engineering concept leads directly to its experience article.
2. **Writing Page**: Clicking the `Read My Experience With…` navigation button leads to the *My Experience With…* index page.

Both entry points lead to the same experience article.

Experience articles are grounded in actual project work and connect back to relevant projects where the technology or concept was implemented (`Where I Used It`).

---

## 9. About Page

The About page is one of the most important architectural decisions.

It should not function as a database of skills, education, or certifications.

Its primary purpose is to answer:

> **Who is Vaibhav, and how does he think and work?**

The About page should be a **continuous narrative and editorial document**.

It is inspired by the architectural composition and reading flow of the referenced portfolio About page, but it must not copy that portfolio's visual identity.

The page should use:

- calm reading-focused composition
- continuous information flow
- generous whitespace
- minimal fragmentation
- strong opening
- visual anchor beside or around the narrative
- restrained structural divisions
- GitHub contribution activity
- understated connection area

The page should not become a collection of separate card-like blocks.

Section changes should primarily be created through:

- whitespace
- typography
- lines
- composition
- visual rhythm
- selective sketch elements

---

## 10. Proposed About Page Flow

The first-draft About page architecture is:

1. About
2. Introduction
3. Engineering Journey
4. How I Work
5. The Person Behind the Engineering
6. Building Activity
7. Connect

The exact content will be defined later.

### 10.1 Introduction

The opening should establish:

- professional identity
- personal identity
- engineering focus
- the core positioning of the portfolio

The signature statement is:

> **A serious engineer whose work is presented with the eye of an artist and the discipline of consistent practice.**

The opening may include:

- an original sketch
- a photograph
- another restrained personal visual anchor

The visual should feel integrated into the page composition rather than appearing as a standard profile card.

### 10.2 Engineering Journey

This section should communicate progression rather than simply listing technologies.

The narrative direction is:

**Write Code → Learn to Build → Think About Architecture → Plan Systems → Verify Work → Follow Engineering Discipline**

Potential themes include:

- engineering progression
- architecture
- planning
- implementation discipline
- verification
- version control
- quality
- moving from building isolated features toward thinking about complete systems

The exact story will be defined during content planning.

### 10.3 How I Work

This section should communicate the engineering philosophy and workflow that guide project work.

The initial structural direction is:

1. Plan before building.
2. Architecture before implementation.
3. Verify before declaring completion.
4. Version control is part of the work.
5. Treat projects as systems.

The final wording and content will be refined later.

This section should explain the actual engineering approach rather than presenting generic professional values.

### 10.4 The Person Behind the Engineering

The portfolio should reflect personal identity without requiring explicit labels such as:

> I am an artist.

> I am a fitness enthusiast.

The artistic and fitness influences should be felt through:

- visual language
- original sketches
- composition
- discipline
- practice
- observation
- iteration
- refinement
- patience
- consistency

The website should communicate these aspects of identity naturally rather than turning them into separate professional categories.

---

## 11. GitHub Contribution Graph

The About page will include a real GitHub contribution activity graph.

The graph belongs within the **Building Activity** section of the About page.

It represents:

> **Consistent engineering practice.**

It supports the portfolio's emphasis on:

- discipline
- consistency
- progression
- visible engineering activity
- long-term practice

### 11.1 Contribution Graph Requirements

The contribution graph should:

- use real contribution data
- update automatically
- not fake activity
- remain responsive
- remain accessible
- integrate into the portfolio's visual system
- function as a meaningful data visualization rather than a decorative GitHub embed

The visual treatment may adapt the graph to the portfolio palette.

A possible activity progression is:

- No Activity → Midnight
- Low Activity → Deep Blue
- Medium Activity → Cobalt
- High Activity → Starlight
- Peak Activity → Rare Gold

The exact implementation will be decided during detailed visual and technical design.

---

## 12. Experience

Experience represents professional roles and relevant work history.

The homepage should show the latest or most relevant 1–2 entries.

The Experience page should provide the complete record.

The exact presentation and content structure will be defined later.

---

## 13. Education

Education represents academic history and relevant educational information.

The homepage provides a concise preview.

The dedicated page provides the complete record.

The exact presentation will be defined later.

---

## 14. Skills

Skills represent actual technical capabilities.

The Skills section should not become a collection of random technology badges.

The homepage should show selected capabilities.

The Skills page acts as the technology and engineering concept discovery and index page (`/skills`).

### 14.1 Conceptual Hierarchy

The Skills architecture formally supports a conceptual three-level content hierarchy:

```text
HOME
  ↓
SKILLS (Level 1)
  ↓
TECHNOLOGY / ENGINEERING CONCEPT (Level 2)
  ↓
MY EXPERIENCE WITH… ARTICLE (Level 3)
  ↓
RELATED PROJECTS
```

#### Level 1 — Portfolio Section
Example: **Skills**
The primary discovery/index page (`/skills`).

#### Level 2 — Technology or Engineering Concept
Examples: **Spring Boot**, **Java**, **LangGraph**, **Consistent Hashing**
The primary interactive item representing specific tools, frameworks, languages, or core engineering concepts.

#### Level 3 — My Experience With… Article
Examples:
- *My Experience With Spring Boot*
- *My Experience With Java*
- *My Experience With Consistent Hashing*

A dedicated practical experience piece explaining what was learned through actual hands-on engineering work.

### 14.2 Interconnected Content System & Discovery

- **Primary Interactive Item**: The technology or engineering concept itself (Level 2) is the primary interactive element on the Skills page.
- **Article Integration**: Clicking a technology or concept opens its dedicated *My Experience With…* article.
- **Separate Content System**: *My Experience With…* articles belong to a separate practical experience system and do **not** appear in the regular Writing archive or Home Writing previews.
- **Project Connections**: Experience articles connect back to the relevant projects where the technology or concept was actually used (`Where I Used It`).
- **Interconnected Content Model**:
  ```text
  Projects ↔ Skills ↔ My Experience With…
  ```

### 14.3 Conceptual vs. URL Hierarchy

Clarify that this is a **conceptual three-level hierarchy** and does **NOT** require a three-level nested URL structure (e.g., `/skills/category/technology/article`).

The final URL structure may remain flat (e.g., `/skills`, `/experience-with/spring-boot`) or use another semantic structure. Exact URL paths will be decided during technical implementation.

---

## 15. Certifications

Certifications represent relevant credentials.

The homepage should show only the most relevant or latest entries.

The dedicated page contains the complete record.

Only certifications worth presenting professionally should be included.

---

## 16. Navigation Principles

The site may contain many dedicated sections, but the primary navigation should remain minimal.

The navigation should not contain every section as a top-level link.

A conceptual direction is:

**VAIBHAV GUPTA — WORK — BLOGS — ABOUT**

Possible grouping:

### Work

- Featured
- Projects
- Experience

### Blogs

- Writing

### About

- Personal Narrative
- Education
- Skills
- Certifications

However, the exact top-level navigation structure remains open for refinement.

The architectural principle that is locked is:

> **The complete information architecture may be broad while the primary navigation remains concise.**

Additional sections can be reached through:

- homepage previews
- See All links
- contextual links
- page-level navigation
- footer navigation

---

## 17. Complete High-Level Architecture

### Homepage

A professional overview showing selected or latest entries from each major section.

### About

- Introduction
- Engineering Journey
- How I Work
- The Person Behind the Engineering
- Building Activity
  - GitHub Contribution Graph
- Connect

### Featured

Curated priority highlights.

### Projects

- Complete project catalog
- Individual project pages

### Experience

Complete professional record.

### Education

Complete educational record.

### Skills

- Technology and engineering concept discovery index page (`/skills`)
- Conceptual hierarchy: Skills (L1) → Technology/Concept (L2) → My Experience With… Article (L3) → Related Projects

### Certifications

Complete credentials record.

### Writing

- Chronological archive of regular articles
- Individual writing pages with comments
- `Read My Experience With…` navigation link

### My Experience With…

- Technology & engineering concept experience index
- Individual practical experience articles (`Where I Used It` project links)

---

## 18. Architectural Principles

The portfolio architecture follows these principles:

1. **The portfolio is multi-page.**
2. **The homepage is a professional overview, not a complete data dump.**
3. **Each major section previews selected or latest entries.**
4. **See All links lead to complete records.**
5. **Dedicated pages provide depth without making the primary navigation crowded.**
6. **Featured is curated; Projects is comprehensive.**
7. **A project may appear in both Featured and Projects.**
8. **Writing replaces the role of LinkedIn Posts.**
9. **Individual projects receive dedicated engineering case-study pages.**
10. **Individual regular writing articles receive dedicated reading pages.**
11. **The About page is narrative and editorial rather than database-like.**
12. **The About page includes real GitHub contribution activity.**
13. **The primary navigation remains concise even when the overall site architecture is broad.**
14. **Writing and My Experience With… are two separate content systems.**
15. **My Experience With… articles never appear in the Home Writing preview or regular Writing archive.**
16. **Skills links directly to My Experience With… articles (`Projects ↔ Skills ↔ My Experience With…`).**

---

## 19. Current Architecture Status

### Locked

- Multi-page direction
- LinkedIn-inspired content architecture
- Writing system replacing Posts
- Two separate content systems: Writing & My Experience With…
- Homepage Preview → See All principle (Home preview contains 2–3 regular Writing articles only)
- Featured vs Projects principle
- Dedicated project pages
- Dedicated writing pages
- Conceptual 3-level Skills hierarchy (Skills → Technology/Concept → My Experience With… Article → Related Projects)
- About page narrative direction
- GitHub contribution graph

### Open for Refinement

- Top-level navigation
- Exact content of each section
- Exact page flows
- Detailed page design
- Technical architecture

---

## 20. Next Step

The next planning stage is **Content Architecture**.

This will define:

- exact content for each section
- Featured selection criteria
- project ordering and categorization
- Experience content
- Education content
- Skills taxonomy
- Certifications content
- initial blog titles and categories
- homepage preview content
- individual project-page content structure
- individual blog-page content structure

Once content architecture is defined, the next stage will be:

> **Detailed Page Design and Technical Architecture**