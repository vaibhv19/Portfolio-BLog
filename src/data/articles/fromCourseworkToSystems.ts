import { WritingArticle } from "../writing";

export const articleFromCourseworkToSystems: WritingArticle = {
  slug: "from-coursework-to-systems-engineering-how-my-projects-became-more-serious",
  title: "From Coursework to Systems",
  date: "2026-05-15",
  excerpt: "How My Projects Became More Serious",
  readingTime: "11 min read",
  content: [
    "Engineering growth can be traced through the evolving complexity of the systems one builds. Early in computer science coursework, projects are typically focused on syntax execution and standalone feature delivery—writing a script that runs correctly under ideal conditions on `localhost`.",

    "Over time, my personal project arc shifted from standalone features toward systems engineering: designing applications that handle failure gracefully, enforce boundary isolation, remain observable under load, and can be reliably reproduced across production environments.",

    "## 1 / The Architectural Arc Across Projects",

    "This evolution can be traced across five major projects:",

    "1. [Check-Mate-Analyse](https://github.com/vaibhv19/check-mate-analyse) *(Complex Client-Side Application)*:\nFocused on browser-side WebAssembly execution, Web Worker thread offloading, and client-side chess engine evaluation.",

    "2. [Trajectory](https://github.com/vaibhv19/trajectory) *(Full-Stack Application & Production Deployment)*:\nShifted focus toward production infrastructure: AWS EC2/RDS/S3 deployment, Docker Compose configuration, Nginx reverse proxying, and automated GitHub Actions CI/CD pipelines.",

    "## 1 / The Architectural Arc Across Projects",

    "Looking across the systems I've built, the progression from basic functional prototypes to production-grade applications is clear:",

    "1. Standalone Scripting: Writing linear logic to solve isolated problems.",
    "2. Web Application Mechanics: Building CRUD interfaces, REST endpoints, and database models.",
    "3. Architectural Separation: Decoupling frontend interfaces from backend microservices and data pipelines.",
    "4. Systems & Infrastructure: Implementing distributed caching, multi-agent orchestration, and sandboxed evaluation harnesses.",

    "## 2 / How Technical Questions Changed Over Time",

    "Early on, engineering questions focused primarily on syntax and basic implementation: 'How do I query this table?' or 'How do I handle this state change?'. As systems grew, questions shifted toward architectural durability, fault tolerance, and concurrency models.",

    "## 3 / The Evolution of Testing & Verification",

    "Testing discipline similarly matured across this arc:",

    "- Manual Checks: In early projects, verification consisted of manual browser testing and console logging.",
    "- Automated Unit & Integration Testing: In full-stack work, automated test suites (Pytest, JUnit) verified API contracts and ORM migrations before merging code.",

    "Systems engineering is ultimately the transition from writing code that works under ideal conditions on localhost to designing resilient software systems that gracefully endure operational reality."
  ]
};
