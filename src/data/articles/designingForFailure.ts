import { WritingArticle } from "../writing";

export const articleDesigningForFailure: WritingArticle = {
  slug: "when-model-answered-isnt-enough",
  title: "Designing for Failure",
  date: "2026-07-18",
  excerpt: "When “The Model Answered” Isn’t Enough: Designing for Failure",
  readingTime: "8 min read",
  content: [
    "A dangerous antipattern in modern software development is assuming that receiving an HTTP 200 OK response from a language model API equals task success.",

    "Unlike traditional deterministic functions—where valid inputs produce predictable outputs according to strict algorithm rules—LLMs are probabilistic components. A model can return a syntactically valid HTTP 200 response while hallucinating facts, missing retrieval constraints, violating safety policies, or generating broken code.",

    "System reliability demands that we distinguish clearly between two concepts:",

    "1. *'The model returned a response.'* (An HTTP network success)",
    "2. *'The system successfully completed its task.'* (A verified business outcome)",

    "Across [Phoenix](https://github.com/vaibhv19/Phoenix) and [Vigil](https://github.com/vaibhv19/Vigil), I focused on surrounding probabilistic model outputs with inspectable validation boundaries and deterministic failure handling.",

    "## 01. Phoenix: Handling Retrieval Uncertainty & Weak Search",

    "In [Phoenix](https://github.com/vaibhv19/Phoenix), designing for failure meant acknowledging that document retrieval will not always produce high-confidence matches.",

    "Instead of blindly passing weak document snippets to the LLM, Phoenix implements multi-stage validation:",

    "- Low-Confidence Detection: Evaluating BM25 and vector distance scores against strict threshold boundaries.",
    "- Automated Query Rewriting: If initial confidence scores fall below threshold, Phoenix automatically reformulates the search query to improve retrieval precision.",
    "- Cross-Encoder Reranking: Re-evaluating candidate document relevance before context assembly.",
    "- Fallback Model Routing: If document confidence remains insufficient after query rewriting, the system gracefully falls back to explicit clarification prompts or fallback knowledge sources.",

    "By catching weak retrieval early, Phoenix prevents the LLM from generating confident hallucinations based on poor context.",

    "## 02. Vigil: Deterministic Verification of Agent Side-Effects",

    "In [Vigil](https://github.com/vaibhv19/Vigil), designing for failure meant evaluating AI agent tool execution inside isolated environments.",

    "When an AI agent requests tool execution—such as modifying a database record, creating a file, or running a shell script—we cannot assume the agent executed the task correctly simply because it claims it did in text output.",

    "Vigil handles agent failure through objective state assertions:",

    "- Ephemeral Sandbox Isolation: Executing tool requests inside isolated, resource-constrained Docker containers.",
    "- Programmatic Pre/Post Assertions: Running state checks before and after tool execution (e.g. verifying file creation, inspecting database diffs, checking exit codes).",
    "- Banned Command & Anomaly Detection: Intercepting system calls to catch unauthorized commands, resource loops, or process leaks before side-effects hit production systems.",

    "## 03. Honest System Claims",

    "Designing for failure requires technical honesty about system capabilities. Neither Phoenix nor Vigil claims to eliminate model hallucinations entirely. What they provide is inspectable validation boundaries, fallback routing, and deterministic runtime containment.",

    "Building reliable software around AI requires surrounding probabilistic model outputs with strict, inspectable verification boundaries."
  ]
};
