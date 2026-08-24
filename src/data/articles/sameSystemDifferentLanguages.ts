import { WritingArticle } from "../writing";

export const articleSameSystemDifferentLanguages: WritingArticle = {
  slug: "what-i-learned-from-building-the-same-distributed-cache-in-java-and-python",
  title: "Same System, Different Languages",
  date: "2026-08-20",
  excerpt: "What I Learned From Building the Same Distributed Cache in Java and Python",
  readingTime: "10 min read",
  content: [
    "Distributed caching is one of the classic problems in software systems. When scaling a key-value cache horizontally across multiple physical nodes, the underlying mathematical challenge—consistent hashing with minimal key churn during node topology changes—remains identical regardless of the programming language you choose.",

    "To explore how runtime environments, memory layouts, and concurrency abstractions shape system behavior in practice, I built two separate implementations of a distributed in-memory cache: [Cairn](https://github.com/vaibhv19/Cairn) in Java 21 and [Shard](https://github.com/vaibhv19/shard) in Python/Django.",

    "## 01. What Stood Conceptually Identical",

    "The core distributed system mathematical concepts across both systems were identical:",

    "- Consistent Hashing Ring: Mapping keys and nodes onto a circular hash ring using Murmur3 hashing to minimize key relocation when nodes join or leave the cluster.",
    "- Virtual Nodes: Mapping 150 virtual nodes per physical node onto the hash ring to ensure uniform key distribution and prevent hot-spotting.",
    "- Key Expiration Primitives: Supporting Time-To-Live (TTL) with passive expiration checks during reads and active background sweepers.",
    "- Cache Eviction Policies: Pluggable Least Recently Used (LRU) and Least Frequently Used (LFU) eviction heuristics.",

    "However, as soon as implementation began, the runtime primitives of Java and Python dictated vastly different operational trade-offs, concurrency models, and memory profiles.",

    "## 02. Concurrency Models: Virtual Threads vs Asynchronous Loops",

    "In [Cairn](https://github.com/vaibhv19/Cairn), the JVM's multi-threading model and Java 21's Virtual Threads allowed us to write clean, synchronous read/write code while achieving high concurrency throughput.",

    "Key Java concurrency mechanics:",
    "- `ConcurrentHashMap` provided lock-free bucket-level read concurrency without blocking global map access.",
    "- `ReentrantReadWriteLock` allowed concurrent readers to access cached items simultaneously while ensuring exclusive write access during eviction.",
    "- `LongAdder` counters minimized thread contention when tracking cache hits and misses across high-concurrency worker threads.",

    "In [Shard](https://github.com/vaibhv19/shard), Python's Global Interpreter Lock (GIL) fundamentally altered concurrency execution. Python threads cannot execute CPU-bound bytecode in parallel within the same process.",

    "Key Python concurrency mechanics:",
    "- Switched to asynchronous event loops (`asyncio`) and process-level scaling.",
    "- Concurrent read access required lock-striping across dictionary shards to prevent thread contention during background TTL expiration sweeps.",
    "- Multi-process worker pools (e.g. Gunicorn/Uvicorn workers) were required to utilize multiple CPU cores, increasing memory footprint per node.",

    "## 03. Development Experience & Testing",

    "The development and testing feedback loops between the two projects revealed distinct ecosystem strengths:",

    "Python excelled at rapid prototyping and clean test suite creation. Writing unit tests, mocking node failures, and verifying hash ring distributions in Pytest took half the code lines required in Java. The flexibility of Python dictionaries made experimenting with custom LFU heap structures exceptionally fast.",

    "Java excelled at high-concurrency stability, memory control, and metric instrumentation. Java 21's static typing caught type mismatches at compile time, while Micrometer and Prometheus integration provided granular p95/p99 latency percentiles and garbage collection telemetry under sustained throughput stress tests.",

    "## 04. Comparative Trade-offs Summary",

    "- Throughput & Latency: Java 21 ([Cairn](https://github.com/vaibhv19/Cairn)) demonstrated superior p99 latency stability and higher concurrent throughput per node under stress tests due to OS multi-threading and Virtual Thread scheduling.",
    "- Prototyping & Flexibility: Python ([Shard](https://github.com/vaibhv19/shard)) allowed significantly faster initial development, cleaner test syntax, and rapid hash-ring iteration.",
    "- Memory Efficiency: Java required more initial heap configuration, but shared memory structures across Virtual Threads efficiently. Python required multi-process worker separation to bypass the GIL, resulting in higher aggregate memory overhead per physical host.",

    "## Key Conclusion",

    "The mathematical architecture of a distributed system can remain identical, but runtime primitives define latency percentiles, memory footprints, and operational complexity. Building the same system in Java and Python demonstrated that language choice is not about superior syntax—it is about picking the right runtime trade-offs for your specific system boundaries."
  ]
};
