import { WritingArticle } from "../writing";

export const articleRealTimeEvolved: WritingArticle = {
  slug: "the-evolution-of-my-real-time-architecture",
  title: "Real-Time, Evolved",
  date: "2026-06-02",
  excerpt: "The Evolution of My Real-Time Architecture",
  readingTime: "9 min read",
  content: [
    "Real-time web applications look delightfully easy in tutorials: open a WebSocket connection, push a few JSON frames back and forth, and update a reactive UI component. But as soon as concurrent clients, connection drops, and streaming payloads enter production, real-time architecture exposes its hidden traps.",

    "Comparing real-time architectures across [Conclave](https://github.com/vaibhv19/conclave) (a multi-agent streaming platform) and [Foundry](https://github.com/vaibhv19/foundry) (a high-concurrency event system) highlights where real-time engineering complexity actually lives: right at the boundary between low-level network transport framing and background business logic.",

    "## 1 / Transport Framing vs Application Business Logic",

    "A common mistake is coupling WebSocket connection handlers directly to database persistence loops or heavy business logic. When an HTTP/WebSocket thread blocks on a slow database write or external API call, connection framing stalls, heartbeats drop, and client latency spikes.",

    "The solution across both Conclave and Foundry was strict separation of concerns:",

    "- Decoupled Transport Handlers: WebSocket connection listeners focus exclusively on frame ingestion, heartbeat ping/pong management, and socket lifecycle events.",
    "- Asynchronous Message Queues: Incoming event payloads are immediately enqueued into background worker queues (such as `LinkedBlockingQueue` or `asyncio.Queue`) for processing.",
    "- Background Execution Workers: Database persistence, multi-agent state translation, and heavy compute run asynchronously on background worker threads without blocking WebSocket event loops.",

    "## 02. Streaming AI Token Output over WebSockets",

    "In [Conclave](https://github.com/vaibhv19/conclave), real-time requirements involved streaming LLM text outputs incrementally as model tokens generated.",

    "Streaming AI outputs over WebSockets introduced unique state challenges:",

    "- Token Buffer Chunking: Pushing single-character tokens over individual WebSocket frames creates massive network packet overhead. Conclave buffers tokens into small time-windowed or byte-sized chunks before flushing frames.",
    "- Out-of-Order Frame Guardrails: Managing sequence IDs across concurrent multi-agent streams to ensure client frontends assemble tokens in deterministic order.",
    "- Graceful Reconnection Backoff: Handling client network disconnections during active token generation without corrupting server-side context state.",

    "## 03. Reactive Frontend Synchronization",

    "On the frontend, reactive UI synchronization demands careful state management:",

    "- Optimistic UI Updates: Rendering local state mutations immediately while waiting for backend socket acknowledgment.",
    "- Exponential Reconnect Backoff: Preventing reconnection storms when server sockets restart or experience network interruptions.",
    "- Clean Teardown Lifecycles: Properly closing event listeners and socket subscriptions during React component unmounts to prevent memory leaks.",

    "## Key Takeaway",

    "High-throughput real-time architecture relies on strict separation between connection transport management and background business logic execution. Decoupling network sockets from persistence loops ensures low-latency delivery even under heavy concurrency stress."
  ]
};
