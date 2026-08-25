/**
 * Technology Inventory — derived from skills.md
 *
 * This is the authoritative data source for the /technology page.
 * Consolidated into 8 primary top-level categories:
 *  1. Languages
 *  2. Backend & API Engineering
 *  3. Frontend Engineering (absorbs Browser Compute & Web Performance)
 *  4. AI, LLM & Agent Systems (absorbs RAG & Retrieval Systems)
 *  5. Data & Persistence
 *  6. Distributed Systems & Cache Engineering (absorbs Concurrency & Asynchronous Systems)
 *  7. Security Engineering
 *  8. Engineering Capabilities (absorbs Testing, DevOps/Infra, and CLI & Tooling)
 */

export interface TechnologyItem {
  name: string;
  /** If set, this technology links to /technology/[articleSlug] */
  articleSlug?: string;
  /** Project IDs where this technology is evidenced */
  projectEvidence?: string[];
}

export interface TechnologySubcategory {
  title: string;
  items: TechnologyItem[];
}

export interface TechnologyCategory {
  id: string;
  title: string;
  subcategories: TechnologySubcategory[];
}

export const TECHNOLOGY_CATEGORIES: TechnologyCategory[] = [
  // ─── 1. Languages ───
  {
    id: "languages",
    title: "Languages",
    subcategories: [
      {
        title: "",
        items: [
          { name: "Java", articleSlug: "java", projectEvidence: ["cairn", "conclave", "trajectory"] },
          { name: "Python", articleSlug: "python", projectEvidence: ["foundry", "phoenix", "shard", "studylink", "vigil"] },
          { name: "TypeScript", articleSlug: "typescript", projectEvidence: ["checkmate-analyze", "trajectory"] },
          { name: "SQL" },
        ],
      },
    ],
  },

  // ─── 2. Backend & API Engineering ───
  {
    id: "backend-api",
    title: "Backend & API Engineering",
    subcategories: [
      {
        title: "Java Ecosystem",
        items: [
          { name: "Spring Boot", articleSlug: "spring-boot", projectEvidence: ["cairn", "conclave", "phoenix", "trajectory"] },
          { name: "Hibernate" },
          { name: "Spring Security" },
        ],
      },
      {
        title: "Python Ecosystem",
        items: [
          { name: "Django", projectEvidence: ["foundry", "shard", "studylink"] },
          { name: "FastAPI", projectEvidence: ["phoenix", "vigil"] },
        ],
      },
      {
        title: "API & Real-Time Engineering",
        items: [
          { name: "WebSockets", projectEvidence: ["conclave", "foundry"] },
        ],
      },
    ],
  },

  // ─── 3. Frontend Engineering ───
  {
    id: "frontend",
    title: "Frontend Engineering",
    subcategories: [
      {
        title: "Frameworks & Runtimes",
        items: [
          { name: "React", articleSlug: "react", projectEvidence: ["checkmate-analyze", "conclave", "foundry", "phoenix", "studylink", "trajectory"] },
          { name: "Vite" },
        ],
      },
      {
        title: "UI & Styling",
        items: [
          { name: "Tailwind CSS" },
        ],
      },
      {
        title: "Browser Compute",
        items: [
          { name: "WebAssembly" },
        ],
      },
    ],
  },

  // ─── 4. AI, LLM & Agent Systems ───
  {
    id: "ai-llm-agent",
    title: "AI, LLM & Agent Systems",
    subcategories: [
      {
        title: "AI Frameworks & Platforms",
        items: [
          { name: "LangGraph", articleSlug: "langgraph", projectEvidence: ["foundry", "vigil"] },
          { name: "Spring AI", projectEvidence: ["conclave", "trajectory"] },
          { name: "Ollama" },
          { name: "Google Gemini API" },
          { name: "Groq API" },
        ],
      },
      {
        title: "Agent Systems",
        items: [
          { name: "Multi-Agent Systems" },
        ],
      },
      {
        title: "Core AI Systems",
        items: [
          { name: "Retrieval-Augmented Generation" },
          { name: "pgvector", projectEvidence: ["phoenix", "studylink"] },
        ],
      },
    ],
  },

  // ─── 5. Data & Persistence ───
  {
    id: "data-persistence",
    title: "Data & Persistence",
    subcategories: [
      {
        title: "Databases",
        items: [
          { name: "PostgreSQL", articleSlug: "postgresql", projectEvidence: ["conclave", "foundry", "phoenix", "studylink", "trajectory", "vigil"] },
          { name: "MySQL" },
          { name: "MongoDB" },
          { name: "SQLite" },
          { name: "Redis", projectEvidence: ["foundry", "trajectory"] },
        ],
      },
      {
        title: "Data Infrastructure & Storage",
        items: [
          { name: "Flyway" },
          { name: "MinIO" },
        ],
      },
    ],
  },

  // ─── 6. Distributed Systems & Cache Engineering ───
  {
    id: "distributed-cache",
    title: "Distributed Systems & Cache Engineering",
    subcategories: [
      {
        title: "Distributed Systems",
        items: [
          { name: "Consistent Hashing", articleSlug: "consistent-hashing", projectEvidence: ["cairn", "shard"] },
          { name: "Sharding" },
          { name: "Distributed Caching" },
        ],
      },
      {
        title: "Concurrency & Asynchronous Systems",
        items: [
          { name: "Virtual Threads", articleSlug: "virtual-threads", projectEvidence: ["cairn", "conclave", "trajectory"] },
          { name: "Celery" },
        ],
      },
    ],
  },

  // ─── 7. Security Engineering ───
  {
    id: "security",
    title: "Security Engineering",
    subcategories: [
      {
        title: "Authentication & Authorization",
        items: [
          { name: "JWT Authentication" },
          { name: "OAuth2" },
          { name: "Role-Based Access Control" },
        ],
      },
    ],
  },

  // ─── 8. Testing, QA & Evaluation ───
  {
    id: "testing-qa",
    title: "Testing, QA & Evaluation",
    subcategories: [
      {
        title: "",
        items: [
          { name: "Pytest" },
          { name: "Playwright", projectEvidence: ["conclave", "foundry"] },
          { name: "Vitest" },
          { name: "JUnit 5" },
          { name: "Mockito" },
        ],
      },
    ],
  },

  // ─── 9. DevOps & Infrastructure ───
  {
    id: "devops-infra",
    title: "DevOps & Infrastructure",
    subcategories: [
      {
        title: "",
        items: [
          { name: "Docker", articleSlug: "docker", projectEvidence: ["cairn", "phoenix", "shard", "trajectory", "vigil"] },
          { name: "AWS", articleSlug: "aws", projectEvidence: ["trajectory"] },
          { name: "Vercel" },
          { name: "Nginx" },
          { name: "CI/CD" },
        ],
      },
    ],
  },
];
