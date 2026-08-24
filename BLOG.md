# Portfolio Website — BLOG.md

## Purpose

This document defines the portfolio's complete writing architecture.

The portfolio has two separate content systems:

1. **Writing** — regular long-form blog content.
2. **My Experience With…** — dedicated technology and engineering-concept experience content.

These systems must remain separate.

They may share the same visual language and content infrastructure, but they must not be mixed in the same archive.

---

# 1. Core Content Architecture

```text
Home
│
├── Writing Preview
│     ├── 2–3 regular articles
│     └── View All Writing
│
├── Skills
│     └── Technology / Concept
│           └── My Experience With… article
│
└── ...
```

The full structure is:

```text
Writing
│
├── Regular Writing Archive
│     ├── Article
│     ├── Article
│     └── Article
│
└── Read My Experience With…
      ↓
   My Experience With…
      ├── Technology / Concept
      ├── Technology / Concept
      └── Technology / Concept
```

A technology experience article can also be discovered directly from Skills:

```text
Skills
   ↓
Technology / Engineering Concept
   ↓
My Experience With…
   ↓
Individual Experience Article
```

---

# 2. Writing

## Purpose

Writing contains regular articles about broader engineering work, projects, decisions, experiments, comparisons, and the learning process.

It is not restricted to individual technologies.

The content should focus on:

- project stories
- project retrospectives
- engineering decisions
- architectural decisions
- experiments
- comparisons
- lessons learned
- the development process
- broader reflections from building software

## Example Topics

- What I Learned From Building the Same Distributed Cache in Java and Python
- Why I Made a Particular Architectural Decision
- Lessons From Building a Project
- Comparing Two Technical Approaches
- How My Development Process Changed
- What I Learned From Auditing a Project
- A Retrospective on Building an AI System

The Shard and Cairn comparison is a key example of this content type.

Both projects address the same broad problem but use different implementation approaches:

```text
Shard
Python
   ↕
Same Core Problem
   ↕
Cairn
Java
```

An article about this comparison can discuss:

- why both projects were built
- what stayed conceptually similar
- what changed between Java and Python
- concurrency differences
- ecosystem differences
- implementation differences
- development experience
- testing differences
- what was surprising
- what each implementation taught
- when one approach may be preferable to another

This article belongs in **Writing**, not **My Experience With…**, because its central subject is the comparison and the engineering learning produced by building both projects.

---

# 3. Home Page Writing Preview

The Home page shows a preview of the regular Writing system.

Display:

- 2–3 recent regular articles
- article title
- a few introductory lines / excerpt
- `Continue Reading →`

Example:

```text
WRITING

What I Learned From Building the Same Distributed Cache
in Java and Python

A comparison of Cairn and Shard, two implementations
built around the same problem but through different
languages and concurrency models.

Continue Reading →

────────────────────────────────

[Another Article]

A short excerpt...

Continue Reading →

────────────────────────────────

[Another Article]

A short excerpt...

Continue Reading →

View All Writing →
```

## Rules

1. Show only 2–3 regular Writing articles.
2. Do not include My Experience With… articles.
3. The selected articles should normally represent recent writing.
4. Each preview links to the article's dedicated page.
5. `View All Writing →` leads to the full Writing archive.

---

# 4. Writing Archive

The Writing page is the complete archive of regular articles.

Articles are:

- sorted by date
- displayed as a chronological list
- shown with a title
- shown with a short excerpt
- linked using `Continue Reading →`

The archive does not contain My Experience With… articles.

Example:

```text
WRITING

Thoughts on projects, engineering decisions,
experiments, comparisons, and the process of learning.

[ Read My Experience With… ]

────────────────────────────────

Article Title

A few lines describing the article and providing
enough context to decide whether to continue reading.

Continue Reading →

────────────────────────────────

Article Title

A few lines...

Continue Reading →
```

The archive should remain primarily a reading list rather than a grid of cards.

