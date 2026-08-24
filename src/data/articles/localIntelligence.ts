import { WritingArticle } from "../writing";

export const articleLocalIntelligence: WritingArticle = {
  slug: "local-first-ai-why-i-kept-the-intelligence-close-to-the-application",
  title: "Local Intelligence",
  date: "2026-08-05",
  excerpt: "Why I Kept the Intelligence Close to the Application",
  readingTime: "9 min read",
  content: [
    "The dominant architectural pattern in early AI software development was routing every computational task to cloud-hosted API endpoints. While cloud APIs provide convenience, relying exclusively on remote services introduces latency overhead, ongoing per-token financial costs, network fragility, and data privacy concerns.",

    "Across three different projects—[Conclave](https://github.com/vaibhv19/conclave), [Phoenix](https://github.com/vaibhv19/Phoenix), and [Check-Mate-Analyse](https://github.com/vaibhv19/check-mate-analyse)—I explored keeping computation, vector indexing, and intelligence processing as close to the application boundary as possible. However, 'local intelligence' means very different things depending on system requirements.",

    "## 01. Local Model Inference in Conclave",

    "In [Conclave](https://github.com/vaibhv19/conclave), local intelligence meant running open-weights LLMs directly on local host hardware using Ollama instances.",

    "Why local model inference mattered in Conclave:",
    "- Zero Per-Token Costs: Running multi-agent coordination loops locally allowed executing thousands of iterative agent prompts without accumulating cloud API bills.",
    "- Offline Resilience: Multi-agent task execution could continue functioning without an active internet connection.",
    "- Privacy Guarantees: Sensitive context data remained on local hardware rather than being transmitted to third-party endpoints.",

    "The architectural trade-off was hardware dependency: local inference throughput depends directly on available GPU/RAM hardware, requiring strict token budget limits and model quantization.",

    "## 02. Local Vector Indexing in Phoenix",

    "In [Phoenix](https://github.com/vaibhv19/Phoenix), local intelligence meant embedding PostgreSQL with pgvector directly within the application infrastructure.",

    "Instead of relying on cloud-hosted vector databases, Phoenix handles vector similarity indexing, sparse BM25 scoring, and relational document storage within a self-contained local PostgreSQL instance.",

    "Benefits of local vector infrastructure:",
    "- Deterministic Testing: Local vector indices can be spun up in Docker containers during automated CI integration tests.",
    "- Reduced Network Latency: Cosine similarity queries execute in sub-millisecond local database memory space rather than over WAN connections.",
    "- No Cloud Lock-In: Vector schema and index configurations remain fully portable.",

    "## 03. Browser-Side Compute in Check-Mate-Analyse",

    "In [Check-Mate-Analyse](https://github.com/vaibhv19/check-mate-analyse), local intelligence meant shifting engine evaluation entirely to the user's web browser.",

    "Rather than maintaining server farms to compute chess tactical evaluations, the application compiles the Stockfish chess engine to WebAssembly (Wasm) and runs it inside client-side Web Workers.",

    "Benefits of browser-side compute:",
    "- Zero Backend Compute Costs: Tens of thousands of position evaluations execute directly on client CPU threads.",
    "- Instant Feedback: Board evaluation updates instantly as user pieces move, bypassing server round-trip latency.",

    "## 04. Evaluating Trade-offs: Local vs Remote Compute",

    "Local intelligence is not a silver bullet. It introduces clear engineering trade-offs:",

    "- Hardware Limits: Client or local server memory and GPU limits constrain model parameter sizes.",
    "- Distribution Size: Shipping WebAssembly binaries or local model weights increases initial download payloads.",
    "- Maintenance Overhead: Managing local Docker containers, local vector indices, and runtime environments requires explicit operational tooling.",

    "Architectural takeaway: Local-first intelligence empowers developers to build resilient, privacy-preserving applications where core functionality remains available regardless of remote network conditions."
  ]
};
