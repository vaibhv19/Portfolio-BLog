import { WritingArticle } from "../writing";

export const articleEngineeringJourney: WritingArticle = {
  slug: "engineering-journey",
  title: "ENGINEERING JOURNEY",
  date: "2026-08-25",
  excerpt: "The path from learning programming fundamentals to building increasingly complex software systems.",
  readingTime: "9 min read",
  content: [
    "My path into software engineering did not start with grand architectural blueprints for distributed platforms. It began with foundational curiosity about programming logic and small client-side applications. Over time, that curiosity evolved into a deliberate practice of building, testing, and reflecting on software systems of increasing complexity.",

    "Looking back across the projects I have built, my development follows a clear progression of technical questions—from 'How do I write this feature?' to 'How do these components interact, isolate failures, and behave under stress?'",

    "## 01. Client-Side Mechanics & Browser Compute",

    "In the early phase of my learning, I focused on client-side application logic and state management. Building projects like [Check-Mate-Analyse](https://github.com/vaibhv19/check-mate-analyse) (a chess tactical analysis tool) introduced me to the challenges of resource-intensive computation.",

    "Rather than sending every board position to a remote server for engine evaluation, I explored offloading computation directly to the client browser using Stockfish compiled to WebAssembly and executed within background Web Workers. This taught me key lessons about local-first compute, non-blocking UI threads, and managing asynchronous state transitions without freezing user interfaces.",

    "## 02. Backend Foundations & Object-Oriented Rigor",

    "Transitioning from client-side interfaces to backend development led me deep into Java and Python ecosystems. Learning object-oriented design patterns, relational database schema design, and multithreading in Java shifted my focus toward system structure.",

    "I began building RESTful services, studying thread pools, and understanding how data moves from HTTP request handlers down through service layers, ORMs, and relational storage. This phase highlighted the importance of clear abstraction boundaries: separating business domain logic from connection management and data access primitives.",

    "## 03. Production Reality & Operational Infrastructure",

    "Building locally on `localhost` hides the harsh realities of network latency, container isolation, and deployment environments. Building and deploying [Trajectory](https://github.com/vaibhv19/trajectory) (a full-stack web application) was a major milestone in my growth.",

    "Deploying Trajectory using AWS EC2, PostgreSQL (RDS), Amazon S3 for static media, Nginx reverse proxying, and GitHub Actions CI/CD pipelines exposed me to operational reality. It forced me to think about environment isolation, static asset delivery, database migration scripts, and structured logging from day one.",

    "## 04. Multi-Agent Systems & Context Orchestration",

    "As my interest in artificial intelligence expanded beyond simple model API wrappers, I began investigating multi-agent coordination. In [Conclave](https://github.com/vaibhv19/conclave), I tackled the problem of orchestrating multiple local Ollama models and cloud LLMs around a unified context window.",

    "This phase introduced me to the complexities of prompt handoffs, context state translation, token budget management, and streaming real-time responses over WebSockets. I realized that the core challenge of AI engineering isn't writing prompts—it is managing context state and system translation deterministically.",

    "## 05. AI Observability & Hybrid Retrieval Systems",

    "When building AI systems, relying on raw vector search or model outputs alone quickly reveals limitations: models hallucinate, vector search misses exact keyword matches, and pipeline decisions remain black boxes. In [Phoenix](https://github.com/vaibhv19/Phoenix), I focused on AI system observability.",

    "I designed a hybrid RAG engine combining sparse keyword matching (BM25) with dense vector embeddings and Cross-Encoder reranking. Crucially, every step of the retrieval pipeline emits inspectable decision traces, allowing developers to see exact scoring distributions, query rewriting attempts, and fallback triggers.",

    "## 06. Safe Runtime Isolation & Agent Evaluation",

    "Most recently, in [Vigil](https://github.com/vaibhv19/Vigil), I turned my focus toward agent safety and evaluation. Instead of building agents to perform tasks, Vigil asks a different question: *How do we objectively measure, constrain, and verify what an autonomous agent actually does?*",

    "Vigil executes AI agents inside isolated, resource-constrained Docker sandboxes, enforcing strict CPU, memory, process ID, and network boundaries while recording tool calls and state assertions. This project represents my current focus on deterministic verification, containment, and system safety.",

    "## The Evolving Mindset",

    "This engineering journey is not a finished story—it is a continuous practice. Moving from writing standalone scripts to designing distributed caches and containerized evaluation harnesses has fundamentally changed how I view software. Code syntax is important, but long-term system health depends on clear architecture, rigorous verification, and honest operational boundaries."
  ]
};
