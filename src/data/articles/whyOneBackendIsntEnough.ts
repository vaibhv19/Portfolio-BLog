import { WritingArticle } from "../writing";

export const articleWhyOneBackendIsntEnough: WritingArticle = {
  slug: "why-some-of-my-projects-need-more-than-one-backend",
  title: "Why One Backend Isn't Enough",
  date: "2026-04-28",
  excerpt: "Why Some of My Projects Need More Than One Backend",
  readingTime: "9 min read",
  content: [
    "Monolithic single-backend architectures built in Spring Boot or FastAPI provide excellent architectural cohesion for standard CRUD workflows and relational data management. Having a single codebase, unified ORM mapping, and straightforward deployment scripts should always be the default starting point for new applications.",

    "However, as system requirements evolved across [Phoenix](https://github.com/vaibhv19/Phoenix) and [Conclave](https://github.com/vaibhv19/conclave), separating platform operations from specialized AI retrieval and model inference across polyglot microservices became necessary.",

    "## 1 / The Case for Polyglot Architecture",

    "In [Phoenix](https://github.com/vaibhv19/Phoenix) and [Conclave](https://github.com/vaibhv19/conclave), different backend services had fundamentally different runtime requirements:",

    "- Platform Services (Java / Spring Boot): Handling user authentication, high-concurrency relational data access, transaction management, and connection pool scaling.",
    "- AI & Vector Services (Python / FastAPI): Leveraging Python's Machine Learning ecosystem for sparse BM25 indexing, dense vector embedding generation, Cross-Encoder reranking, and local Ollama model orchestration.",

    "Trying to force heavy machine learning libraries (PyTorch, Transformers, HuggingFace tools) into a Java JVM backend—or forcing high-concurrency multithreaded relational transactions into a single-threaded Python process—creates massive architectural friction.",

    "By splitting specialized AI processing into a dedicated FastAPI microservice, each backend service could leverage its runtime ecosystem's core strengths.",

    "## 2 / Operational Costs & Complexity",

    "It is crucial to recognize that multi-backend architecture is not free. Splitting services introduces explicit operational overhead:",

    "- Network Latency: Inter-service HTTP/REST or gRPC communication adds latency overhead compared to in-memory method calls.",
    "- Container Orchestration Complexity: Managing multiple Dockerfiles, Compose networks, environment variable secrets, and health check dependencies.",
    "- Deployment Maintenance: CI/CD pipelines must build, test, and deploy multiple container images independently.",

    "## 03. Justifying Service Boundaries",

    "Premature microservice splitting is a common engineering antipattern. Multiple backends should never be introduced because microservices are fashionable.",

    "In my work, multi-backend architecture is only justified when distinct operational runtime requirements—such as specialized ML/GPU inference vs OS virtual thread concurrency—demand distinct service boundaries. If a single backend can meet system contracts cleanly, keep it monolithic."
  ]
};
