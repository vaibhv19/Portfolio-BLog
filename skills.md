# Portfolio Website — Skills Inventory

## Purpose

This document contains the final evidence-based Skills inventory for the portfolio website.

The inventory was created through a repository-by-repository extraction process across the following projects:

- Cairn
- Check-Mate-Analyse
- Conclave
- Foundry
- Phoenix
- Shard
- StudyLink
- Trajectory
- Vigil

The inventory records technologies, tools, frameworks, protocols, and engineering capabilities demonstrated through actual project work.

This is not a resume-style skills list.

The goal is not to make the list artificially short.

The goal is to accurately represent the engineering work behind the portfolio.

---

# 1. Skills Architecture

The Skills content system follows a conceptual hierarchy:

```text
Level 1
Skills
    ↓
Level 2
Technology / Engineering Concept
    ↓
Level 3
Learning / Experience Article
    ↓
Relevant Projects
```

The broader relationship is:

```text
Projects ↔ Skills ↔ Blogs
```

## Projects

What was built.

## Skills

What was used and applied.

## Articles

What was learned while building.

Not every skill requires a dedicated article.

A technology or concept can appear in the Skills inventory without having an article.

When there is meaningful experience to discuss, the technology or engineering concept may link to a dedicated article within the broader Blogs content system.

---

# 2. Languages

- Java
- Python
- TypeScript
- JavaScript
- SQL
- HTML
- CSS

---

# 3. Backend & API Engineering

## Java Ecosystem

- Spring Boot
- Spring Web / Spring MVC
- Spring Data JPA
- Hibernate
- Spring Security
- Spring AI
- Spring Scheduler
- SpringDoc OpenAPI
- Swagger / Swagger UI

## Python Ecosystem

- Django
- Django REST Framework
- FastAPI
- SQLAlchemy
- Daphne
- Uvicorn

## API & Application Development

- REST APIs
- WebSockets
- STOMP
- JWT Authentication
- OAuth2
- Google OAuth
- GitHub OAuth
- API Key Authentication
- OpenAPI

---

# 4. Frontend Engineering

## Frameworks

- React
- Next.js
- Vite

## UI & Styling

- Tailwind CSS
- Shadcn UI
- Radix UI
- Framer Motion
- Recharts
- Lucide React
- react-chessboard
- react-markdown
- react-pdf

## State & Data Management

- Zustand
- TanStack Query
- React Context
- useReducer
- React Hook Form
- Zod
- Axios

---

# 5. AI, LLM & Agent Systems

## AI Frameworks & Platforms

- LangGraph
- Spring AI
- Ollama
- Google Gemini API
- Groq API

## Agent Systems

- Multi-Agent Systems
- Agent Orchestration
- Multi-Model Orchestration
- ReAct-style Agent Workflows
- Agent Evaluation
- Agent State Management
- Stateful AI Workflows
- Provider-Agnostic Model Integration
- Context Management

## AI Application Engineering

- LLM Integration
- Prompt Engineering
- Structured Data Extraction
- AI Fallback Handling
- Agent Guardrails
- Consensus Resolution
- Context Compression
- Local LLM Inference

---

# 6. RAG & Retrieval Systems

## Core Retrieval

- Retrieval-Augmented Generation
- Hybrid RAG
- Semantic Search
- Vector Search
- Similarity Search
- Keyword / Sparse Retrieval
- BM25
- Hybrid Retrieval
- Reranking

## Vector & Embedding Technologies

- pgvector
- SentenceTransformers
- Vector Embeddings
- Cosine Similarity Search

## Retrieval Engineering

- Hybrid Score Fusion
- Cross-Encoder Reranking
- Query Rewriting
- Confidence-Based Fallback
- Self-Healing Retrieval
- Grounded Q&A
- Citation-Based Retrieval
- Retrieval Traceability
- RAG Observability

---

# 7. Data & Persistence

## Databases

- PostgreSQL
- MySQL
- MongoDB
- SQLite
- Redis

## Data Infrastructure

- pgvector
- JSONB
- Flyway
- Database Migrations
- Persistent Workflow State
- Object Storage

## Storage

- AWS S3
- Supabase Storage
- MinIO
- S3-Compatible Storage

---

# 8. Distributed Systems & Cache Engineering

## Distributed Systems

- Consistent Hashing
- Murmur3 Hashing
- Virtual Nodes
- Sharding
- Cluster Routing
- Multi-Node Systems
- Distributed Caching

