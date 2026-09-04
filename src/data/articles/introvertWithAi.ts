import { WritingArticle } from "../writing";

export const articleIntrovertWithAi: WritingArticle = {
  slug: "introvert-with-ai",
  title: "INTROVERT WITH AI",
  date: "2026-09-04",
  excerpt: "AI didn't change how I work. It removed the only reason I'd ever need to work differently.",
  readingTime: "5 min read",
  content: [
    "I spent most of my summer vacation alone in a room, building software.",

    "No status updates. No progress threads. No \u201Cday 12 of my build challenge\u201D posts. Just a code editor, a terminal, and silence \u2014 for weeks. I built eleven projects across AI, distributed systems, and full-stack development, and I didn\u2019t tell anyone about any of them until they were deployed and live. The only proof of work, for most of that stretch, was a growing trail of git commits that nobody was watching.",

    "When I finally shared the portfolio, the people whose opinions I actually trust \u2014 friends from engineering college, the kind who will tell you your code is ugly to your face \u2014 told me it was good. That landed. Not because I needed external validation to keep going, but because honest feedback from people who understand the craft is worth more than any amount of public reaction.",

    "That\u2019s the part most people find strange: the silence. Not the output. The fact that I could spend weeks building in complete solitude without feeling like I was missing something.",

    "## One Identity at a Time",

    "I don\u2019t balance well. I don\u2019t want to.",

    "When I\u2019m building, I\u2019m building. I\u2019m not also writing about building, or marketing what I\u2019m building, or maintaining a public narrative about the building process. I go fully into one mode until it\u2019s done, then I switch. Right now I\u2019m writing. Later, maybe I\u2019ll share this more broadly. But I don\u2019t try to do both at once, because splitting my attention across identities makes me worse at all of them.",

    "This isn\u2019t some productivity philosophy I adopted. It\u2019s just how I\u2019m wired. I\u2019d rather stay home and paint than go out. I\u2019d rather spend a Saturday untangling a distributed systems bug than attend a networking event. Quiet, solitary, deep-focus work is where I function best \u2014 and I spent a long time thinking that was a limitation before I realized it was just a preference that most collaborative workflows aren\u2019t designed for.",

    "Software engineering, as it\u2019s traditionally structured, is deeply collaborative. Stand-ups, pair programming, design reviews, sprint ceremonies \u2014 the entire modern development process assumes that building software is a team sport. And for most contexts, it is. The scale of real-world systems makes solo development impractical. Not because one person can\u2019t think through the architecture, but because one person can\u2019t type fast enough.",

    "That\u2019s the part that changed.",

    "## Where the Line Sits",

    "My philosophy on working with AI is simple, and I think most people get it backwards.",

    "I keep everything that requires real thinking \u2014 planning, architecture, logic, technical decisions \u2014 entirely to myself. That\u2019s the work. That\u2019s the part that actually needs a human mind: understanding the problem space, choosing the right abstraction, deciding what to build and why and how the pieces connect. No model does that for you. If you hand off the thinking, what\u2019s left isn\u2019t engineering \u2014 it\u2019s prompting.",

    "What I hand to AI is the manual execution. Once I\u2019ve made the decision, I let agents write the files. I let them generate code from my architecture. When using agentic tools, I let the agent open a browser tab and verify its own work instead of me clicking through every page manually. I had agents make a git commit with a proper descriptive message after every atomic task, instead of me typing git commands by hand.",

    "The point isn\u2019t \u201CAI writes my code for me.\u201D The point is: AI does the hands, I keep the head.",

    "This distinction matters because it preserves the part of engineering that I care about \u2014 the thinking, the design, the judgment calls \u2014 while removing the part that used to be the bottleneck for solo work: raw throughput. One person can architect a complex system. One person can make every technical decision. One person could never, historically, also write every file, test every integration, and commit every change at the speed a team could. That throughput gap is what forced solo developers to either stay small or join teams.",

    "AI closed that gap. Not by replacing my judgment, but by multiplying my output.",

    "## Not a Replacement \u2014 a Removal",

    "Here\u2019s what I want to be precise about, because the usual AI narrative gets this exactly wrong.",

    "AI didn\u2019t replace my team. I didn\u2019t have one for this particular stretch of work, and I don\u2019t think that says anything bad about collaboration. Teams exist because good software, at scale, needs more hands and more perspectives than one person has. That\u2019s not going away, and it shouldn\u2019t.",

    "What changed is what became possible without one. Coordination, code review, syncing on shared context \u2014 all of that is genuinely valuable, but it\u2019s also overhead, and overhead costs time. For a solo build like this one, AI let me go straight from decision to execution without needing to translate my thinking into something a teammate could pick up first. That\u2019s not a rejection of people. It\u2019s a faster path for the specific kind of work that doesn\u2019t require them.",

    "What AI did was close the throughput gap that used to make working this way, at this scale, impractical. It didn\u2019t change how I think. It just removed the constraint that used to force a choice between building alone and building at scale.",

    "I still planned every project alone. I still made every architectural decision alone. I still sat in silence for hours, thinking through problems before writing a single line of anything. The difference is that when I finished thinking, I didn\u2019t also have to spend the next eight hours on the mechanical translation of those decisions into files and tests and commits. The agent handled the execution. I stayed in my head, where I\u2019m most useful.",

    "There\u2019s a version of this story that makes it sound like AI turned me into something new \u2014 a solo developer who can suddenly match what teams produce, some kind of force-multiplier transformation. That\u2019s not quite it. I was always someone who thinks best alone, in long quiet stretches, before I have anything worth showing anyone.",

    "AI didn\u2019t turn me into anything. It just gave that way of working enough throughput to hold up at scale."
  ]
};
