import { TECHNOLOGY_CATEGORIES, TechnologyItem } from "@/data/technologyInventory";
import { TIER1_CONTENT, TIER2_ARTICLES, Tier2ArticleMeta } from "@/data/technologyContent";

export interface UnifiedTechnologyArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  subcategory?: string;
  date: string; // ISO YYYY-MM-DD
  excerpt?: string;
  projectEvidence?: string[];
  tier: 1 | 2;
  content: string[];
  /** For Tier 2: the default parent article slug for back-navigation */
  defaultParent?: string;
}

/**
 * Deterministic mapping of slugs and dates for every technology in the portfolio.
 * Dates are arranged in a progressive, deterministic sequence matching catalog order.
 */
const TECHNOLOGY_METADATA: Record<string, { slug: string; date: string; excerpt?: string }> = {
  // Languages
  "java": { slug: "java", date: "2026-08-25", excerpt: "Hands-on engineering experience using Java for enterprise microservices, distributed caches, and multi-agent backend runtimes." },
  "python": { slug: "python", date: "2026-08-24", excerpt: "Extensive application of Python for AI agent frameworks, RAG retrieval engines, distributed caches, and FastAPI/Django backends." },
  "typescript": { slug: "typescript", date: "2026-08-23", excerpt: "Applied TypeScript for type-safe full-stack web applications, React component systems, and client-side chess analysis runtimes." },
  "sql": { slug: "sql", date: "2026-08-22", excerpt: "Relational data modeling, indexing strategies, analytical queries, and schema migration engineering across production databases." },

  // Backend & API Engineering
  "spring-boot": { slug: "spring-boot", date: "2026-08-21", excerpt: "Practical experience building enterprise REST services, OAuth2 security layers, WebSocket brokers, and Spring AI pipelines." },
  "hibernate": { slug: "hibernate", date: "2026-08-20", excerpt: "Object-Relational Mapping, entity relationship lifecycle, second-level caching, and query optimization in Java enterprise systems." },
  "spring-security": { slug: "spring-security", date: "2026-08-19", excerpt: "Security filter chain configuration, JWT authentication, OAuth2 resource server setup, and role-based authorization rules." },
  "django": { slug: "django", date: "2026-08-18", excerpt: "Full-stack web application development, ORM query tuning, REST API design, and asynchronous task integration in Python." },
  "fastapi": { slug: "fastapi", date: "2026-08-17", excerpt: "High-performance asynchronous Python APIs, Pydantic type validation, OpenAPI documentation generation, and real-time streaming." },
  "websockets": { slug: "websockets", date: "2026-08-16", excerpt: "Real-time bi-directional communication, stateful WebSocket connection management, and STOMP message broker coordination." },

  // Frontend Engineering
  "react": { slug: "react", date: "2026-08-15", excerpt: "Modern component-driven UI architecture, state management strategies, custom hooks, and performance optimization techniques." },
  "vite": { slug: "vite", date: "2026-08-14", excerpt: "Fast ES module-based frontend build tooling, HMR developer workflow, and production bundle optimization." },
  "tailwind-css": { slug: "tailwind-css", date: "2026-08-13", excerpt: "Utility-first CSS architecture, responsive design system design, custom design tokens, and dark mode theme implementations." },
  "webassembly": { slug: "webassembly", date: "2026-08-12", excerpt: "Low-level compiled browser compute, high-performance module integration, and worker-based message communication." },

  // AI, LLM & Agent Systems
  "langgraph": { slug: "langgraph", date: "2026-08-11", excerpt: "Building stateful multi-agent orchestrations, cyclic graph workflows, human-in-the-loop checkpoints, and agent evaluation." },
  "spring-ai": { slug: "spring-ai", date: "2026-08-10", excerpt: "Java AI integration, prompt management abstractions, structured model output extraction, and RAG retrieval pipelines." },
  "ollama": { slug: "ollama", date: "2026-08-09", excerpt: "Local LLM inference, quantized model serving, privacy-focused AI workflows, and API-compatible model integration." },
  "google-gemini-api": { slug: "google-gemini-api", date: "2026-08-08", excerpt: "Multimodal AI capabilities, structured JSON output extraction, large context window management, and rate-limit handling." },
  "groq-api": { slug: "groq-api", date: "2026-08-07", excerpt: "Low-latency LPU inference integration, high-throughput agent responses, and fallback LLM routing." },
  "multi-agent-systems": { slug: "multi-agent-systems", date: "2026-08-06", excerpt: "Architecting collaborative multi-agent topologies, specialized agent role delegation, consensus mechanisms, and state routing." },
  "retrieval-augmented-generation": { slug: "retrieval-augmented-generation", date: "2026-08-05", excerpt: "Grounded Q&A systems, hybrid vector-keyword retrieval pipelines, context re-ranking, and hallucination reduction." },
  "pgvector": { slug: "pgvector", date: "2026-08-04", excerpt: "PostgreSQL vector similarity search, HNSW indexing, embedding storage, and hybrid relational-vector queries." },

  // Data & Persistence
  "postgresql": { slug: "postgresql", date: "2026-08-03", excerpt: "Production database administration, schema design, JSONB querying, indexing strategies, and multi-tenant data isolation." },
  "mysql": { slug: "mysql", date: "2026-08-02", excerpt: "Relational schema design, transaction management, query optimization, and storage engine configuration." },
  "mongodb": { slug: "mongodb", date: "2026-08-01", excerpt: "Document store data modeling, aggregation pipeline engineering, indexing, and persistent workflow state." },
  "sqlite": { slug: "sqlite", date: "2026-07-31", excerpt: "Embedded local relational persistence, zero-configuration database engines, and lightweight state store testing." },
  "redis": { slug: "redis", date: "2026-07-30", excerpt: "In-memory caching architectures, key eviction strategies, Pub/Sub event messaging, and distributed locking." },
  "flyway": { slug: "flyway", date: "2026-07-29", excerpt: "Version-controlled database migrations, reproducible schema evolutions, and automated CI/CD migration deployment." },
  "minio": { slug: "minio", date: "2026-07-28", excerpt: "S3-compatible object storage infrastructure, local artifact storage, bucket management, and media hosting." },

  // Distributed Systems & Cache Engineering
  "consistent-hashing": { slug: "consistent-hashing", date: "2026-07-27", excerpt: "Custom implementation of Murmur3 consistent hash rings, virtual node replication, and deterministic cluster routing." },
  "sharding": { slug: "sharding", date: "2026-07-26", excerpt: "Horizontal data partitioning, shard key selection strategies, and multi-node query aggregation." },
  "distributed-caching": { slug: "distributed-caching", date: "2026-07-25", excerpt: "Multi-tier cache design, TTL expiration policies, cache invalidation strategies, and write-through/write-back patterns." },
  "virtual-threads": { slug: "virtual-threads", date: "2026-07-24", excerpt: "Java 21 Project Loom concurrency, high-throughput I/O thread scaling, and thread-per-request execution models." },
  "celery": { slug: "celery", date: "2026-07-23", excerpt: "Asynchronous task queue processing, background worker distribution, task scheduling, and Redis broker integration." },

  // Security Engineering
  "jwt-authentication": { slug: "jwt-authentication", date: "2026-07-22", excerpt: "Stateless API authentication, cryptographic token signing, refresh token rotation, and claims-based authorization." },
  "oauth2": { slug: "oauth2", date: "2026-07-21", excerpt: "Delegated authorization protocols, OAuth2 authorization code flows, identity provider integration, and scope management." },
  "role-based-access-control": { slug: "role-based-access-control", date: "2026-07-20", excerpt: "Granular user permission modeling, role hierarchy structures, and security policy enforcement across API endpoints." },

  // Testing, QA & Evaluation
  "pytest": { slug: "pytest", date: "2026-07-19", excerpt: "Python unit and integration testing harness, custom fixture design, parameterization, and assertion reporting." },
  "playwright": { slug: "playwright", date: "2026-07-18", excerpt: "End-to-end browser automation, cross-browser UI test execution, visual regression testing, and network mocking." },
  "vitest": { slug: "vitest", date: "2026-07-17", excerpt: "Fast Vite-native unit testing, component rendering tests, mock functions, and code coverage analysis." },
  "junit-5": { slug: "junit-5", date: "2026-07-16", excerpt: "Modern Java unit testing framework, nested tests, parameterized executions, and dynamic test factory methods." },
  "mockito": { slug: "mockito", date: "2026-07-15", excerpt: "Java object mocking, method invocation verification, stubbing behavior, and isolated component testing." },

  // DevOps & Infrastructure
  "docker": { slug: "docker", date: "2026-07-14", excerpt: "Containerization, multi-stage Dockerfile builds, dev environment parity, resource constraints, and container orchestration." },
  "aws": { slug: "aws", date: "2026-07-13", excerpt: "Cloud infrastructure deployment using EC2 instances, S3 storage buckets, RDS databases, and IAM security policies." },
  "vercel": { slug: "vercel", date: "2026-07-12", excerpt: "Serverless web application deployment, continuous deployment pipelines, edge network hosting, and environment variable security." },
  "nginx": { slug: "nginx", date: "2026-07-11", excerpt: "Reverse proxy configuration, TLS/SSL termination with Certbot, load balancing, and static asset HTTP caching." },
  "ci-cd": { slug: "ci-cd", date: "2026-07-10", excerpt: "Automated build pipelines, continuous integration workflows, automated testing runners, and blue-green deployment strategies." },
};