## Cache Design

- In-Memory Caching
- LRU Eviction
- LFU Eviction
- TTL Expiration
- Active Expiration
- Passive Expiration
- Cache Invalidation
- Write-Through Caching
- Write-Back Caching

## System Design

- Deterministic Routing
- High-Concurrency System Design
- Asynchronous Cluster Coordination
- Multi-Instance Deployment

---

# 9. Concurrency & Asynchronous Systems

## Java Concurrency

- Virtual Threads
- ConcurrentHashMap
- ReentrantReadWriteLock
- ScheduledExecutorService
- LongAdder
- LinkedBlockingQueue

## Python Concurrency

- Threading
- Thread Synchronization
- threading.Lock
- threading.Thread
- queue.Queue
- GIL-Aware Concurrency
- Background Daemon Threads

## Asynchronous Systems

- Celery
- Background Workers
- Redis Pub/Sub
- Asynchronous Task Processing
- WebSocket Streaming
- Asynchronous Processing
- Worker-Based Processing
- Event-Driven Coordination

## Concurrency Engineering

- Thread Safety
- Lock Striping
- Race-Condition Prevention
- Concurrent Read/Write Systems
- Workload Isolation
- Pause / Resume Coordination
- Transactional Coordination

---

# 10. Browser Compute & Web Performance

- Web Workers
- SharedArrayBuffer
- WebAssembly
- COOP
- COEP
- Browser Multithreading
- CPU-Heavy Workload Isolation
- Worker-Based Message Communication

---

# 11. Security Engineering

## Authentication & Authorization

- Spring Security
- JWT
- OAuth2
- Role-Based Access Control
- Google OAuth
- GitHub OAuth

## Application Security

- Multi-Tenant Isolation
- Secure API Design
- Workspace / Project Isolation
- Pessimistic Locking
- Transaction Safety

## Sandbox Security

- Container Isolation
- Ephemeral Execution
- Network Isolation
- Resource Constraints
- Capability Dropping
- Privilege Restriction
- Hardened Container Images

---

# 12. Testing, QA & Evaluation

## Testing Frameworks

- Pytest
- pytest-django
- Playwright
- Vitest
- JUnit 5
- Mockito

## Testing Practices

- Unit Testing
- Integration Testing
- End-to-End Testing
- Component Testing
- API Testing
- Concurrency Stress Testing
- State-Store Testing

## AI & Agent Evaluation

- Deterministic Evaluation
- State-Based Evaluation
- Assertion-Driven Evaluation
- Sandbox-State Verification
- Agent Evaluation Harnesses
- Custom Pytest Plugins

---

# 13. DevOps, Infrastructure & Deployment

## Containers

- Docker
- Docker Compose
- Docker SDK
- docker-py
- Ephemeral Container Provisioning
- Container Lifecycle Management
- Resource-Limited Containers

## Cloud

- AWS
- AWS EC2
- AWS RDS
- AWS S3
- Vercel

## Deployment & Operations

- Nginx
- Certbot
- Let's Encrypt
- GitHub Actions
- Self-Hosted GitHub Actions Runner
- CI/CD
- Docker-Based Development Environments

## Infrastructure Principles

- Development Environment Parity
- Local Multi-Instance Deployment
- Production Full-Stack Deployment

---

# 14. Observability

- Micrometer
- Prometheus
- prometheus-client
- Grafana
- Spring Boot Actuator
- Custom Metrics
- Latency Percentiles
- p50
- p95
- p99
- Application Monitoring
- System Observability

---

# 15. CLI & Developer Tooling

- Maven
- Poetry
- npm
- Typer
- Adminer

---

# 16. Domain & Integration Technologies

## Chess Systems

- chess.js
- Stockfish
- UCI
- PGN
- FEN

## AI Model Integration

The following models have been used as part of project implementations but are treated primarily as project evidence rather than standalone headline skills:

- Llama 3
- Mistral
- Gemma
- all-MiniLM-L6-v2
- gemini-1.5-flash
- text-embedding-004

---

# 17. Engineering Capabilities

The following represent broader engineering capabilities evidenced across projects.

They are not necessarily equivalent to individual technologies.

## System Design

- System Architecture
- Distributed System Design
- High-Concurrency System Design
- Cache Architecture
- Full-Stack Application Architecture
- Real-Time System Design

## AI Systems

- Multi-Agent Architecture
- AI Agent Evaluation
- Agent Orchestration
- RAG System Design
- Hybrid Retrieval Architecture
- Stateful AI Workflows
- Explainable AI Pipelines

