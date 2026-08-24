# Portfolio Website — Content Architecture

## 1. Document Purpose

This document defines the content decisions currently made for the portfolio website.

It answers:

- What content belongs in each portfolio section?
- Which projects appear on the homepage?
- What belongs in Featured?
- How should Projects be categorized?
- What current Experience content exists?
- What is the direction for Skills?
- How should Projects, Skills, Writing, and My Experience With… connect?

This document does not define the visual theme or high-level site architecture.

Those concerns belong to:

- `THEME.md`
- `ARCHITECTURE.md`

This document should be updated as portfolio content evolves.

---

## 2. Core Content Philosophy

The portfolio is not a resume.

The resume should remain concise and optimized for quick professional evaluation.

The portfolio is the larger personal and professional space.

It can contain:

- detailed project work
- broader technology exploration
- engineering writing
- learning experiences
- technical depth
- long-term professional growth

The portfolio should document genuine work and experience without being artificially constrained by the space limitations of a resume.

The core principle is:

> The resume summarizes capability. The portfolio demonstrates and explores it.

---

# 3. Homepage Content

The homepage is a curated professional overview.

It should not attempt to display the complete professional record.

The homepage contains selected or relevant previews from the major portfolio sections.

The current high-level content flow is:

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

The exact visual order may be refined later.

---

# 4. Featured

## 4.1 Purpose

Featured represents projects that visitors can experience through live demos or deployments.

Its purpose is:

> These are projects you can experience live right now.

Featured is not simply a list of the strongest engineering projects.

A project belongs in Featured because it provides a meaningful live/demo experience.

---

## 4.2 Current Featured Projects

The current Featured content is:

1. Trajectory
2. CheckMate Analyze
3. IBM-PBEL

All three should appear in the Featured section.

There is currently no need for:

- a dedicated Featured page
- a View All Featured link

The entire current Featured collection can appear directly on the homepage.

---

# 5. Projects

## 5.1 Homepage Projects Preview

The homepage Projects section will currently highlight:

1. Trajectory
2. Phoenix
3. Vigil

These three projects represent the selected engineering-project preview on the homepage.

The homepage should provide a path to:

> View All Projects

---

## 5.2 Featured and Projects May Overlap

A project may appear in both Featured and Projects.

Trajectory is the current example.

This duplication is intentional.

The two sections serve different purposes:

### Featured

> Projects visitors can experience live.

### Projects

> Selected engineering work representing the broader body of projects.

The same project may therefore appear in multiple locations when each placement serves a different discovery purpose.

---

## 5.3 Complete Projects Page

The complete project catalog will exist on one dedicated page:

`/projects`

There will not be separate category pages for each project category.

The complete Projects page should organize projects internally using the existing project categories:

- Projects — For Resume
- Projects — Academic
- Projects — Testing
- Projects — Miscellaneous
- Projects — Training Program
- Projects — Archived

Testing is a genuine QA project category and should be treated as such.

---

## 5.4 Projects Page Categorization

The category structure should conceptually resemble a subfolder hierarchy.

For example:

Projects

For Resume
- Project
- Project
- Project

Academic
- Project
- Project

Testing
- QA Project
- QA Project

Miscellaneous
- Project
- Project

Training Program
- Project
- Project

Archived
- Project
- Project

All categories remain within the same `/projects` page.

Categories may use expandable or collapsible interactions without navigating to separate category pages.

The presentation should feel inspired by a project hierarchy or filesystem without becoming a literal file-manager interface.

The structure should primarily use:

- indentation
- typography
- lines
- hierarchy
- subtle folder cues

rather than cards and boxes.

---

# 6. Experience

## 6.1 Current Experience Entries

The current Experience section contains:

### IBM SkillsBuild × Edunet Foundation

Emerging Technologies Internship.

### IBM Collaborative PBEL

Project-Based Experiential Learning.

---

## 6.2 Homepage Preview

The homepage Experience section should currently show both entries.

The homepage provides a path to:

> View All Experience

---

## 6.3 Complete Experience Page

Experience will have a dedicated page:

`/experience`

This is a future-proof decision.

The page is expected to grow as additional professional experience is gained.

Potential future entries may include:

- internships
- professional roles
- collaborations
- other relevant professional work

The Experience page represents a stable, long-term professional record.

---

# 7. Education

Education will exist as a dedicated professional category.