/**
 * Gets a flattened list of all Tier 1 technology articles in catalog display order.
 * These are the articles shown on the Technology index page with prev/next navigation.
 */
export function getAllTechnologyArticles(): UnifiedTechnologyArticle[] {
  const articles: UnifiedTechnologyArticle[] = [];

  for (const category of TECHNOLOGY_CATEGORIES) {
    for (const sub of category.subcategories) {
      for (const item of sub.items) {
        const slug = item.articleSlug || item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
        const meta = TECHNOLOGY_METADATA[slug] || {
          slug,
          date: "2026-08-01",
        };

        const content = TIER1_CONTENT[slug] || [];

        articles.push({
          id: slug,
          slug,
          title: item.name,
          category: category.title,
          subcategory: sub.title || undefined,
          date: meta.date,
          excerpt: meta.excerpt,
          projectEvidence: item.projectEvidence,
          tier: 1,
          content,
        });
      }
    }
  }

  return articles;
}

/**
 * Retrieves a single technology article by slug — searches both Tier 1 and Tier 2.
 */
export function getTechnologyArticleBySlug(slug: string): UnifiedTechnologyArticle | undefined {
  // Check Tier 1 first
  const all = getAllTechnologyArticles();
  const tier1 = all.find((art) => art.slug === slug);
  if (tier1) return tier1;

  // Check Tier 2
  const tier2 = TIER2_ARTICLES.find((a) => a.slug === slug);
  if (tier2) {
    return {
      id: tier2.slug,
      slug: tier2.slug,
      title: tier2.title,
      category: tier2.category,
      date: tier2.date,
      excerpt: tier2.excerpt,
      tier: 2,
      content: tier2.content,
      defaultParent: tier2.defaultParent,
    };
  }

  return undefined;
}

