# Portfolio Website — Content Inventory

## Purpose

This document contains the actual content currently selected for the portfolio.

It is the content-level companion to:

- `THEME.md` — visual identity and creative direction
- `ARCHITECTURE.md` — site structure and page relationships
- `CONTENT.md` — content organization and presentation rules

This document answers:

> What actual people, projects, technologies, experiences, and content currently belong in the portfolio?

Only confirmed and decided content should be recorded here.

Items that have not yet been finalized should be explicitly marked as pending.

---

# 1. Featured Projects

The Featured section contains projects with live demos or meaningful deployed experiences.

## Current Featured Projects

1. Trajectory
2. CheckMate Analyze
3. IBM-PBEL

### Notes

- Featured appears on the homepage.
- All three current entries are shown.
- Featured does not currently require a dedicated page.
- Trajectory intentionally appears in both Featured and Projects because the two sections serve different purposes.

---

# 2. Homepage Projects

The homepage Projects section currently highlights:

1. Trajectory
2. Phoenix
3. Vigil

### Notes

- These projects represent the curated engineering-project preview.
- The homepage provides a path to the complete `/projects` page.
- A project may also appear in Featured.

---

# 3. Complete Project Catalog

The complete project catalog exists within:

`/projects`

## Project Categories

- For Resume
- Academic
- Testing
- Miscellaneous
- Training Program
- Archived

### Notes

- Testing contains QA projects.
- All categories remain on the same `/projects` page.
- The final complete project inventory and metadata are pending detailed extraction.

---

# 4. Experience

## IBM SkillsBuild × Edunet Foundation

### Type

Emerging Technologies Internship

### Status

Current confirmed portfolio entry.

---

## IBM Collaborative PBEL

### Type

Project-Based Experiential Learning

### Status

Current confirmed portfolio entry.

---

# 5. Education

## Current Education Entry

### Greater Noida Institute of Technology

### Type

Current degree / higher education record.

### Status

Confirmed category.

Exact qualification, specialization, dates, achievements, and academic details remain to be finalized from the source record.

---

# 6. Skills and Technologies

## Purpose & Scope

The Skills inventory is the inventory of actual **Level 2 technologies and engineering concepts** explored through genuine project work.

The inventory remains broader than the set of technologies and engineering concepts that currently have dedicated Level 3 articles.

## Status & Article Tracking

The Skills inventory is under active compilation. The categories below represent the currently identified technology and engineering concept inventory from reviewed recent project documentation.

To support future content tracking without creating a large manual table for every skill, Level 2 inventory entries can indicate their article status when relevant using three lightweight statuses:

- **Article Published** — A dedicated experience article exists and is published in the My Experience With… system.
- **Article Planned** — A dedicated experience article is planned for future writing.
- **No Dedicated Article Yet** — The default status for inventory items that do not currently have or require a dedicated article.

Existing technologies are not artificially marked as planned or published unless that decision has explicitly been made.

---

## 6.1 Languages

- Java
- Python
- JavaScript
- TypeScript
- SQL
- HTML
- CSS

---

## 6.2 Backend and API Engineering

- Spring Boot
- Spring Security
- Spring AI
- FastAPI
- Django
- Django REST Framework
- REST APIs
- Hibernate
- SQLAlchemy
- JWT
- OAuth2
- Google OAuth
- GitHub OAuth
- WebSockets
- STOMP
- SpringDoc OpenAPI
- Swagger
- Spring Scheduler
- Virtual Threads

---

## 6.3 Frontend Engineering

- React
- Next.js
- Vite
- Tailwind CSS
- Shadcn UI
- Radix UI
- Zustand
- TanStack Query
- React Router
- Context API
- React Hook Form
- Zod
- Framer Motion
- Recharts
- Lucide React

---

## 6.4 AI and Agent Systems

- AI Engineering
- LLM Integration
- Multi-Agent Systems
- Agent Orchestration
- LangGraph
- RAG
- Hybrid Retrieval
- Vector Search
- Embeddings
- Semantic Search
- Reranking
- SentenceTransformers
- FlashRank
- rank_bm25
- Ollama
- Local LLM Deployment

---

## 6.5 Data and Persistence

- PostgreSQL
- MySQL
- MongoDB
- Redis
- pgvector
- Flyway
- MinIO

---

## 6.6 Systems and Distributed Engineering

- Concurrency
- Multithreading
- Synchronization
- Distributed Caching
- Consistent Hashing
- Sharding
- Virtual Threads
- Asynchronous Processing
- Background Workers
- Celery
- Redis Pub/Sub

---

## 6.7 Testing and Quality

- Manual Testing
- Test Case Design
- API Testing
- Automated Testing
- Unit Testing
- Integration Testing
- End-to-End Testing
- Playwright
- Pytest
- pytest-django

---

## 6.8 Security Engineering

- Application Security
- Authentication
- Authorization
- JWT
- Role-Based Access Control
- Multi-Tenancy
- Secure API Design
- Vulnerability Testing

---

## 6.9 Infrastructure and Observability

- Docker
- Docker Compose
- AWS EC2
- AWS RDS
- AWS S3
- Vercel
- Nginx
- Certbot
- Let's Encrypt
- GitHub Actions
- Self-Hosted GitHub Actions Runner
- Prometheus
- Grafana

---

