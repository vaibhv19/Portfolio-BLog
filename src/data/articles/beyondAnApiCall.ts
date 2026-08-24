import { WritingArticle } from "../writing";

export const articleBeyondAnApiCall: WritingArticle = {
  slug: "what-changes-when-the-ai-stops-being-a-single-api-call",
  title: "Beyond an API Call",
  date: "2026-07-28",
  excerpt: "What Changes When the AI Stops Being a Single API Call",
  readingTime: "10 min read",
  content: [
    "A common entry point to AI software development is wrapping an HTTP POST call to an LLM API inside an existing web application. You take user input, format a prompt string, POST it to an API endpoint, and render the text response on a frontend page.",

    "However, moving from AI-assisted features to true AI software systems changes every architectural layer. As system requirements evolve from simple text completion to multi-provider orchestration ([Conclave](https://github.com/vaibhv19/conclave)) and transparent hybrid retrieval ([Phoenix](https://github.com/vaibhv19/Phoenix)), the model stops being the application—it becomes a single probabilistic sub-component inside a larger deterministic software architecture.",

    "## 01. State Management & Context Budget Constraints",

    "In a single API call, state is ephemeral: you send a prompt, get a response, and discard the context. When building AI systems, state management becomes an explicit engineering constraint.",

    "- Context Window Budgets: Prompts cannot grow indefinitely. Systems must implement sliding window context retention, summary compaction, or explicit context pruning.",
    "- Canonical State Data Models: When coordinating work across multiple model providers, context state must be stored in a provider-neutral canonical schema and dynamically translated for specific API formats.",

    "## 02. Beyond Raw Vector Search: Hybrid Retrieval & Reranking",

    "Early RAG implementations relied exclusively on raw dense vector embeddings. But in production technical documentation systems like [Phoenix](https://github.com/vaibhv19/Phoenix), raw vector search frequently fails on exact keyword queries (such as specific error codes, exact class names, or function identifiers).",

    "Building a real retrieval system requires combining multiple complementary search paradigms:",

    "1. Sparse BM25 Keyword Search: Ensuring exact string matches and technical identifiers are indexed reliably.",
    "2. Dense Embedding Search: Capturing semantic similarity across conceptual document sections.",
    "3. Cross-Encoder Reranking: Running top candidate results through a specialized reranker model to evaluate true relevance before constructing the final prompt context.",

    "## 03. Explicit Failure Handling & Fallback Routing",

    "When an API call is treated as a simple feature, error handling consists of wrapping the network request in a try/catch block. In AI systems engineering, model failure is expected and must be handled gracefully within system control flow:",

    "- Query Rewriting Traces: If initial retrieval confidence scores fall below a minimum threshold, the system automatically reformulates the search query and retries.",
    "- Provider Fallback Routing: If a primary local Ollama model fails or times out, the system routes the context payload to a secondary fallback provider.",
    "- Clarification Prompts: When document retrieval uncertainty remains high, the system prompts the user for clarification rather than passing low-confidence context to the LLM.",

    "## 04. Observability & Telemetry Harnesses",

    "When AI stops being a single API call, observability becomes non-negotiable. Every retrieval score, vector distance, prompt mutation, and tool invocation must emit inspectable telemetry logs.",

    "Building AI software systems ultimately means surrounding probabilistic model behavior with deterministic orchestration, multi-stage retrieval pipelines, strict error boundaries, and observable telemetry harnesses."
  ]
};