The homepage will show a concise preview.

The complete record will be available through:

`/education`

The Education page should remain future-proof and expandable as the educational record develops.

Education remains distinct from:

- professional experience
- internships
- training programs
- certifications

---

# 8. Skills

## 8.1 Content Architecture & Hierarchy

The Skills content architecture formally follows a three-layer conceptual model connecting into relevant projects:

```text
SKILLS
  ↓
Technology / Engineering Concept
  ↓
My Experience With… Article
  ↓
Relevant Projects
```

### Layer 1 — Skills
What I have genuinely used or explored through actual engineering work. This forms the top-level index and technical territory map.

### Layer 2 — Technology / Engineering Concept
The specific technology, framework, language, tool, or engineering concept being explored.
Examples:
- Spring Boot
- Java
- LangGraph
- Docker
- Consistent Hashing

### Layer 3 — My Experience With… Article
A practical experience writing piece explaining what was learned through actual hands-on project work.
Examples:
- *My Experience With Spring Boot*
- *My Experience With Java*
- *My Experience With Consistent Hashing*

### Relevant Projects
The specific project(s) linked directly from the experience article (`Where I Used It`) where the technology or engineering concept was actually implemented.

---

## 8.2 Skills Philosophy & Evidence

- The Skills section is **not** a resume-style skills list.
- The portfolio contains a broad inventory of technologies and engineering concepts genuinely explored through actual work.
- **No Proficiency Ratings**: The Skills page will not use percentage ratings, proficiency bars, arbitrary scores, or self-assigned expertise levels.
- The project work itself acts as the primary evidence of capability.

---

## 8.3 Skills Page Interaction & Affordances

- Technology names themselves are interactive elements.
- **No Permanent Buttons Required**: There is no need for a permanent "Read more" or "Read my experience" button under each technology item.
- **Subtle Affordance**: On hover or focus, a subtle visual affordance or message may appear, such as:
  > Click to read my experience with it.
- The interaction remains clean, understated, and non-distracting.

---

## 8.4 My Experience With… Articles

Clicking an interactive technology or concept leads to a practical experience writing piece grounded in real project work.

- **Not a Generic Tutorial**: The article must focus strictly on personal engineering experience and learning through real work, not generic code walkthroughs.
- **Potential Article Content**:
  - How I first encountered this technology/concept
  - Why it was used for a particular problem
  - How it was used in practice
  - Where it was used (linking to specific projects)
  - What was learned through the implementation
  - Important engineering observations or trade-offs
  - Future use or engineering perspective
- **Linked Projects**: Relevant projects are linked directly under `Where I Used It`.

---

## 8.5 Skills and "My Experience With…" Connection

Skill experience articles belong to the separate **My Experience With…** content system (not the regular Writing archive).

An experience article can be discovered through two navigation routes:
1. **Skills**: Clicking a technology or concept directly opens its experience article.
2. **Writing**: Clicking the `Read My Experience With…` navigation button opens the experience index.

This creates the interconnected relationship:

```text
Projects ↔ Skills ↔ My Experience With…
```

The conceptual distinction is preserved as:

### Projects
What was built.

### Skills
What was used.

### My Experience With…
Practical experience with specific tools and concepts.

### Writing
Regular long-form articles about projects, retrospectives, decisions, experiments, comparisons (e.g., Shard vs Cairn), and reflections.

---

## 8.6 Article Coverage

- Every genuinely used technology or concept can appear in the Skills inventory.
- Not every technology must immediately receive a dedicated experience article.
- Dedicated articles should be created when there is meaningful practical experience to discuss.
- The system grows naturally over time.

---

# 9. Current Skills Taxonomy Direction

The current category direction is:

1. Languages
2. Backend & API Engineering
3. Frontend Engineering
4. AI & Agent Systems
5. Data & Persistence
6. Systems & Distributed Engineering
7. Testing & Quality
8. Security Engineering
9. Infrastructure & Observability

This taxonomy is not yet fully locked.

The final category structure should be based on a complete repository-by-repository technology extraction.

---

# 10. Skills Inventory Status

An initial review of recent project documentation identified technologies across areas such as:

- Java
- Python
- JavaScript
- TypeScript
- Spring Boot
- FastAPI
- Django
- React
- Next.js
- AI and agent systems
- PostgreSQL
- MySQL
- MongoDB
- Redis
- Docker
- AWS infrastructure
- testing tools
- security technologies
- observability tooling
- frontend libraries
- deployment infrastructure