# 7. Skills Content Relationships

Technology entries may connect to:

- projects where the technology was used (`Where I Used It`)
- *My Experience With…* articles about practical experience using the technology
- related technologies and engineering concepts

The intended content relationship is:

Projects ↔ Skills ↔ My Experience With…

### Projects

What was built.

### Skills

What was used.

### My Experience With…

Practical experience and learning gained while building with a technology or concept.

---

# 8. My Experience With… Articles

Level 2 technologies and engineering concepts with meaningful experience may receive dedicated Level 3 experience articles.

The general direction is:

> My Experience With [Technology / Engineering Concept]

Examples:

- *My Experience With Spring Boot*
- *My Experience With Java*
- *My Experience With LangGraph*
- *My Experience With Consistent Hashing*

These are examples of the article title format only.

Dedicated experience articles belong to the separate **My Experience With…** content system (not regular Writing) while linking back to relevant projects where the technology or concept was used (`Projects ↔ Skills ↔ My Experience With…`).

Discovery is supported via:
1. Skills page (clicking technology/concept)
2. Writing page (`Read My Experience With…` navigation button near top)

No initial experience-article titles have been formally locked yet. Inventory entries track status as *Article Published*, *Article Planned*, or *No Dedicated Article Yet* as decisions are made.

---

# 9. Certifications

## Status

Pending detailed inventory compilation. Architectural decision is locked:
- Home shows 2–3 featured certificates (initial entries: NPTEL + E&ICT Academy).
- View All Certifications leads to full Certifications page.
- Clicking certificate name opens original PDF directly (no detail pages).

---

# 10. Writing & My Experience With…

The portfolio contains **two separate content systems**:

### 10.1 Writing
Contains regular long-form articles about projects, retrospectives, decisions, experiments, comparisons, and reflections.
- Key Example: *What I Learned From Building the Same Distributed Cache in Java and Python* (Shard vs Cairn comparison).
- Home preview: Displays 2–3 regular Writing articles only.
- Writing Archive: Chronological list sorted by date, with titles, excerpts, `Continue Reading →`, and a `Read My Experience With…` navigation button near top. Supports comments on individual article pages.

### 10.2 My Experience With…
Contains practical experience articles about specific technologies or engineering concepts (*My Experience With Java*, *My Experience With Docker*).
- Does **not** appear in Home Writing previews or regular Writing archives.
- Discoverable via Skills or `Read My Experience With…` button on the Writing page.

---

# 11. About

## Core Positioning Statement

> A serious engineer whose work is presented with the eye of an artist and the discipline of consistent practice.

## Confirmed Content Themes

- Engineering journey
- How I work
- The person behind the engineering
- Building activity
- Consistent engineering practice

The detailed About-page writing remains pending.

---

# 12. Building Activity

The portfolio will include a real GitHub contribution graph.

Its primary meaning is:

> Consistent engineering practice.

The contribution graph will appear as part of the About content.

---

# 13. Homepage Content Inventory

The homepage currently includes the following content categories:

1. Introduction / Profile
2. About Preview
3. Featured
4. Projects Preview
5. Experience Preview
6. Education Preview
7. Skills Preview
8. Certifications Preview
9. Writing Preview (2–3 regular Writing articles only)
10. Footer

## Currently Selected Project Content

### Featured

- Trajectory
- CheckMate Analyze
- IBM-PBEL

### Projects Preview

- Trajectory
- Phoenix
- Vigil

### Experience Preview

- IBM SkillsBuild × Edunet Foundation
- IBM Collaborative PBEL

---

# 14. Pending Content

The following still needs to be finalized:

- Complete project inventory
- Exact project descriptions and metadata
- Complete Skills inventory
- Final Skills taxonomy
- Exact Education details
- Certifications inventory
- Blog / Writing categories
- Initial article titles
- Homepage introduction copy
- Homepage About preview copy
- Experience descriptions
- Detailed About-page writing

---

# 15. Content Inventory Rules

When adding content to this document:

1. Record only genuine and confirmed content.
2. Do not add technologies merely because they are common in a technology ecosystem.
3. Preserve the distinction between a technology and an engineering concept.
4. A technology may appear in multiple content relationships.
5. A project may appear in multiple portfolio sections when those sections serve different purposes.
6. The inventory may be broader than the resume.
7. The project work should remain the primary evidence of technical capability.
8. Add new content as professional experience and engineering work grow.

---

# 16. Current Inventory Status

| Content Area | Status |
|---|---|
| Featured Projects | Partially finalized |
| Homepage Projects | Finalized |
| Complete Projects | Categories finalized, full inventory pending |
| Experience | Current entries identified |
| Education | Category established, details pending |
| Skills | Extraction complete across 9 projects |
| Certifications | Architecture locked (NPTEL + E&ICT Academy featured, direct PDF opening) |
| Writing | System defined; 10 initial cross-project topics identified |
| My Experience With… | System defined; technology/concept candidates identified |
| About | Core themes established, writing pending |
| Building Activity | Decided (GitHub contribution graph) |

---

## Document Relationship

```text
THEME.md
    ↓
How the portfolio should feel and look

ARCHITECTURE.md
    ↓
How the portfolio is structured

CONTENT.md
    ↓
What type of content belongs where

CONTENT_INVENTORY.md
    ↓
What actual content currently exists