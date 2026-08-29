import { WritingArticle } from "../writing";

export const articleBuildingAgentsTwice: WritingArticle = {
  slug: "building-multi-agent-systems-twice-from-context-unification-to-agent-evaluation",
  title: "Building Agents Twice",
  date: "2026-08-04",
  excerpt: "From Context Unification to Agent Evaluation",
  readingTime: "9 min read",
  content: [
    "Building AI agent systems initially feels like an exercise in prompt engineering: you write a prompt, define a tool schema, and connect an LLM to an API. But as soon as you move past single-turn demos, you realize agent engineering splits into two fundamentally different disciplines.",

    "I built AI agent systems twice—first in [Conclave](https://github.com/vaibhv19/conclave) to tackle cooperative orchestration, and later in [Vigil](https://github.com/vaibhv19/Vigil) to tackle safe evaluation and containment. Comparing these two projects highlights how the core problem inverts when you move from orchestration to evaluation.",

    "## 1 / Conclave: The Cooperative Orchestration Problem",

    "The core architectural question in Conclave was: *How do we enable multiple agents to share state and coordinate work smoothly?*",

    "Key engineering challenges in Conclave:",
    "- Context Translation: Translating prompt state into canonical data formats across different model providers (Ollama local instances vs OpenAI/Anthropic cloud APIs).",
    "- Shared State Synchronization: Maintaining a unified context window across agent hops so Agent B actually understands what Agent A accomplished.",
    "- Real-Time Streaming: Delivery of multi-agent thought processes incrementally over WebSocket frames to client interfaces.",

    "Conclave was designed for cooperation. Success meant smooth state handoffs, efficient token budget management, and collaborative task completion.",

    "## 2 / Vigil: The Evaluation & Verification Problem",

    "In [Vigil](https://github.com/vaibhv19/Vigil), the engineering problem completely inverted. Instead of helping agents cooperate, the objective was to evaluate their failure modes, measure side-effects, and enforce execution guardrails deterministically.",

    "The core architectural question in Vigil was: *How do we objectively measure, record, and constrain what an agent actually does when given access to real system tools?*",

    "Key engineering challenges in Vigil:",
    "- Ephemeral Docker Sandboxes: Executing agents inside isolated containers with explicit CPU, memory, process ID (PID), and network boundaries.",
    "- Deterministic Assertion Harness: Running automated pre-state and post-state assertions on file systems, environment variables, and database tables to verify if an agent achieved its goal.",
    "- System Call & Tool Telemetry: Intercepting tool executions, detecting infinite loops, validating file paths, and scanning for banned shell commands.",

    "Vigil was designed for verification. Success meant objective evaluation, zero leakages past sandbox boundaries, and reproducible safety metrics.",

    "## 3 / Orchestration vs Evaluation: Key Contrasts",

    "- Shared Context vs Isolated Sandboxes: Orchestration requires rich shared state handoffs. Evaluation requires strict, isolated execution sandboxes to prevent test contamination.",
    "- Prompt Tuning vs State Assertions: Orchestration relies heavily on prompt alignment. Evaluation relies on deterministic, programmatic state assertions (e.g., checking actual file system diffs after an agent runs).",
    "- Trust vs Containment: Orchestration assumes cooperative intent. Evaluation treats agent behavior as unverified, probabilistic software that must be strictly contained.",

    "## 4 / Honest Safety Framing",

    "An important lesson from building Vigil is that safety claims must be stated with technical honesty. Vigil doesn't make arbitrary AI agents 'completely safe' or magically eliminate model hallucinations. What Vigil provides is resource-constrained runtime isolation and objective verification.",

    "True agent engineering lives at the boundary between these two paradigms: prompt tuning alone cannot guarantee safety—real safety requires isolated execution boundaries, deterministic assertions, and runtime telemetry."
  ]
};