However, the initial extraction was found to be incomplete.

Trajectory, for example, revealed important technologies that had initially been missed, including:

- AWS EC2
- AWS RDS
- AWS S3
- Vercel
- Nginx
- Certbot
- Let's Encrypt
- GitHub Actions
- Self-Hosted GitHub Actions Runner
- TypeScript
- Shadcn UI
- Radix UI
- TanStack Query
- React Hook Form
- Zod
- OAuth2
- SpringDoc OpenAPI
- Swagger
- Spring Scheduler
- Virtual Threads

The Skills inventory must therefore not be considered complete yet.

---

# 11. Skills Inventory Completion Process

The final Skills inventory should be created through a repository-by-repository extraction process:

Project README / Documentation
↓
Extract Explicitly Used Technologies
↓
Record Technologies Per Project
↓
Combine Project Inventories
↓
Remove Duplicates
↓
Build Master Technology Inventory
↓
Categorize Technologies
↓
Finalize Skills Taxonomy

The goal is to avoid silently missing technologies used in real projects.

---

# 12. Content Relationship Map & System Distinctions

The portfolio comprises distinct content systems operating together:

1. **Projects**: What was built (catalog, case studies, live demos).
2. **Skills**: What was used and applied (evidence-based technical territory map).
3. **Writing**: Regular long-form articles about projects, retrospectives, decisions, experiments, comparisons (e.g., Shard vs Cairn), and reflections.
4. **My Experience With…**: Separate practical experience articles on specific technologies, frameworks, tools, or concepts.
5. **Experience**: Professional roles and internships.
6. **Education**: Academic records.
7. **Certifications**: Credentials and certifications (linking directly to PDFs).
8. **Intellectual Property / Patents**: Patents or IP records.

The primary content relationship is:

```text
Projects ↔ Skills ↔ My Experience With…
```

---

# 13. Current Content Decisions

## Locked

### Featured

- Trajectory
- CheckMate Analyze
- IBM-PBEL

### Homepage Projects

- Trajectory
- Phoenix
- Vigil

### Projects

- One `/projects` page
- All project categories exist within the same page
- Categories use a subfolder-style hierarchy
- Testing represents QA projects

### Experience

- IBM SkillsBuild × Edunet Foundation
- IBM Collaborative PBEL
- Dedicated `/experience` page

### Education

- Dedicated `/education` page

### Certifications

- Home shows 2–3 featured certificates (NPTEL and E&ICT Academy initial entries)
- View All Certifications leads to dedicated page with full list
- Clicking certificate name opens original PDF directly (no detail pages)

### Writing & My Experience With…

- **Two Separate Content Systems**: Regular Writing and My Experience With… are distinct.
- **Home Writing Preview**: Shows 2–3 regular Writing articles only; excludes My Experience With… articles.
- **Writing Page**: Contains regular chronological archive sorted by date + `Read My Experience With…` navigation button near top leading to the experience index.
- **Skills Integration**: Clicking a technology/concept opens its dedicated *My Experience With…* article (`Projects ↔ Skills ↔ My Experience With…`).
- **Comparisons**: Cross-project comparisons (e.g. Shard vs Cairn) belong to regular Writing.
- **Comments**: Individual regular Writing articles support comments.
- **Skills Hierarchy**: Skills (L1) → Technology/Concept (L2) → My Experience With… Article (L3) → Relevant Projects. Not every technology requires an immediate article.

---

# 14. Content Still to Be Decided

The following content areas remain open:

- Complete project catalog and exact project metadata
- Final Skills inventory
- Final Skills taxonomy
- Exact homepage Skills preview
- Certifications content
- Certification structure
- Blog categories
- Initial blog titles
- Which technologies receive dedicated articles first
- Exact About-page writing
- Exact Education content
- Exact Experience content and descriptions
- Homepage introduction content
- Homepage About preview content
- Individual blog/article content structure

---

# 15. Next Step

The next content task is:

> Complete the repository-by-repository technology extraction and finalize the master Skills inventory.

After the Skills inventory and taxonomy are complete, the remaining major content areas can be decided:

1. Certifications
2. Blogs
3. Homepage content
4. About-page content
5. Final content relationships

This document should continue to evolve as those decisions are made.