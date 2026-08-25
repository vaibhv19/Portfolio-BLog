import { WritingArticle } from "../writing";

export const articleEngineeringJourney: WritingArticle = {
  slug: "engineering-journey",
  title: "ENGINEERING JOURNEY",
  date: "2026-08-25",
  excerpt: "The path from learning basic programming logic to designing distributed services and containerized evaluation harnesses.",
  readingTime: "9 min read",
  content: [
    "My path into software engineering didn't start with architectural blueprints or distributed consensus models. It began with the usual starter code: writing small scripts, getting excited when something printed to the console, and then figuring out why the UI froze every time a loop ran longer than expected. Over time, that trial-and-error curiosity evolved into a deliberate practice of building, breaking, and analyzing systems of increasing complexity.",

    "Looking back across the projects I've built, my engineering growth follows a very clear shift in the questions I ask—moving from 'How do I make this feature work?' to 'How does this system behave under load, isolate failures, and handle unexpected states?'",

    "## 01. Client-Side Mechanics & Browser Compute",

    "In the early phase of my learning, I focused on client-side application logic and state management. Building projects like [Check-Mate-Analyse](https://github.com/vaibhv19/check-mate-analyse) (a chess tactical analysis tool) introduced me to the unpleasant reality of resource-intensive compute in single-threaded environments.",

    "Rather than sending every board position to a remote server for engine evaluation, I explored offloading compute directly to the browser using Stockfish compiled to WebAssembly and executed within background Web Workers. This taught me immediate lessons about local-first compute, non-blocking UI threads, and managing asynchronous state transitions without turning the user interface into a slideshow.",

    "## 02. Backend Foundations & Object-Oriented Rigor",

    "Moving from client-side interfaces into backend development brought me into the Java and Python ecosystems. Learning object-oriented design patterns, relational database schemas, and multithreading in Java shifted my focus toward how systems are structured beneath the API layer.",

    "I began building RESTful services, studying thread pools, and tracing how data flows from HTTP request handlers down through service layers, ORMs, and relational storage. This phase highlighted the value of clean abstraction boundaries—specifically, why mixing business domain logic with raw database connections is a shortcut you'll inevitably regret.",

    "## 03. Production Reality & Operational Infrastructure",

    "Building on `localhost` is comfortable because network latency is zero, memory is infinite, and databases never restart mid-transaction. Building and deploying [Trajectory](https://github.com/vaibhv19/trajectory) (a full-stack web application) was my first real encounter with operational reality.",

    "Deploying Trajectory using AWS EC2, PostgreSQL (RDS), Amazon S3 for static media, Nginx reverse proxying, and GitHub Actions CI/CD pipelines exposed me to real deployment headaches. It forced me to think about environment isolation, static asset delivery, database migration scripts, and structured logging from day one rather than as an afterthought.",

    "## 04. Multi-Agent Systems & Context Orchestration",

    "As my interest in artificial intelligence grew beyond calling model APIs, I began investigating multi-agent coordination. In [Conclave](https://github.com/vaibhv19/conclave), I tackled the problem of orchestrating multiple local Ollama models and cloud LLMs around a single unified context window.",

    "This phase introduced me to the messiness of prompt handoffs, context state translation, token budget management, and streaming real-time responses over WebSockets. I quickly realized that the hardest part of AI engineering isn't writing clever prompts—it's managing context state and translation deterministically.",

    "## 05. AI Observability & Hybrid Retrieval Systems",

    "When building AI retrieval systems, relying solely on vector embeddings or raw model outputs quickly reveals limitations: models hallucinate with impressive confidence, vector search misses exact keyword matches, and pipeline decisions remain complete black boxes. In [Phoenix](https://github.com/vaibhv19/Phoenix), I focused on solving AI observability.",

    "I designed a hybrid RAG engine combining sparse keyword matching (BM25) with dense vector embeddings and Cross-Encoder reranking. Crucially, every step of the retrieval pipeline emits inspectable decision traces, allowing developers to see exact scoring distributions, query rewriting attempts, and fallback triggers instead of guessing why a document was selected.",

    "## 06. Safe Runtime Isolation & Agent Evaluation",

    "Most recently, in [Vigil](https://github.com/vaibhv19/Vigil), I turned my attention toward agent safety and evaluation. Instead of building agents to perform autonomous tasks, Vigil asks a more critical question: *How do we objectively measure, constrain, and verify what an autonomous agent actually does when execution goes wrong?*",

    "Vigil executes AI agents inside isolated, resource-constrained Docker sandboxes, enforcing strict CPU, memory, process ID, and network boundaries while recording tool calls and state assertions. This project represents my current focus on deterministic verification, containment, and system safety.",

    "## The Evolving Mindset",

    "This engineering journey is very much an ongoing process. Moving from standalone scripts to designing distributed caches and containerized evaluation harnesses has changed how I approach software. Writing clean code syntax is essential, but long-term system health depends on architectural discipline, continuous verification, and honest operational boundaries."
  ]
};
