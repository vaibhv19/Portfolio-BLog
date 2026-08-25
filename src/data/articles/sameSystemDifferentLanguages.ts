import { WritingArticle } from "../writing";

export const articleSameSystemDifferentLanguages: WritingArticle = {
  slug: "what-i-learned-from-building-the-same-distributed-cache-in-java-and-python",
  title: "Same System, Different Languages",
  date: "2026-08-20",
  excerpt: "What I Learned From Building the Same Distributed Cache in Java and Python",
  readingTime: "10 min read",
  content: [
    "Distributed caching is one of those classic system design topics where the theory sounds delightfully simple right up until you try to run it across multiple physical nodes. The underlying math—consistent hashing with minimal key churn when nodes join or disappear—is identical regardless of what language you use.",

    "To see how runtime environments, memory layouts, and concurrency models shape real-world behavior, I built the same distributed in-memory cache twice: [Cairn](https://github.com/vaibhv19/Cairn) in Java 21 and [Shard](https://github.com/vaibhv19/shard) in Python/Django.",

    "## 01. What Stood Conceptually Identical",

    "The core distributed system math remained identical across both implementations:",

    "- Consistent Hashing Ring: Mapping keys and nodes onto a circular hash ring using Murmur3 hashing to minimize key relocation when cluster topology changes.",
    "- Virtual Nodes: Mapping 150 virtual nodes per physical host to ensure uniform key distribution and prevent single-node hot-spotting.",
    "- Key Expiration Primitives: Supporting Time-To-Live (TTL) with passive expiration checks during reads and active background sweeps.",
    "- Cache Eviction Policies: Pluggable Least Recently Used (LRU) and Least Frequently Used (LFU) eviction heuristics.",

    "However, as soon as code execution hit real runtimes, Java and Python dictated vastly different operational trade-offs, concurrency models, and memory profiles.",

    "## 02. Concurrency Models: Virtual Threads vs Asynchronous Loops",

    "In [Cairn](https://github.com/vaibhv19/Cairn), the JVM's multi-threading model and Java 21's Virtual Threads allowed me to write straightforward, synchronous read/write code while maintaining high concurrent throughput.",

    "Key Java concurrency mechanics:",
    "- `ConcurrentHashMap` provided lock-free bucket-level read concurrency without blocking global map access.",
    "- `ReentrantReadWriteLock` allowed concurrent readers to access cached items simultaneously while ensuring exclusive write access during eviction.",
    "- `LongAdder` counters minimized thread contention when tracking cache hits and misses across high-concurrency worker threads.",

    "In [Shard](https://github.com/vaibhv19/shard), Python's Global Interpreter Lock (GIL) quickly reminded me that Python threads don't execute CPU-bound bytecode in parallel within the same process, no matter how politely you ask.",

    "Key Python concurrency mechanics:",
    "- Switched to asynchronous event loops (`asyncio`) and process-level scaling.",
    "- Concurrent read access required lock-striping across dictionary shards to prevent thread contention during background TTL expiration sweeps.",
    "- Multi-process worker pools (e.g. Gunicorn/Uvicorn workers) were required to utilize multiple CPU cores, noticeably increasing memory footprint per node.",

    "## 03. Development Experience & Testing",

    "The development and testing feedback loops between the two projects revealed distinct ecosystem strengths:",

    "Python excelled at rapid prototyping and clean test suite creation. Writing unit tests, mocking node failures, and verifying hash ring distributions in Pytest took half the code lines required in Java. The flexibility of Python dictionaries made experimenting with custom LFU heap structures exceptionally fast.",

    "Java excelled at high-concurrency stability, memory control, and metric instrumentation. Java 21's static typing caught type mismatches at compile time, while Micrometer and Prometheus integration provided granular p95/p99 latency percentiles and garbage collection telemetry under sustained throughput stress tests.",

    "## 04. Comparative Trade-offs Summary",

    "- Throughput & Latency: Java 21 ([Cairn](https://github.com/vaibhv19/Cairn)) demonstrated superior p99 latency stability and higher concurrent throughput per node under stress tests due to OS multi-threading and Virtual Thread scheduling.",
    "- Prototyping & Flexibility: Python ([Shard](https://github.com/vaibhv19/shard)) allowed significantly faster initial development, cleaner test syntax, and rapid hash-ring iteration.",
    "- Memory Efficiency: Java required more initial heap configuration, but shared memory structures across Virtual Threads efficiently. Python required multi-process worker separation to bypass the GIL, resulting in higher aggregate memory overhead per physical host.",

    "## Key Conclusion",

    "The mathematical architecture of a distributed system can remain identical, but runtime primitives define latency percentiles, memory footprints, and operational complexity. Building the same system in Java and Python demonstrated that language choice isn't about picking a favorite syntax—it's about choosing which runtime trade-offs you're willing to manage when production stress arrives."
  ]
};
