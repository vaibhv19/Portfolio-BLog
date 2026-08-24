import { WritingArticle } from "../writing";

export const articleBuildingForProduction: WritingArticle = {
  slug: "production-changed-how-i-build",
  title: "Building for Production",
  date: "2026-05-15",
  excerpt: "What Building for Production Changed About How I Build",
  readingTime: "11 min read",
  content: [
    "Developing applications exclusively on `localhost` hides operational reality. On a local development machine, network latency is non-existent, database connections never time out, environment variables are pre-configured in local shell profiles, and server memory is unconstrained.",

    "Building and deploying [Trajectory](https://github.com/vaibhv19/trajectory)—a full-stack application deployed on AWS EC2, AWS RDS (PostgreSQL), and Amazon S3 using Docker Compose, Nginx reverse proxying, and GitHub Actions CI/CD pipelines—fundamentally altered how I approach software development.",

    "## 01. Codified Environments over Manual Setup",

    "Before experiencing production deployment, environment setup was often informal. Deploying [Trajectory](https://github.com/vaibhv19/trajectory) forced me to codify environment requirements completely:",

    "- Dockerfiles & Compose Manifests: Replacing manual server setup with containerized manifests that define exact runtime images, environment variables, dependencies, and network ports.",
    "- Nginx Reverse Proxying: Configuring SSL termination, CORS headers, gzip compression, and static asset caching explicitly.",
    "- S3 Asset Offloading: Decoupling file uploads from local container file systems to stateless S3 object storage.",

    "## 02. CI/CD as an Engineering Guardrail",

    "Setting up GitHub Actions CI/CD pipelines shifted testing from an optional manual step to an automated deployment gatekeeper.",

    "Every commit pushed to main branches triggers automated pipeline workflows:",

    "1. Linting & Type Checking: Validating TypeScript types and ESLint syntax rules.",
    "2. Automated Unit & Integration Tests: Executing backend test suites to verify API contracts before building images.",
    "3. Container Build & Push: Building container images and pushing them to registry repositories.",
    "4. Zero-Downtime Deployment: Triggering remote SSH deployment scripts on production servers.",

    "## 03. How Production Changed Local Habits",

    "Experiencing production operations changed how I write code locally from day one:",

    "- Explicit Error Handling: Writing explicit try/catch blocks, database retry logic, and fallback responses rather than assuming happy-path success.",
    "- Structured Logging: Emitting JSON formatted logs with timestamps and log levels rather than arbitrary print statements.",
    "- Environment Isolation: Keeping local development environments isolated in Docker containers that mirror production configurations.",

    "Workflow evolution: Production experience changes local development—software is built with environment isolation, configuration management, explicit failure boundaries, and automated verification from the very first commit."
  ]
};
