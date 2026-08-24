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
    slug: "distributed-cache-java-python",
    title: "One Cache, Two Languages",
    date: "2026-08-15",
    excerpt: "A comparative architectural breakdown of Cairn (Java 21) and Shard (Python), exploring how language ecosystems, virtual threads vs event loops, and data structures shape distributed cache engineering.",
    readingTime: "8 min read",
    relatedProjects: ["cairn", "shard"],
    relatedSkills: ["java", "python", "consistent-hashing", "virtual-threads"],
    content: [
      "Distributed caching is one of the classic problems in software engineering. When designing a cache that scales horizontally across multiple nodes, the core mathematical challenge—consistent hashing with minimal churn—remains identical regardless of implementation language.",
      "However, building **Cairn** in Java and **Shard** in Python revealed how profoundly runtime ecosystems, memory layouts, and concurrency abstractions dictate real-world system behavior.",
      "In Cairn, Java 21's Virtual Threads allowed us to write straightforward synchronous read/write code over ConcurrentHashMap without locking overhead or manual event loop management. Thread-per-request throughput scaled exceptionally well under concurrency stress tests.",
      "In Shard, Python's GIL required leveraging asynchronous event loops (asyncio) and background thread pools. While Python made prototyping consistent hashing rings exceptionally fast, high concurrency required careful lock striping to prevent thread contention.",
      "Key conclusion: The mathematical architecture of a distributed system can remain identical, but runtime primitives define latency percentiles (p95/p99) and operational complexity."
    ]
  },
  {
    slug: "multi-agent-systems-unification-evaluation",
    title: "When Agents Stop Cooperating",
    date: "2026-07-28",
    excerpt: "What changes when you transition from orchestrating cooperative AI agents in Conclave to adversarial safety and evaluation in Vigil.",
    readingTime: "7 min read",
    relatedProjects: ["conclave", "vigil"],
    relatedSkills: ["langgraph", "multi-agent-orchestration", "agent-evaluation", "container-isolation"],
    content: [
      "Building AI agent systems initially feels like an exercise in prompt chaining. But as system complexity grows, state management and canonical context translation become the real bottleneck.",
      "In **Conclave**, the objective was cooperative orchestration—getting diverse local Ollama models and cloud LLMs to share a unified context window without drifting into hallucinations.",
      "In **Vigil**, the problem inverted: instead of helping agents cooperate, we had to evaluate their failure modes. This required running agents inside isolated ephemeral Docker containers to verify boundary guardrails deterministically.",
      "Orchestration requires rich shared state; evaluation requires clean, isolated sandbox teardown. True agent engineering lives at the boundary between these two paradigms."
    ]
  },
  {
    slug: "making-ai-systems-less-blackbox",
    title: "Two Ways of Making AI Systems Less Black-Box",
    date: "2026-06-20",
    excerpt: "Examining retrieval traceability in Phoenix and canonical context translation in Conclave to eliminate opaque AI decision-making.",
    readingTime: "6 min read",
    relatedProjects: ["phoenix", "conclave"],
    relatedSkills: ["hybrid-rag", "fastapi", "postgresql"],
    content: [
      "The primary issue with integrating LLMs into enterprise software isn't raw capability—it's opacity. When an AI pipeline yields an unexpected response, traditional logging provides zero insight into internal score distributions or vector similarity distances.",
      "We tackled this in two distinct ways across **Phoenix** and **Conclave**.",
      "In Phoenix, we introduced explicit retrieval decision traces. Every step—sparse BM25 scoring, dense vector similarity, and Cross-Encoder reranking—emits inspectable telemetry metrics.",
      "In Conclave, we implemented context translation trees that track exactly how prompt state evolved across agent hops. Inspectability is non-negotiable for production AI systems."
    ]
  },
  {
    slug: "when-model-answered-isnt-enough",
    title: "When 'The Model Answered' Isn't Enough: Designing for Failure",
    date: "2026-05-12",
    excerpt: "Why model output is not system success, and how fallback architecture, confidence scoring, and self-healing loops protect application integrity.",
    readingTime: "5 min read",
    relatedProjects: ["phoenix", "vigil"],
    relatedSkills: ["hybrid-rag", "agent-evaluation"],
    content: [
      "A common antipattern in modern AI development is assuming that receiving an HTTP 200 from a model API equals task success.",
      "Models can hallucinate, fail retrieval constraints, or breach security parameters. System reliability requires treating the model as an unverified, probabilistic component.",
      "Designing for failure means implementing multi-stage validation: query rewriting on low retrieval confidence, automated fallbacks to fallback models, and sandbox verification before side effects are executed."
    ]
  },
  {
    slug: "production-changed-how-i-build",
    title: "What Building for Production Changed About How I Build",
    date: "2026-04-05",
    excerpt: "How deploying Trajectory on AWS EC2/RDS/S3 with Docker, Nginx, and GitHub Actions shifted my mindset from writing code to engineering software systems.",
    readingTime: "9 min read",
    relatedProjects: ["trajectory"],
    relatedSkills: ["docker", "aws", "spring-boot", "react"],
    content: [
      "Running code locally on `localhost:8080` is simple. Deploying a full-stack system to production on AWS forces you to confront operational reality.",
      "Building **Trajectory** forced a fundamental mindset shift: version control isn't just code backup; it's the deployment artifact trigger. Environment setup isn't a manual step; it must be codified in Docker Compose and Nginx configuration.",
      "Production concerns—pessimistic DB locking, zero-downtime static asset delivery on S3, automated CI/CD checks, and structured error boundaries—completely redefine how application code is written from day one."
    ]
  }
];
