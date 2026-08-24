export interface WritingArticle {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string[]; // Content paragraphs or markdown blocks
  relatedProjects?: string[]; // IDs of related projects
  relatedSkills?: string[];
  readingTime: string;
}

export const WRITING_ARTICLES: WritingArticle[] = [
  {
    slug: "how-i-work",
    title: "HOW I WORK",
    date: "2026-08-25",
    excerpt: "The principles, workflow, discipline, and engineering practices behind how I approach learning and building software.",
    readingTime: "6 min read",
    content: [
      "Engineering is as much about process and personal discipline as it is about syntax. Over time, I have developed a structured workflow centered on planning, incremental execution, and thorough verification.",
      "Before writing code, I invest time in architectural planning. Outlining component boundaries, defining state ownership, and specifying interface contracts upfront prevents architectural drift and eliminates premature refactoring.",
      "Large systems are best approached by breaking work into distinct, milestone-driven phases. Each phase is executed with focused commit discipline: small, atomic commits accompanied by clear, descriptive technical logs that make regression tracking straightforward.",
      "Verification is an essential part of implementation—no task is complete simply because the code compiles. Running full test suites, inspecting network logs, and verifying boundary conditions ensure that application contracts hold.",
      "Rather than spreading attention across dozens of half-finished ideas, I focus on completing major projects thoroughly. Finishing a system—from design to production deployment and documentation—is where true engineering maturity is cultivated."
    ]
  },
  {
    slug: "engineering-journey",
    title: "ENGINEERING JOURNEY",
    date: "2026-08-25",
    excerpt: "The path from learning programming fundamentals to building increasingly complex software systems.",
    readingTime: "7 min read",
    relatedProjects: ["check-mate-analyse", "trajectory", "conclave", "phoenix", "vigil"],
    content: [
      "My path into software engineering began with foundational curiosity about programming logic and small client-side applications. What started as exploring basic data structures gradually grew into an ambition to engineer resilient distributed systems.",
      "Learning Java and backend architecture shifted my focus toward object-oriented design, multithreading, and RESTful API development. Building full-stack web applications deepened my understanding of state management, database schema design, and asynchronous communication.",
      "Transitioning from local development to production deployment on AWS exposed me to operational reality—Docker containerization, CI/CD pipelines, reverse proxying with Nginx, and cloud infrastructure management.",
      "As my interest in artificial intelligence expanded, I moved from basic API wrappers to complex multi-agent orchestration, hybrid RAG retrieval systems, and containerized agent evaluation harnesses.",
      "Throughout this progression, architectural composition became increasingly important. Complex systems aren't built by adding code haphazardly; they are forged by designing clear abstractions, isolating failure domains, and respecting system boundaries."
    ]
  },
  {
    slug: "identity-and-influences",
    title: "IDENTITY & INFLUENCES",
    date: "2026-08-25",
    excerpt: "The ideas, disciplines, creative influences, and personal experiences that shape how I think about engineering.",
    readingTime: "6 min read",
    content: [
      "I view software engineering as a discipline sitting at the intersection of technical rigor and creative composition. Building a system requires both logical precision and an eye for clean, functional aesthetics.",
      "Visual design and software architecture share a common foundation: clarity, balance, and intentionality. A well-designed user interface should feel as intuitive and responsive as the backend systems supporting it.",
      "My approach is shaped by a deep curiosity about how complex mechanisms function beneath the surface. Taking apart difficult technical problems—whether virtual thread execution or consistent hashing algorithms—reveals principles that inform every line of code I write.",
      "I believe engineering work should be transparent, inspectable, and reproducible. Code should be clean, documentation should be meaningful, and system behavior should be observable rather than opaque.",
      "Ultimately, my work is driven by a commitment to continuous practice—learning through building, refining through feedback, and taking pride in creating software that is both technically sound and aesthetically compelling."
    ]
  },
  {
    slug: "why-i-chose-to-become-an-engineer",
    title: "Why I Chose to Become an Engineer",
    date: "2026-08-24",
    excerpt: "A personal reflection on curiosity, problem-solving, building things from first principles, and why engineering felt like the right way to turn ideas into things that actually exist.",
    readingTime: "5 min read",
    content: [
      "Before writing software or studying distributed systems, engineering began for me as simple curiosity—a persistent impulse to take things apart and understand why they functioned the way they did.",
      "Growing up, I was drawn to systems where cause and effect were deterministic. There was a unique satisfaction in taking a complex, mysterious mechanism, breaking it down to its underlying components, and understanding the precise rules governing its behavior.",
      "When I discovered programming, that curiosity found its natural medium. Software engineering offered an unprecedented canvas: you could design a system from first principles, codify its rules in logic, and immediately watch an abstract idea transform into something functional.",
      "Engineering, to me, sits at the intersection of rigorous logic and creative expression. Building software isn't just about making syntax work; it is about architectural composition, choosing the right abstractions, and building systems that can endure failure and scale gracefully.",
      "Along the way, the most important lesson has been embracing failure as a core feedback mechanism. A broken test, a race condition under concurrency, or an unexpected edge case isn't a failure—it's an invitation to understand the system at a deeper level.",
      "Ultimately, I chose engineering because it is not merely a profession; it is a continuous practice. It is the discipline of showing up, thinking deeply about problems, and constantly refining one's craft."
    ]
  },
  {
    slug: "what-i-learned-from-building-the-same-distributed-cache-in-java-and-python",
    title: "Same System, Different Languages",
    date: "2026-08-20",
    excerpt: "What I Learned From Building the Same Distributed Cache in Java and Python",
    readingTime: "8 min read",
    relatedProjects: ["cairn", "shard"],
    relatedSkills: ["java", "python", "consistent-hashing", "virtual-threads"],
    content: [
      "Distributed caching is one of the classic problems in software engineering. When designing a cache that scales horizontally across multiple nodes, the core mathematical challenge—consistent hashing with minimal churn—remains identical regardless of implementation language.",
      "However, building Cairn in Java and Shard in Python revealed how profoundly runtime ecosystems, memory layouts, and concurrency abstractions dictate real-world system behavior.",
      "In Cairn, Java 21's Virtual Threads allowed us to write straightforward synchronous read/write code over ConcurrentHashMap without locking overhead or manual event loop management. Thread-per-request throughput scaled exceptionally well under concurrency stress tests.",
      "In Shard, Python's GIL required leveraging asynchronous event loops (asyncio) and background thread pools. While Python made prototyping consistent hashing rings exceptionally fast, high concurrency required careful lock striping to prevent thread contention.",
      "Development and testing experiences also differed significantly. Python excelled at rapid prototyping and test suite creation with Pytest, while Java provided superior p95/p99 latency stability under sustained high-concurrency throughput benchmarks.",
      "Key conclusion: The mathematical architecture of a distributed system can remain identical, but runtime primitives define latency percentiles, memory footprints, and operational complexity."
    ]
  },
  {
    slug: "building-multi-agent-systems-twice-from-context-unification-to-agent-evaluation",
    title: "Building Agents Twice",
    date: "2026-08-15",
    excerpt: "From Context Unification to Agent Evaluation",
    readingTime: "7 min read",
    relatedProjects: ["conclave", "vigil"],
    relatedSkills: ["langgraph", "multi-agent-orchestration", "agent-evaluation", "container-isolation"],
    content: [
      "Building AI agent systems initially feels like an exercise in prompt chaining. But as system complexity grows, state management and canonical context translation become the real bottleneck.",
      "In Conclave, the objective was cooperative orchestration—getting diverse local Ollama models and cloud LLMs to share a unified context window without drifting into hallucinations.",
      "In Vigil, the problem inverted: instead of helping agents cooperate, we had to evaluate their failure modes. This required running agents inside isolated ephemeral Docker containers to verify boundary guardrails deterministically.",
      "Cooperative orchestration requires rich shared state translation and prompt handoffs. Evaluation requires deterministic input injection, system call interception, and clean sandbox teardown.",
      "True agent engineering lives at the boundary between these two paradigms: prompt tuning alone cannot guarantee safety—real safety requires isolated execution boundaries and runtime telemetry."
    ]
  },
  {
    slug: "making-ai-systems-less-blackbox",
    title: "Beyond the Black Box",
    date: "2026-08-10",
    excerpt: "Two Ways of Making AI Systems Less Black-Box",
    readingTime: "6 min read",
    relatedProjects: ["phoenix", "conclave"],
    relatedSkills: ["hybrid-rag", "fastapi", "postgresql"],
    content: [
      "The primary issue with integrating LLMs into enterprise software isn't raw capability—it's opacity. When an AI pipeline yields an unexpected response, traditional logging provides zero insight into internal score distributions or vector similarity distances.",
      "We tackled this in two distinct ways across Phoenix and Conclave.",
      "In Phoenix, we introduced explicit retrieval decision traces. Every step—sparse BM25 scoring, dense vector similarity, and Cross-Encoder reranking—emits inspectable telemetry metrics.",
      "In Conclave, we implemented context translation trees that track exactly how prompt state evolved across agent hops and model providers. Inspectability is non-negotiable for production AI systems.",
      "Building production AI applications requires treating observability as a primary feature, logging retrieval distributions and prompt mutations at every turn."
    ]
  },
  {
    slug: "local-first-ai-why-i-kept-the-intelligence-close-to-the-application",
    title: "Local Intelligence",
    date: "2026-08-05",
    excerpt: "Why I Kept the Intelligence Close to the Application",
    readingTime: "7 min read",
    relatedProjects: ["conclave", "phoenix", "check-mate-analyse"],
    relatedSkills: ["ollama", "webassembly", "pgvector", "fastapi"],
    content: [
      "Local-first intelligence means keeping computation, vector indexing, and model inference as close to the user's application boundary as possible.",
      "In Conclave, running local Ollama model instances allowed multi-agent workflows to run offline without cloud API latency or per-token cost constraints.",
      "In Check-Mate-Analyse, offloading chess tactical evaluation to browser-side Stockfish instances via WebAssembly and Web Workers enabled zero-latency engine analysis without backend server compute costs.",
      "In Phoenix, embedded PostgreSQL with pgvector enabled deterministic retrieval testing and local vector index management without cloud vector database lock-in.",
      "Architectural takeaway: Local-first intelligence empowers developers to build resilient, privacy-preserving applications where core functionality remains available regardless of remote network conditions."
    ]
  },
  {
    slug: "what-changes-when-the-ai-stops-being-a-single-api-call",
    title: "Beyond an API Call",
    date: "2026-07-28",
    excerpt: "What Changes When the AI Stops Being a Single API Call",
    readingTime: "8 min read",
    relatedProjects: ["trajectory", "conclave", "phoenix"],
    relatedSkills: ["langgraph", "hybrid-rag", "fastapi", "spring-boot"],
    content: [
      "A common entry point to AI engineering is wrapping an HTTP POST call to an LLM API inside an existing web application. But moving from AI-assisted features to true AI software systems changes every architectural layer.",
      "When AI integration evolves into multi-provider orchestration (Conclave) or hybrid retrieval pipelines (Phoenix), state management and token budget limits become explicit system constraints.",
      "Raw vector search is rarely sufficient: production pipelines require combining sparse keyword matching (BM25) with dense embeddings and Cross-Encoder reranking.",
      "System failure handling must be designed explicitly: low retrieval confidence scores should trigger query rewriting, clarification prompts, or automated model fallbacks.",
      "Ultimately, building AI software systems means treating LLMs as probabilistic sub-components inside deterministic orchestration, retrieval, and telemetry harnesses."
    ]
  },
  {
    slug: "when-model-answered-isnt-enough",
    title: "Designing for Failure",
    date: "2026-07-18",
    excerpt: "When “The Model Answered” Isn’t Enough: Designing for Failure",
    readingTime: "6 min read",
    relatedProjects: ["phoenix", "vigil"],
    relatedSkills: ["hybrid-rag", "agent-evaluation", "docker"],
    content: [
      "A dangerous antipattern in modern software development is assuming that receiving an HTTP 200 response from a model API equals task success.",
      "LLMs can hallucinate, fail retrieval constraints, or breach security parameters. System reliability requires treating the model as an unverified, probabilistic component.",
      "In Phoenix, we handle retrieval uncertainty through multi-stage validation: query rewriting on low confidence, automated reranking, and fallback model routing.",
      "In Vigil, we evaluate agent behavior inside isolated ephemeral Docker containers to verify whether requested side effects match policy rules objectively.",
      "Designing for failure means surrounding probabilistic model outputs with strict, inspectable validation boundaries."
    ]
  },
  {
    slug: "the-evolution-of-my-real-time-architecture",
    title: "Real-Time, Evolved",
    date: "2026-07-05",
    excerpt: "The Evolution of My Real-Time Architecture",
    readingTime: "7 min read",
    relatedProjects: ["conclave", "foundry"],
    relatedSkills: ["websockets", "react", "fastapi", "spring-boot"],
    content: [
      "Real-time applications often appear straightforward until concurrency, transport re-connections, and state synchronization enter the picture.",
      "Comparing real-time architectures across Conclave and Foundry highlights how complexity is distributed between low-level WebSocket framing and application business logic.",
      "Streaming AI model outputs incrementally over WebSockets requires decoupling message frame delivery from database persistence loops to avoid blocking client event listeners.",
      "On the frontend, reactive UI synchronization demands managing optimistic updates, exponential reconnect backoff, and out-of-order message reordering.",
      "Key insight: High-throughput real-time architecture relies on strict separation between connection transport management and background business logic execution."
    ]
  },
  {
    slug: "from-coursework-to-systems-engineering-how-my-projects-became-more-serious",
    title: "From Coursework to Systems",
    date: "2026-06-22",
    excerpt: "How My Projects Became More Serious",
    readingTime: "9 min read",
    relatedProjects: ["check-mate-analyse", "trajectory", "conclave", "phoenix", "vigil"],
    relatedSkills: ["docker", "aws", "hybrid-rag", "langgraph", "java", "python"],
    content: [
      "Engineering growth can be traced through the evolving complexity of the systems one builds.",
      "My project journey progressed along a clear architectural arc: Complex Client-Side Application (Check-Mate-Analyse) → Full-Stack Application & Production Deployment (Trajectory) → Multi-Agent Systems (Conclave) → AI Retrieval Systems (Phoenix) → Agent Evaluation & Verification (Vigil).",
      "Early projects prioritized user interface features and client-side state. Later projects required rigorous database locking, container isolation, vector similarity mathematics, and multi-threaded runtime coordination.",
      "Testing discipline evolved from manual browser checks to automated CI/CD pipelines, containerized test harnesses, and deterministic sandbox verification.",
      "Systems engineering is ultimately the transition from writing code that works under ideal conditions to designing systems that gracefully endure operational reality."
    ]
  },
  {
    slug: "why-some-of-my-projects-need-more-than-one-backend",
    title: "Why One Backend Isn't Enough",
    date: "2026-06-10",
    excerpt: "Why Some of My Projects Need More Than One Backend",
    readingTime: "7 min read",
    relatedProjects: ["phoenix", "conclave", "trajectory"],
    relatedSkills: ["spring-boot", "fastapi", "docker", "postgresql"],
    content: [
      "Monolithic backends built in Spring Boot or FastAPI provide excellent architectural cohesion for standard CRUD workflows and relational data management.",
      "However, in Phoenix and Conclave, separating core platform operations and specialized AI processing across polyglot microservices proved necessary.",
      "Running a dedicated FastAPI service for vector embedding, hybrid reranking, and model inference allowed us to leverage Python's machine learning ecosystem while preserving Java/Spring Boot for high-concurrency platform services.",
      "Polyglot architecture introduces explicit trade-offs: container orchestration complexity, inter-service REST/gRPC latency, and deployment configuration management.",
      "Premature microservice splitting should be avoided—multi-backend architectures are only justified when distinct runtime requirements (e.g. GPU model inference vs virtual thread concurrency) demand specialized environments."
    ]
  },
  {
    slug: "production-changed-how-i-build",
    title: "Building for Production",
    date: "2026-05-15",
    excerpt: "What Building for Production Changed About How I Build",
    readingTime: "9 min read",
    relatedProjects: ["trajectory"],
    relatedSkills: ["docker", "aws", "nginx", "spring-boot", "react"],
    content: [
      "Running applications on `localhost` hides operational reality. Deploying Trajectory on AWS EC2, RDS, and S3 using Docker Compose, Nginx, and GitHub Actions fundamentally altered my approach to software development.",
      "Production deployment forces environment configuration to be codified in Dockerfiles and Compose manifests rather than manually configured on host servers.",
      "Automated CI/CD workflows running linting, build checks, and integration tests before deployment prevent regression errors from breaking production branches.",
      "Addressing pessimistic DB locking, static asset delivery via S3, Nginx reverse proxying, and structured logging redefined how application code is structured from day one.",
      "Workflow evolution: Production experience changes local development—software is built with environment isolation, configuration management, and explicit error boundaries from the very first commit."
    ]
  }
];
