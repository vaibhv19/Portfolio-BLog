import { WritingArticle } from "../writing";

export const articleHowIMaintainOpenSource: WritingArticle = {
  slug: "how-i-maintain-open-source",
  title: "How I Maintain Open Source",
  date: "2026-09-23",
  excerpt: "Most of my repos don't have contributors yet. So instead of waiting for a real incident to force the question, I built the answer first.",
  readingTime: "4 min read",
  content: [
    "Most of my repos don't have contributors yet. No open issues from strangers, no PRs to review, no production incident to recover from at 2am. So when I decided to write down how I maintain open source, the honest answer was: I don't, not really — not yet.",

    "But \"I don't have this problem yet\" is exactly the wrong reason to skip writing it down. The first PR from someone I don't know, the first migration that half-applies, the first secret that ends up in a commit — those are bad moments to be improvising a process for the first time. So instead of waiting for a real incident to force the question, I built the answer first.",

    "## What I actually built",

    "The repo is here: [How-to-Maintain-Opensource](https://github.com/vaibhv19/How-to-maintain-Opensource) — everything below is what's actually in it.",

    "A small reference repo, not a framework, not a tool — just documents. A README and the usual public-facing set (CONTRIBUTING, CODE_OF_CONDUCT, SECURITY, CHANGELOG, LICENSE), plus a maintainer/ folder with five documents that don't try to be polite to contributors, because they're not for contributors — they're for me:",

    "- MAINTAINER_GUIDE — the actual job: triage, when to merge, when to close, how to keep an old project alive without rewriting it out of boredom.\n- CONTRIBUTION_REVIEW — a 14-step checklist for the moment a PR looks fine on the surface and isn't. Scope, tests, dependencies, security implications, rollback plan — in that order, because reading code for correctness before understanding what it's supposed to do is how bugs get approved.\n- INFRASTRUCTURE_SAFETY — the stuff that breaks around the code, not in it. Env vars, migrations, CI/CD, Docker, infra-as-code. Classified into three tiers: normal changes, changes that need a second look, and changes a contributor should never make at all.\n- RELEASE_PROCESS — a repeatable path from merged PR to production, with an explicit rollback plan decided before deploying, not improvised after.\n- INCIDENT_RESPONSE — runbooks for the specific ways things go wrong: a bad deploy, a regression, a partially-applied migration, a leaked secret. Each with the actual commands, not just the intent.",

    "## Why the rigor, for projects this small",

    "A fair question, since none of my current projects have a production incident history, a team of contributors, or infrastructure-as-code to misconfigure. The honest reason the docs go further than my current projects need is that I didn't want to write this twice. Whatever I'm running today is smaller than what I'll eventually be maintaining, and rewriting a maintainer process under pressure, mid-incident, is worse than having sections that sit unused for a while. So the guide is deliberately sized for where things are headed, not just where they are — the sections that don't apply yet are there on purpose, waiting.",

    "## What this isn't",

    "It's not a template I adapted into one specific project as a demo, and it's not something I'm publishing as \"use my starter kit.\" It's closer to a personal operating manual — the thing I open when a PR lands and I'm not sure what to check first, or when something breaks and I don't want to be figuring out the recovery sequence for the first time while it's actively down.",

    "## The part I didn't expect",

    "Writing the incident-response runbooks was the most useful part, not the most obviously useful part. I assumed the PR-review checklist would matter most, since that's the thing I'll actually use weekly. But writing out \"what do I do if a migration fails halfway through\" before it happens, with the actual git revert and filter-repo commands already in hand, is a different kind of preparation than knowing the concept exists. It's the difference between having read about CPR and having practiced it.",

    "Maintaining software well isn't really about the code review checklist. It's about not having to invent your response to a bad situation while you're already in it."
  ]
};