Avoid:

- excessive card containers
- repeated nested boxes
- unnecessary category cards
- decorative visual clutter

---

# 5. Writing Page Entry to My Experience With…

The Writing page contains:

```text
Read My Experience With…
```

This is a deliberate navigation entry point into the separate technology experience content system.

It does not filter the regular Writing archive.

It does not reveal experience articles inside the same list.

It leads to:

```text
My Experience With…
```

The preferred placement is near the top of the Writing page, directly after the page introduction and before the regular article archive.

Example:

```text
WRITING

Thoughts on projects, engineering decisions,
experiments, comparisons, and the process of learning.

[ Read My Experience With… ]

────────────────────────────────

Regular Writing Archive
```

---

# 6. Individual Writing Articles

Each regular article has its own dedicated page.

```text
Writing Archive
      ↓
Article
      ↓
Article Page
      ↓
Comments
```

An article page contains:

```text
Title
Date

Article content

Relevant projects, skills, or references where useful

Comments
```

Related projects or skills may be included when genuinely relevant.

They should not be forced into every article.

---

# 7. Comments

Individual regular Writing articles should support comments.

The intended content flow is:

```text
Article
   ↓
Comments
   ↓
Visitor Discussion
```

The exact comment implementation is an implementation-phase decision.

The current content architecture only establishes that:

- regular Writing articles may have comments
- comments belong on the individual article page
- comments do not appear on the Writing archive

Whether My Experience With… pages also receive comments can be decided during implementation. The default architecture should allow it, but comments are not required to define the content system.

---

# 8. My Experience With…

## Purpose

My Experience With… is a completely separate content system.

It documents personal experience, learning, and practical lessons from working with individual technologies or engineering concepts.

It is not a regular blog archive.

It does not appear in:

- Home page Writing previews
- regular Writing archives
- chronological Writing lists

## Core Structure

```text
My Experience With…
        ↓
Technology / Engineering Concept Index
        ↓
Individual Experience Page
```

Example:

```text
MY EXPERIENCE WITH…

Java
Python
Spring Boot
React
Docker
PostgreSQL
AWS
LangGraph
...
```

Clicking an entry opens the dedicated experience article.

---

# 9. Relationship With Skills

The Skills system and My Experience With… system are directly connected.

```text
Skills
   ↓
Click Technology / Concept
   ↓
My Experience With…
   ↓
Experience Article
```

For example:

```text
Java
  ↓
My Experience With Java
```

The same experience article can therefore be discovered through two entry points:

```text
Skills
  ↓
Java
  ↓
My Experience With Java
```

or:

```text
Writing
  ↓
Read My Experience With…
  ↓
Java
  ↓
My Experience With Java
```

These are two navigation paths to the same experience article.

---

# 10. Experience Article Scope

An experience article should focus on actual practical experience rather than a generic tutorial.

It can answer questions such as:

- How did I first encounter this technology?
- Why did I choose or need it?
- Which projects did I use it in?
- What did I learn while using it?
- What problems did I encounter?
- What engineering decisions did it influence?
- What changed in my understanding over time?
- What would I do differently now?
- Where would I use it again?

The article should be grounded in actual project experience.

A generic explanation of what the technology is should not be the main purpose.

A brief contextual explanation may be included when useful.

---

# 11. Where I Used It

Technology experience articles may connect back to relevant projects.

Example:

```text
My Experience With Spring Boot

[Experience content]

WHERE I USED IT

Conclave
Trajectory
Phoenix
```

This connection should be subtle.

It should support the narrative rather than turn the article into a resume.

---

# 12. Content Distinction

The two systems have different questions at their core.

## Writing

> What did I learn, discover, compare, decide, or reflect on?

Examples:

- What did building two comparable systems teach me?
- Why did I make this architectural decision?
- What did this project teach me?
- How did my development process evolve?

## My Experience With…