/**
 * Returns all slugs (Tier 1 + Tier 2) for static route generation.
 */
export function getAllArticleSlugs(): string[] {
  const tier1Slugs = getAllTechnologyArticles().map((a) => a.slug);
  const tier2Slugs = TIER2_ARTICLES.map((a) => a.slug);
  return [...tier1Slugs, ...tier2Slugs];
}

/**
 * Computes previous and next technology navigation following catalog order.
 * ONLY operates on Tier 1 articles — Tier 2 articles are excluded from this sequence.
 */
export function getTechnologyNavigation(slug: string) {
  const all = getAllTechnologyArticles(); // Tier 1 only
  const currentIndex = all.findIndex((art) => art.slug === slug);

  if (currentIndex === -1) {
    return { prevArticle: null, nextArticle: null };
  }

  // Next technology (towards top of catalog / Java)
  const nextArticle =
    currentIndex > 0
      ? { slug: all[currentIndex - 1].slug, title: all[currentIndex - 1].title }
      : null;

  // Previous technology (towards bottom of catalog / CI/CD)
  const prevArticle =
    currentIndex < all.length - 1
      ? { slug: all[currentIndex + 1].slug, title: all[currentIndex + 1].title }
      : null;

  return { prevArticle, nextArticle };
}

/**
 * Gets Tier 2 back-navigation. Returns a link to the referring article or the default parent.
 */
export function getTier2Navigation(slug: string, referrerSlug?: string): { backLink: { slug: string; title: string } | null } {
  const tier2 = TIER2_ARTICLES.find((a) => a.slug === slug);
  if (!tier2) return { backLink: null };

  // If a referrer is provided and valid, use it
  if (referrerSlug) {
    const referrerArticle = getTechnologyArticleBySlug(referrerSlug);
    if (referrerArticle) {
      return { backLink: { slug: referrerArticle.slug, title: referrerArticle.title } };
    }
  }

  // Fall back to default parent
  const parentArticle = getTechnologyArticleBySlug(tier2.defaultParent);
  if (parentArticle) {
    return { backLink: { slug: parentArticle.slug, title: parentArticle.title } };
  }

  return { backLink: null };
}
