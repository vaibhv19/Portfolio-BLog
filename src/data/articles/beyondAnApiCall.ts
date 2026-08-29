import { WritingArticle } from "../writing";

export const articleBeyondAnApiCall: WritingArticle = {
  slug: "what-changes-when-the-ai-stops-being-a-single-api-call",
  title: "Beyond an API Call",
  date: "2026-07-01",
  excerpt: "What Changes When the AI Stops Being a Single API Call",
  readingTime: "10 min read",
  content: [
    "The standard entry point to AI development is wrapping an HTTP POST call to an LLM API inside a web application. You grab user input, format a prompt string, send it off to a remote endpoint, and render the text response on a frontend page. It feels easy right up until real users start asking actual questions.",

    "Moving from AI-assisted features to true AI software systems changes every architectural layer. As requirements evolve from simple text completion to multi-provider orchestration ([Conclave](https://github.com/vaibhv19/conclave)) and transparent hybrid retrieval ([Phoenix](https://github.com/vaibhv19/Phoenix)), the model stops being the whole application—it becomes a single probabilistic component inside a larger deterministic architecture.",

    "## 1 / State Management & Context Budget Constraints",

    "In a single API call, state is ephemeral: you send a prompt, get a response, and discard the context. When building AI systems, state management becomes an explicit engineering constraint.",

    "- Context Window Budgets: Prompts can't grow indefinitely. Systems must implement sliding window context retention, summary compaction, or explicit context pruning.",

    "In [Conclave](https://github.com/vaibhv19/conclave) (a multi-model agent debate platform), moving beyond a single API call required building explicit state management for prompt context.",

    "Instead of sending stateless request strings, Conclave maintains a canonical state machine that tracks conversation history, agent roles, and turn-by-turn debate transcripts.",

    "## 2 / Beyond Raw Vector Search: Hybrid Retrieval & Reranking",

    "In [Phoenix](https://github.com/vaibhv19/Phoenix) (a hybrid RAG documentation workspace), moving beyond a single API call meant building a multi-stage retrieval pipeline.",

    "The default instinct when building retrieval-augmented generation is naive vector search: take user queries, generate dense embeddings, query cosine distance against chunks in a vector database, and assume the top matches contain the truth. In technical documentation, this assumption collapses quickly. Dense embeddings are great at semantic gist, but terrible at exact token matches—error codes like `502 Bad Gateway`, specific function signatures, or exact configuration flags often get washed out in high-dimensional embedding space.",

    "To solve this, Phoenix combines sparse keyword retrieval (BM25) with dense vector search in PostgreSQL via `pgvector`. Sparse search guarantees that exact identifiers and technical symbols are never missed, while dense vectors capture fuzzy semantic queries where the user didn't use the exact jargon in the documentation.",

    "However, merging sparse and dense candidate pools introduces a ranking dilemma: raw BM25 scores and cosine similarities live on entirely different mathematical distributions. Naively summing them with arbitrary weights is guesswork. Phoenix solves this by passing candidate chunks through a Cross-Encoder reranker, which evaluates the deep cross-attention between the query and candidate passages jointly before anything is stuffed into the prompt context.",

    "The trade-off is latency and compute. Bi-encoders and BM25 lookups run in milliseconds; cross-encoders require real inference time. Managing that boundary means keeping candidate pools lean and using Redis caches for frequent query paths so the system stays responsive.",

    "## 3 / Explicit Failure Handling & Fallback Routing",

    "In production, LLM APIs fail—endpoints time out, rate limits get exceeded, model outputs hallucinate, and structured JSON parsing fails.",

    "When an API call is treated as a simple feature, error handling consists of wrapping the network request in a basic try/catch block. In AI systems engineering, model failure is expected and must be handled gracefully within system control flow:",

    "- Query Rewriting Traces: If initial retrieval confidence scores fall below a minimum threshold, the system automatically reformulates the search query and retries.",
    "- Provider Fallback Routing: If a primary local Ollama model fails or times out, the system routes the context payload to a secondary fallback provider.",
    "- Clarification Prompts: When document retrieval uncertainty remains high, the system prompts the user for clarification rather than passing low-confidence context to the LLM.",

    "## 4 / Observability & Telemetry Harnesses",

    "When AI stops being a single API call, observability becomes non-negotiable. Every retrieval score, vector distance, prompt mutation, and tool invocation must emit inspectable telemetry logs.",

    "Building AI software systems ultimately means surrounding probabilistic model behavior with deterministic orchestration, multi-stage retrieval pipelines, strict error boundaries, and observable telemetry harnesses."
  ]
};
