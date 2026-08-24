export interface SkillItem {
  id: string;
  name: string;
  category: string;
  experienceSlug?: string; // If experience article exists in My Experience With...
  articleStatus: 'Article Published' | 'Article Planned' | 'No Dedicated Article Yet';
  projectsUsedIn: string[]; // Project IDs
  isHeadline?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    description: "Core programming languages used across backend systems, distributed services, and browser runtimes.",
    skills: [
      {
        id: "java",
        name: "Java",
        category: "Languages",
        experienceSlug: "java",
        articleStatus: "Article Published",
        projectsUsedIn: ["cairn", "conclave", "trajectory"],
        isHeadline: true
      },
      {
        id: "python",
        name: "Python",
        category: "Languages",
        experienceSlug: "python",
        articleStatus: "Article Published",
        projectsUsedIn: ["foundry", "phoenix", "shard", "studylink", "vigil"],
        isHeadline: true
      },
      {
        id: "typescript",
        name: "TypeScript",
        category: "Languages",
        experienceSlug: "typescript",
        articleStatus: "Article Published",
        projectsUsedIn: ["checkmate-analyze", "trajectory"],
        isHeadline: true
      },
      {
        id: "javascript",
        name: "JavaScript",
        category: "Languages",
        articleStatus: "No Dedicated Article Yet",
        projectsUsedIn: ["checkmate-analyze", "trajectory"]
      },
      {
        id: "sql",
        name: "SQL",
        category: "Languages",
        articleStatus: "No Dedicated Article Yet",
        projectsUsedIn: ["conclave", "phoenix", "studylink", "trajectory"]
      },
      {
        id: "html-css",
        name: "HTML & CSS",
        category: "Languages",
        articleStatus: "No Dedicated Article Yet",
        projectsUsedIn: ["checkmate-analyze", "trajectory"]
      }
    ]
  },
  {
    id: "backend",
    title: "Backend & API Engineering",
    description: "Enterprise frameworks, REST/WebSocket APIs, authentication, and asynchronous backend services.",
    skills: [
      {
        id: "spring-boot",
        name: "Spring Boot",
        category: "Backend & API Engineering",
        experienceSlug: "spring-boot",
        articleStatus: "Article Published",
        projectsUsedIn: ["cairn", "conclave", "trajectory"],
        isHeadline: true
      },
      {
        id: "fastapi",
        name: "FastAPI",
        category: "Backend & API Engineering",
        experienceSlug: "fastapi",
        articleStatus: "Article Published",
        projectsUsedIn: ["phoenix", "vigil"],
        isHeadline: true
      },
      {
        id: "django",
        name: "Django & REST Framework",
        category: "Backend & API Engineering",
        experienceSlug: "django",
        articleStatus: "Article Published",
        projectsUsedIn: ["foundry", "shard", "studylink"]
      },
      {
        id: "websockets",
        name: "WebSockets & STOMP",
        category: "Backend & API Engineering",
        articleStatus: "Article Planned",
        projectsUsedIn: ["conclave", "foundry"]
      },
      {
        id: "spring-security",
        name: "Spring Security & OAuth2",
        category: "Backend & API Engineering",
        articleStatus: "No Dedicated Article Yet",
        projectsUsedIn: ["trajectory", "conclave"]
      },
      {
        id: "jpa-hibernate",
        name: "Spring Data JPA / Hibernate",
        category: "Backend & API Engineering",
        articleStatus: "No Dedicated Article Yet",
        projectsUsedIn: ["cairn", "conclave", "trajectory"]
      }
    ]
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    description: "Modern UI frameworks, web standard performance APIs, browser multithreading, and state management.",
    skills: [
      {
        id: "react",
        name: "React",
        category: "Frontend Engineering",
        experienceSlug: "react",
        articleStatus: "Article Published",
        projectsUsedIn: ["checkmate-analyze", "conclave", "foundry", "trajectory"],
        isHeadline: true
      },
      {
        id: "nextjs",
        name: "Next.js (App Router)",
        category: "Frontend Engineering",
        experienceSlug: "nextjs",
        articleStatus: "Article Published",
        projectsUsedIn: ["trajectory"],
        isHeadline: true
      },
      {
        id: "tailwind",
        name: "Tailwind CSS",
        category: "Frontend Engineering",
        articleStatus: "No Dedicated Article Yet",
        projectsUsedIn: ["checkmate-analyze", "trajectory"]
      },
      {
        id: "web-workers-wasm",
        name: "Web Workers & WebAssembly",
        category: "Frontend Engineering",
        experienceSlug: "web-workers-wasm",
        articleStatus: "Article Published",
        projectsUsedIn: ["checkmate-analyze"],
        isHeadline: true
      },
      {
        id: "zustand",
        name: "Zustand & TanStack Query",
        category: "Frontend Engineering",
        articleStatus: "No Dedicated Article Yet",
        projectsUsedIn: ["conclave", "foundry", "trajectory"]
      }
    ]
  },
  {
    id: "ai-agents",
    title: "AI, LLM & Agent Systems",
    description: "Multi-agent orchestration, stateful LLM workflows, evaluation harnesses, and RAG retrieval pipelines.",
    skills: [
      {
        id: "langgraph",
        name: "LangGraph",
        category: "AI, LLM & Agent Systems",
        experienceSlug: "langgraph",
        articleStatus: "Article Published",
        projectsUsedIn: ["foundry", "vigil"],
        isHeadline: true
      },
      {
        id: "spring-ai",
        name: "Spring AI",
        category: "AI, LLM & Agent Systems",
        articleStatus: "Article Planned",
        projectsUsedIn: ["conclave", "trajectory"]
      },
      {
        id: "multi-agent-orchestration",
        name: "Multi-Agent Systems & Orchestration",
        category: "AI, LLM & Agent Systems",
        experienceSlug: "multi-agent-orchestration",
        articleStatus: "Article Published",
        projectsUsedIn: ["conclave", "vigil"],
        isHeadline: true
      },
      {
        id: "hybrid-rag",
        name: "Hybrid RAG & Vector Search",
        category: "AI, LLM & Agent Systems",
        experienceSlug: "hybrid-rag",
        articleStatus: "Article Published",
        projectsUsedIn: ["phoenix", "studylink"],
        isHeadline: true
      },
      {
        id: "ollama-local-llm",
        name: "Ollama & Local LLM Inference",
        category: "AI, LLM & Agent Systems",
        articleStatus: "No Dedicated Article Yet",
        projectsUsedIn: ["conclave", "phoenix"]
      }
    ]
  },
  {
    id: "data-persistence",
    title: "Data & Persistence",
    description: "Relational, document, in-memory, and vector database engines with migration controls.",
    skills: [
      {
        id: "postgresql",
        name: "PostgreSQL & pgvector",
        category: "Data & Persistence",
        experienceSlug: "postgresql",
        articleStatus: "Article Published",
        projectsUsedIn: ["conclave", "foundry", "phoenix", "studylink", "trajectory", "vigil"],
        isHeadline: true
      },
      {
        id: "redis",
        name: "Redis",
        category: "Data & Persistence",
        articleStatus: "Article Planned",
        projectsUsedIn: ["foundry", "trajectory"]
      },
      {
        id: "mongodb",
        name: "MongoDB",
        category: "Data & Persistence",
        articleStatus: "No Dedicated Article Yet",
        projectsUsedIn: []
      },
      {
        id: "aws-s3",
        name: "AWS S3 / MinIO Object Storage",
        category: "Data & Persistence",
        articleStatus: "No Dedicated Article Yet",
        projectsUsedIn: ["trajectory"]
      }
    ]
  },
  {
    id: "systems-distributed",
    title: "Systems & Distributed Engineering",
    description: "Consistent hashing, virtual thread concurrency, in-memory cache design, and async task processing.",
    skills: [
      {
        id: "consistent-hashing",
        name: "Consistent Hashing & Virtual Nodes",
        category: "Systems & Distributed Engineering",
        experienceSlug: "consistent-hashing",
        articleStatus: "Article Published",
        projectsUsedIn: ["cairn", "shard"],
        isHeadline: true
      },
      {
        id: "virtual-threads",
        name: "JVM Virtual Threads",
        category: "Systems & Distributed Engineering",
        experienceSlug: "virtual-threads",
        articleStatus: "Article Published",
        projectsUsedIn: ["cairn", "conclave", "trajectory"],
        isHeadline: true
      },
      {
        id: "celery-async",
        name: "Celery & Background Task Queues",
        category: "Systems & Distributed Engineering",
        articleStatus: "No Dedicated Article Yet",
        projectsUsedIn: ["foundry"]
      }
    ]
  },
  {
    id: "testing-quality",
    title: "Testing, QA & Evaluation",
    description: "Unit, integration, E2E testing, and assertion-driven evaluation harnesses for agent verification.",
    skills: [
      {
        id: "agent-evaluation",
        name: "Agent Evaluation & Pytest Harnesses",
        category: "Testing, QA & Evaluation",
        experienceSlug: "agent-evaluation",
        articleStatus: "Article Published",
        projectsUsedIn: ["vigil"],
        isHeadline: true
      },
      {
        id: "playwright",
        name: "Playwright E2E Testing",
        category: "Testing, QA & Evaluation",
        articleStatus: "No Dedicated Article Yet",
        projectsUsedIn: ["conclave", "foundry"]
      },
      {
        id: "junit-mockito",
        name: "JUnit 5 & Mockito",
        category: "Testing, QA & Evaluation",
        articleStatus: "No Dedicated Article Yet",
        projectsUsedIn: ["cairn", "conclave", "trajectory"]
      }
    ]
  },
  {
    id: "security",
    title: "Security Engineering",
    description: "Application authentication, role-based access controls, and container sandbox isolation.",
    skills: [
      {
        id: "container-isolation",
        name: "Container Sandboxing & Isolation",
        category: "Security Engineering",
        experienceSlug: "container-isolation",
        articleStatus: "Article Published",
        projectsUsedIn: ["vigil"],
        isHeadline: true
      },
      {
        id: "jwt-auth",
        name: "JWT & OAuth2 Multi-Tenant Auth",
        category: "Security Engineering",
        articleStatus: "No Dedicated Article Yet",
        projectsUsedIn: ["trajectory", "conclave"]
      }
    ]
  },
  {
    id: "devops-infra",
    title: "DevOps, Cloud & Infrastructure",
    description: "Containerization, cloud VM provisioning, reverse proxy setup, and telemetry metrics.",
    skills: [
      {
        id: "docker",
        name: "Docker & Docker Compose",
        category: "DevOps, Cloud & Infrastructure",
        experienceSlug: "docker",
        articleStatus: "Article Published",
        projectsUsedIn: ["cairn", "conclave", "foundry", "phoenix", "shard", "trajectory", "vigil"],
        isHeadline: true
      },
      {
        id: "aws-cloud",
        name: "AWS (EC2, RDS, S3)",
        category: "DevOps, Cloud & Infrastructure",
        experienceSlug: "aws",
        articleStatus: "Article Published",
        projectsUsedIn: ["trajectory"],
        isHeadline: true
      },
      {
        id: "nginx-certbot",
        name: "Nginx & Certbot SSL",
        category: "DevOps, Cloud & Infrastructure",
        articleStatus: "No Dedicated Article Yet",
        projectsUsedIn: ["trajectory"]
      },
      {
        id: "prometheus-grafana",
        name: "Prometheus & Grafana Observability",
        category: "DevOps, Cloud & Infrastructure",
        articleStatus: "No Dedicated Article Yet",
        projectsUsedIn: ["cairn", "shard"]
      }
    ]
  }
];
