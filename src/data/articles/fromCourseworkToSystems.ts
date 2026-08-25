import { WritingArticle } from "../writing";

export const articleFromCourseworkToSystems: WritingArticle = {
  slug: "from-coursework-to-systems-engineering-how-my-projects-became-more-serious",
  title: "From Coursework to Systems",
  date: "2026-06-22",
  excerpt: "How My Projects Became More Serious",
  readingTime: "11 min read",
  content: [
    "Engineering growth can be traced through the evolving complexity of the systems one builds. Early in computer science coursework, projects are typically focused on syntax execution and standalone feature delivery—writing a script that runs correctly under ideal conditions on `localhost`.",

    "Over time, my personal project arc shifted from standalone features toward systems engineering: designing applications that handle failure gracefully, enforce boundary isolation, remain observable under load, and can be reliably reproduced across production environments.",

    "## 01. The Architectural Arc Across Projects",

    "This evolution can be traced across five major projects:",

    "1. [Check-Mate-Analyse](https://github.com/vaibhv19/check-mate-analyse) *(Complex Client-Side Application)*:\nFocused on browser-side WebAssembly execution, Web Worker thread offloading, and client-side chess engine evaluation.",

    "2. [Trajectory](https://github.com/vaibhv19/trajectory) *(Full-Stack Application & Production Deployment)*:\nShifted focus toward production infrastructure: AWS EC2/RDS/S3 deployment, Docker Compose configuration, Nginx reverse proxying, and automated GitHub Actions CI/CD pipelines.",

    "3. [Conclave](https://github.com/vaibhv19/conclave) *(Multi-Agent Systems & Context Orchestration)*:\nInvestigated cooperative multi-agent coordination, canonical context state translation, local Ollama model integration, and real-time WebSocket streaming.",

    "4. [Phoenix](https://github.com/vaibhv19/Phoenix) *(AI Retrieval Systems & Observability)*:\nTackled AI pipeline opacity through hybrid RAG (BM25 sparse scoring + dense vector embeddings + Cross-Encoder reranking) and observable retrieval decision traces.",

    "5. [Vigil](https://github.com/vaibhv19/Vigil) *(Agent Evaluation & Safe Runtime Isolation)*:\nFocused on deterministic verification: executing autonomous agents inside ephemeral, resource-constrained Docker sandboxes with state assertions and system call monitoring.",

    "## 02. How Technical Questions Changed Over Time",

    "As project complexity grew, the primary questions I asked during development fundamentally evolved:",

    "- Early Phase: *'How do I write code that implements this feature?'*",
    "- Intermediate Phase: *'How do I deploy this to production and isolate database dependencies?'*",
    "- Systems Phase: *'How do these sub-components interact? What happens when this fails? How do I observe internal decisions? How do I prove that this system actually worked?'*",

    "## 03. The Evolution of Testing & Verification",

    "Testing discipline similarly matured across this arc:",

    "- Manual Checks: In early projects, verification consisted of manual browser testing and console logging.",
    "- Automated Unit & Integration Testing: In full-stack work, automated test suites (Pytest, JUnit) verified API contracts and ORM migrations before merging code.",
    "- Containerized Sandbox Verification: In [Vigil](https://github.com/vaibhv19/Vigil), verification became an explicit, automated harness running programmatic state assertions on isolated containers.",

    "Systems engineering is ultimately the transition from writing code that works under ideal conditions on localhost to designing resilient software systems that gracefully endure operational reality."
  ]
};
