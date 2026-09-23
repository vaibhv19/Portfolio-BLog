import { WritingArticle } from "../writing";

export const articleHowIMaintainOpenSource: WritingArticle = {
  slug: "how-i-maintain-open-source",
  title: "How I Maintain Open Source",
  date: "2026-09-22",
  excerpt: "I wrote a maintainer's guide for projects that didn't need one yet. Then I opened GitHub and found two pull requests waiting.",
  readingTime: "5 min read",
  content: [
    "I sat down to write a maintainer's guide for projects that, as far as I knew, didn't need one yet. Most of what I run is solo work — no strangers filing issues, no PRs waiting on a decision, nothing in production that could actually go down and take users with it. Writing the guide felt like insurance for a future version of me, not something I'd open this month.",

    "I finished the last document, pushed it, and opened GitHub out of habit. Foundry had two open pull requests. Real changes, from someone I'd never worked with, sitting there since before I'd even started writing.",

    "So much for the theoretical framing.",

    "## What I actually built",

    "The repo is here: [How-to-Maintain-Opensource](https://github.com/vaibhv19/How-to-maintain-Opensource). A README and the usual public-facing set — CONTRIBUTING, CODE_OF_CONDUCT, SECURITY, CHANGELOG, LICENSE — plus a maintainer/ folder holding five documents that aren't written for contributors, because contributors don't need to read them. They're written for me.",

    "CONTRIBUTION_REVIEW is the one I reached for first: a 14-step sequence for the moment a PR looks fine and isn't. Understand the change before judging it, check the scope before the logic, ask what breaks before asking what's elegant. Tests, dependencies, security implications, and — last, deliberately — what happens if this needs to be undone.",

    "INFRASTRUCTURE_SAFETY covers what breaks around the code rather than in it: env vars, migrations, CI/CD, Docker, anything infrastructure-as-code. Split into three tiers — normal changes, changes that need a second look, and changes an outside contributor should never be the one making.",

    "MAINTAINER_GUIDE, RELEASE_PROCESS, and INCIDENT_RESPONSE cover the rest of the job: triage, deciding what ships and when, and — the one I hadn't expected to matter this fast — runbooks for specific failure modes, with actual commands instead of vague intentions. What to run when a migration fails halfway. How to pull a leaked secret out of git history. Not \"be careful,\" but the literal sequence.",

    "## Using it for the first time",

    "The checklist assumes you test a PR somewhere other than main. I knew that in the abstract way you know most good practices — as a sentence, not a habit — and had to actually work out the mechanics with a real PR sitting open in front of me: pull the branch down without merging it anywhere real, `git fetch origin pull/13/head:pr-review`, drop it onto a throwaway branch built off my actual test branch, and run it there. `main` stays untouched the whole time. No guessing, no \"it's probably fine.\"",

    "That gap — between having written the instruction and having the instinct — is the actual point of the exercise. The document told me what to check. It didn't make checking automatic. I still had to sit down, slower than I expected, and go through it step by step on something I'd written myself days earlier.",

    "## Why it's heavier than my current projects need",

    "None of what I run today has a production incident history, a real team, or infrastructure serious enough to misconfigure. The rigor in these docs — dependency license checks, rollback plans for migrations, tiered access to CI config — is built for a scale I'm not at yet. I wrote it that size on purpose. Whatever I'm maintaining now is smaller than what I'll eventually be maintaining, and rewriting a maintainer process mid-incident, under pressure, is a worse position than having sections that sit unused for a while. The parts that don't apply yet are there on purpose. Waiting.",

    "## What this isn't",

    "It's not a starter template I adapted into one project as a demo. It's a personal operating manual — the thing I open when a PR lands and I'm not sure what to check first, or when something's broken and I don't want to be inventing the recovery sequence while it's actively down.",

    "## What surprised me",

    "I expected the PR-review checklist to be the part I'd actually use. It was — but writing the incident runbooks turned out to matter faster than I thought, because the same instinct runs underneath both: don't act on a guess, isolate before you touch anything real, don't improvise the response while you're in the middle of it. I built that instinct for a crisis that hasn't happened yet. It showed up first for two ordinary pull requests instead. Same reflex, lower stakes — which is probably the best way to actually learn it.",

    "Maintaining software well isn't really the checklist. It's not needing to invent your response to a bad situation while you're already inside one."
  ]
};