## Data & Reliability

- Transaction-Safe State Management
- Pessimistic Locking
- Database-Backed State Machines
- Race-Condition Prevention
- Failure Handling
- Fallback Architecture

## Runtime & Concurrency

- JVM Concurrency
- Python Concurrency
- Browser Multithreading
- Asynchronous Processing
- Worker-Based Architectures
- Thread Safety

## Quality Engineering

- Deterministic Testing
- State-Based Testing
- Concurrency Testing
- Integration Testing
- End-to-End Testing
- Verification-Driven Development

## Security & Isolation

- Application Security
- Authentication Architecture
- Secure Multi-Tenancy
- Container Sandboxing
- Isolated Execution

---

# 18. Technology-to-Project Evidence

## Java

- Cairn
- Conclave
- Trajectory

## Python

- Foundry
- Phoenix
- Shard
- StudyLink
- Vigil

## Spring Boot

- Cairn
- Conclave
- Phoenix
- Trajectory

## Django

- Foundry
- Shard
- StudyLink

## FastAPI

- Phoenix
- Vigil

## React

- Check-Mate-Analyse
- Conclave
- Foundry
- Phoenix
- StudyLink
- Trajectory

## LangGraph

- Foundry
- Vigil

## Spring AI

- Conclave
- Trajectory

## PostgreSQL

- Conclave
- Foundry
- Phoenix
- StudyLink
- Trajectory
- Vigil

## Docker

- Cairn
- Phoenix
- Shard
- Trajectory
- Vigil

## Docker Compose

- Conclave
- Foundry
- Phoenix
- Trajectory
- Vigil

## Redis

- Foundry
- Trajectory

## pgvector

- Phoenix
- StudyLink

## Zustand

- Conclave
- Foundry
- Phoenix
- StudyLink
- Trajectory

## Playwright

- Conclave
- Foundry

## Prometheus

- Cairn
- Shard

## Grafana

- Cairn
- Shard

## Consistent Hashing

- Cairn
- Shard

## WebSockets

- Conclave
- Foundry

## Virtual Threads

- Conclave
- Trajectory

---

# 19. Public Portfolio Presentation Principles

The portfolio must not present this document as a raw technology dump.

The Skills page should:

- group related technologies clearly
- distinguish technologies from broader engineering concepts
- avoid proficiency bars
- avoid percentages
- avoid self-assigned ratings
- allow the evidence behind a skill to speak through projects
- connect technologies to real projects
- connect meaningful technologies and concepts to learning articles
- remain broader than the resume

The intended interaction is:

```text
Skill
  ↓
Technology / Engineering Concept
  ↓
Article
  ↓
Where I Used It
  ↓
Relevant Projects
```

A subtle hover or focus interaction may communicate that a technology is clickable.

Possible wording:

> Click to read my experience with it.

No permanent "Read more" button is required beside every skill.

---

# 20. Article Status

The Skills inventory and article inventory are separate.

Each meaningful technology or engineering concept may have one of the following statuses:

- Article Published
- Article Planned
- No Dedicated Article Yet

The absence of an article does not reduce the validity of the skill.

Skills are included because they are evidenced by real work.

Articles are created when there is meaningful experience, learning, engineering decisions, or challenges worth documenting.

---

# 21. Inventory Maintenance Rules

When updating this document:

1. Add technologies based on real project evidence.
2. Do not add a technology merely because it is commonly associated with another technology.
3. Do not infer TypeScript from React.
4. Do not treat every dependency, API, class, function, or implementation detail as a public skill.
5. Distinguish technologies from frameworks, tools, protocols, models, and engineering concepts.
6. Preserve project evidence for major technologies.
7. New projects should go through the same extraction process before their skills are merged.
8. The portfolio inventory may be broader than the resume.
9. Project work remains the primary evidence of technical capability.
10. Keep the document current as engineering experience grows.

---

# 22. Inventory Status

```text
Repository-by-repository extraction: COMPLETE

Projects reviewed:
✓ Cairn
✓ Check-Mate-Analyse
✓ Conclave
✓ Foundry
✓ Phoenix
✓ Shard
✓ StudyLink
✓ Trajectory
✓ Vigil

Master technology inventory: COMPLETE
Skills taxonomy: COMPLETE
Project-to-skill evidence mapping: INITIAL VERSION COMPLETE
Article inventory: TO BE DEVELOPED
```