> What was my actual experience of building with this technology or concept?

Examples:

- My Experience With Java
- My Experience With Docker
- My Experience With LangGraph
- My Experience With PostgreSQL

A topic should not be duplicated merely because it could fit both systems.

The content should be placed according to its primary question.

---

# 13. Article Lifecycle

Each content item may have one of the following statuses:

- Published
- Draft
- Planned
- Idea

This applies separately to:

- regular Writing articles
- My Experience With… articles

A technology can exist in the Skills inventory even when:

```text
Skill exists
        ↓
No experience article yet
```

The absence of an article does not invalidate the skill.

Experience articles should be created when there is meaningful practical experience worth documenting.

---

# 14. Initial Content Inventory

## Writing — Initial Ideas

### What I Learned From Building the Same Distributed Cache in Java and Python

Projects:

- Cairn
- Shard

Focus:

- comparing the same broad system problem across Java and Python
- language differences
- concurrency differences
- implementation differences
- ecosystem differences
- testing
- engineering lessons

---

## My Experience With… — Initial Candidates

The following are candidates derived from the Skills inventory and portfolio architecture.

### Languages

- Java
- Python
- TypeScript
- JavaScript

### Backend & Frameworks

- Spring Boot
- Django
- FastAPI

### Frontend

- React
- Next.js

### AI Systems

- LangGraph
- Spring AI
- Multi-Agent Systems
- Retrieval-Augmented Generation

### Data & Retrieval

- PostgreSQL
- Redis
- pgvector
- Hybrid RAG

### Infrastructure

- Docker
- AWS
- GitHub Actions

### Engineering Concepts

- Consistent Hashing
- Virtual Threads
- Distributed Caching
- Container Isolation

These are candidates, not a requirement to publish an article for every item.

The experience system should grow organically from meaningful work.

---

# 15. Future Growth

The Writing system can grow through new project work, experiments, comparisons, and reflections.

The My Experience With… system can grow as new technologies become important enough to document.

The architecture should therefore remain flexible:

```text
New Project
    ↓
Possible Writing Article

New Technology
    ↓
Skill Added
    ↓
Possible My Experience With… Article
```

Neither step is mandatory.

---

# 16. Final Architecture

```text
HOME
│
├── WRITING
│     ├── 2–3 Regular Article Previews
│     └── View All Writing →
│
└── SKILLS
      └── Technology / Concept
            └── My Experience With… Article


WRITING
│
├── Page Introduction
├── Read My Experience With… →
│
└── REGULAR WRITING ARCHIVE
      ├── Chronological Article List
      └── Article
            └── Comments


MY EXPERIENCE WITH…
│
├── Technology / Concept Index
│
└── Experience Article
      ├── Practical Experience
      ├── Lessons Learned
      └── Where I Used It
            └── Relevant Projects
```

---

# 17. Final Rules

1. Writing and My Experience With… are separate content systems.
2. My Experience With… articles never appear in the regular Writing archive.
3. My Experience With… articles never appear in the Home Writing preview.
4. The Writing page provides a navigation button to the My Experience With… index.
5. Skills link directly to relevant My Experience With… articles.
6. Both navigation paths lead to the same experience article.
7. Regular Writing articles are chronological.
8. Regular Writing articles show title, excerpt, and `Continue Reading →`.
9. Individual regular Writing articles have dedicated pages.
10. Regular Writing article pages support comments.
11. My Experience With… articles are grounded in actual practical experience.
12. Not every skill requires an experience article.
13. Relevant projects may be referenced subtly within articles.
14. The content system should grow organically rather than being artificially filled.

---

# 18. Status

```text
Writing architecture: FINAL
My Experience With… architecture: FINAL
Home Writing preview: FINAL
Writing archive behavior: FINAL
Experience content separation: FINAL
Skills integration: FINAL
Article navigation: FINAL
Comments requirement: DEFINED
Initial content direction: DEFINED
```
