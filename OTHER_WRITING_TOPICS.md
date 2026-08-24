# Portfolio Website — OTHER WRITING TOPICS

## Purpose

This document contains the initial set of regular Writing topics identified through comparison and reflection across portfolio projects.

These are part of the **Writing** content system.

They are not part of:

```text
My Experience With…
```

The topics are intended to produce cross-project articles that explore broader engineering lessons, decisions, comparisons, and evolution.

---

# 1. What I Learned From Building the Same Distributed Cache in Java and Python

## Projects

- Cairn
- Shard

## Core Comparison

Both projects explore the same broad distributed caching problem while using different implementation languages and ecosystems.

```text
Shard
Python
   ↕
Same Core Problem
   ↕
Cairn
Java
```

## Possible Discussion

- why both projects were built
- what remained conceptually identical
- what changed between Java and Python
- concurrency differences
- data structures and performance considerations
- consistent hashing
- ecosystem differences
- development experience
- testing differences
- what was surprising
- when one approach may be preferable

---

# 2. Building Multi-Agent Systems Twice: From Context Unification to Agent Evaluation

## Projects

- Conclave
- Vigil

## Core Comparison

Both projects are centered around AI agents but approach the problem from different directions.

Conclave focuses on:

- agent orchestration
- shared context
- multi-model coordination

Vigil focuses on:

- agent evaluation
- vulnerability testing
- controlled verification
- deterministic boundaries

## Possible Discussion

- what changes when the goal moves from orchestrating agents to evaluating them
- shared context versus controlled evaluation state
- agent coordination
- verification
- limitations
- what should and should not be claimed about agent safety

---

# 3. Two Ways of Making AI Systems Less Black-Box

## Projects

- Phoenix
- Conclave

## Core Comparison

Both projects address the difficulty of understanding AI system behavior.

Phoenix focuses on:

- retrieval traces
- fallback behavior
- reranking
- query rewriting
- observable retrieval decisions

Conclave focuses on:

- canonical context
- context translation
- provider-specific runtime adaptation

## Possible Discussion

- why AI systems need more than outputs
- making internal decisions inspectable
- context traceability
- retrieval traceability
- provider differences
- debugging AI applications

---

# 4. Local-First AI: Why I Kept the Intelligence Close to the Application

## Projects

- Conclave
- Phoenix
- Check-Mate-Analyse

## Core Comparison

These projects reduce dependence on a conventional remote-only compute model in different ways.

Conclave:

- local Ollama-based model usage

Phoenix:

- local retrieval and vector infrastructure

Check-Mate-Analyse:

- browser-side Stockfish execution
- WebAssembly
- Web Workers

## Possible Discussion

- local versus remote compute
- privacy
- latency
- infrastructure trade-offs
- browser compute
- local model inference
- what "local-first" means in different systems

---

# 5. What Changes When the AI Stops Being a Single API Call

## Projects

- Trajectory
- Conclave
- Phoenix

## Core Comparison

These projects represent increasingly complex forms of AI integration.

Trajectory:

- AI-assisted application features

Conclave:

- multi-provider and multi-agent orchestration

Phoenix:

- hybrid retrieval
- reranking
- query rewriting
- self-correction
- separate AI services

## Possible Discussion

- the difference between calling a model and building an AI system
- orchestration
- state
- retrieval
- fallback
- observability
- evaluation
- failure handling

---

# 6. When “The Model Answered” Isn’t Enough: Designing for Failure

## Projects

- Phoenix
- Vigil

## Core Comparison

Phoenix addresses weak retrieval and uncertain answers through:

- query rewriting
- reranking
- clarification
- fallback handling

Vigil focuses on:

- objective evaluation
- deterministic testing boundaries
- controlled verification
- avoiding exaggerated safety claims

## Possible Discussion

- why a model response is not automatically a successful system response
- uncertainty
- fallback design
- verification
- evaluation
- failure boundaries
- honest system claims

---

# 7. The Evolution of My Real-Time Architecture

## Projects

- Conclave
- Foundry

## Core Comparison

Both projects involve real-time interaction but distribute complexity differently.

Possible areas of comparison:

- WebSocket transport
- shared state
- AI orchestration
- persistence
- frontend synchronization
- streaming
- runtime coordination

## Possible Discussion

- where real-time complexity actually lives
- transport versus application state
- orchestration versus persistence
- frontend state management
- streaming architecture
- lessons learned from different implementations

---

# 8. From Coursework to Systems Engineering: How My Projects Became More Serious

## Project Progression

- Check-Mate-Analyse
- Trajectory
- Conclave
- Phoenix
- Vigil

## Core Story

A reflective article about the evolution of project scope and engineering maturity.

The progression may include:

```text
Complex Client-Side Application
        ↓
Full-Stack Application
        ↓
Production Deployment
        ↓
Multi-Agent Systems
        ↓
AI Retrieval Systems
        ↓
Agent Evaluation and Verification
```

## Possible Discussion

- how project scope evolved
- architecture becoming more important
- increased testing discipline
- deployment complexity
- observability
- isolation
- reproducibility
- verification

---

# 9. Why Some of My Projects Need More Than One Backend

## Projects

- Phoenix
- Conclave
- Trajectory

## Core Comparison

Phoenix deliberately separates platform responsibilities and AI responsibilities across different backend technologies.

Conclave and Trajectory provide contrasting Spring-centered architectures.

## Possible Discussion

- when a single backend is enough
- when polyglot architecture becomes justified
- AI service separation
- language strengths
- operational complexity
- deployment complexity
- avoiding unnecessary microservices

---

# 10. What Building for Production Changed About How I Build

## Project Context

- Trajectory
- Later projects

## Core Story

A reflective article about how production deployment and operational concerns changed the development process.

Possible areas:

- AWS deployment
- Docker
- Docker Compose
- Nginx
- CI/CD
- reproducibility
- isolation
- testing
- observability
- explicit failure handling

## Possible Discussion

- how deployment changed architecture decisions
- why reproducibility matters
- why testing became more systematic
- why observability matters
- why environment setup must be documented
- how engineering workflow evolved

---

# Strongest Initial Writing Topics

The strongest initial five topics are:

1. What I Learned From Building the Same Distributed Cache in Java and Python
2. Building Multi-Agent Systems Twice: From Context Unification to Agent Evaluation
3. Two Ways of Making AI Systems Less Black-Box
4. When “The Model Answered” Isn’t Enough: Designing for Failure
5. What Building for Production Changed About How I Build

These are especially strong because they are comparative and reflective.

They use multiple projects as evidence for broader engineering conclusions rather than simply repeating project documentation.

---

# Content System Placement

All topics in this document belong to:

```text
Writing
   ↓
Regular Writing Archive
   ↓
Individual Blog Article
   ↓
Comments
```

They do not belong to:

```text
My Experience With…
```

The distinction remains:

```text
Writing
    ↓
Broader questions about projects,
comparisons, decisions, experiments,
and engineering evolution.


My Experience With…
    ↓
Personal practical experience with
a specific technology or engineering concept.
```

---

# Status

```text
Initial cross-project Writing topics: 10
Strongest initial topics identified: 5
Content system: Writing
Archive inclusion: YES
Home Writing preview eligibility: YES
My Experience With… inclusion: NO
```
