import { WritingArticle } from "../writing";

export const articleFromCourseworkToSystems: WritingArticle = {
  slug: "from-coursework-to-systems-engineering-how-my-projects-became-more-serious",
  title: "From Coursework to Systems",
  date: "2026-05-15",
  excerpt: "How My Projects Became More Serious",
  readingTime: "11 min read",
  content: [
    "Engineering growth can be traced through the evolving complexity of the systems one builds. Early in computer science coursework, projects are typically focused on syntax execution and standalone feature delivery—writing a script that runs correctly under ideal conditions on `localhost`.",

    "Over time, my personal project arc shifted from standalone features toward systems engineering: designing applications that handle failure gracefully, enforce boundary isolation, remain observable under load, and can be reliably reproduced across production environments.",

    "## 1 / The Architectural Arc Across Projects",

    "This evolution can be traced across five major projects, each introducing a higher tier of system complexity:",

    "1. [Check-Mate-Analyse](https://github.com/vaibhv19/check-mate-analyse) *(Complex Client-Side Compute)*:\nFocused on browser-side WebAssembly execution, Web Worker thread offloading, and client-side chess engine evaluation. It taught the first real lesson about non-blocking UI threads and managing compute-heavy workloads directly inside client runtimes.",

    "2. [Trajectory](https://github.com/vaibhv19/trajectory) *(Full-Stack Deployment & Production Infrastructure)*:\nShifted focus toward production infrastructure: AWS EC2/RDS/S3 deployment, Docker Compose configuration, Nginx reverse proxying, and automated GitHub Actions CI/CD pipelines. This forced a transition from manual server setup to containerized, reproducible deployment pipelines.",

    "3. [Conclave](https://github.com/vaibhv19/conclave) *(Multi-Agent Coordination & Stateful Orchestration)*:\nElevated backend architecture from stateless request-response handlers to stateful multi-agent orchestration. Bridging local Ollama instances with cloud LLMs required building a canonical state machine, managing dynamic context budget compaction, and streaming token frames incrementally over WebSockets.",

    "4. [Phoenix](https://github.com/vaibhv19/Phoenix) *(Hybrid Retrieval & AI Observability)*:\nAddressed the opacity of naive vector search. By combining sparse BM25 keyword matching with dense pgvector embeddings and Cross-Encoder reranking, Phoenix turned probabilistic retrieval into an inspectable, observable pipeline where scoring math, query rewriting, and fallback routing are backed by real-time telemetry.",

    "5. [Vigil](https://github.com/vaibhv19/Vigil) *(Safe Container Sandboxing & Autonomous Agent Evaluation)*:\nRepresented the shift to safety engineering and runtime containment. Rather than trusting model outputs, Vigil executes autonomous agent tool requests inside ephemeral, resource-constrained Docker sandboxes—bounding CPU, memory, PIDs, and network access while measuring outcomes through objective state assertions.",

    "## 2 / How Technical Questions Changed Over Time",

    "Early on, engineering questions focused primarily on syntax and basic implementation: 'How do I query this table?' or 'How do I render this state change?'. As systems grew, questions shifted toward architectural durability, fault tolerance, and concurrency models: 'How does this system degrade when an upstream model times out?', 'How do we isolate side-effects when an agent runs arbitrary shell commands?', and 'What happens when state handoffs drop mid-stream?'",

    "## 3 / The Evolution of Testing & Verification",

    "Testing discipline similarly matured across this architectural progression:",

    "- Manual Checks: In early projects, verification consisted of manual browser clicking and console logging—hoping nothing broke under ideal local conditions.",
    "- Automated Unit & Integration Testing: In full-stack work, automated test suites (Pytest, JUnit) verified API contracts, schema migrations, and ORM behaviors within CI pipelines before code merged.",
    "- Isolated Container Sandboxing: In autonomous AI systems, verification expanded to ephemeral Docker containers that isolate untrusted execution and strictly enforce CPU, RAM, process ID (PID), and network boundaries.",
    "- Deterministic State Assertions: Moving beyond checking whether a function returned a string to verifying ground-truth system states—inspecting pre/post file system diffs, database mutation records, and process exit codes to objectively verify task completion.",
    "- Runtime Telemetry & Anomaly Detection: Continuous monitoring of live execution behavior, capturing retrieval score distributions, query rewriting triggers, and intercepting unauthorized tool calls before side-effects escape into production environments.",

    "Systems engineering is ultimately the transition from writing code that works under ideal conditions on localhost to designing resilient software systems that gracefully endure operational reality."
  ]
};
