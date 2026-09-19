import { WritingArticle } from "../writing";

export const articleTheNightAnAiAgentAlmostAteMyDrive: WritingArticle = {
  slug: "the-night-an-ai-agent-almost-ate-my-drive",
  title: "The Night an AI Agent Almost Ate My Drive",
  date: "2026-09-19",
  excerpt: "A routine cleanup step, unsupervised filesystem access, and the night an AI agent sweep almost wiped my active work.",
  readingTime: "5 min read",
  content: [
    "I was up all night working on /life — the personal, non-engineering page of my portfolio. Google Antigravity was redesigning the visual identity of the page while I edited raw assets in parallel. A normal night of parallel work: me on one thing, the agent on another, both feeding into the same page.",

    "At some point I approved what looked, from the prompt shown to me, like a routine step — clearing out a leftover script from the task. I didn't think twice about it. I'd approved dozens of steps like it that night.",

    "At 7:44 AM, I noticed folders on my drive were gone.",

    "Not moved to the Recycle Bin. Not sitting in some temp directory. Gone — the way files look when something ran a real delete command against them, not a drag-to-trash.",

    "## The first hour: figuring out what \"gone\" even meant",

    "My first assumption was Google Drive sync had glitched — some of what vanished was Drive-synced, and I found those in Drive's own Trash within minutes, which was reassuring. But then I noticed folders that were never synced to Drive were also missing. That ruled out a simple sync bug. Something on the machine itself had deleted things directly.",

    "I went through the usual suspects: a failing disk, a rogue cleanup tool, malware, an account compromise. I checked disk health, checked Google's account activity log, ran a malware scan. Nothing. The drive was healthy. No unauthorized sign-ins. No malware.",

    "Which left the option I'd been avoiding: something I had running had done this.",

    "## The realization",

    "Antigravity had been open the whole time, working in the background. I hadn't thought of it as a suspect at first — it's a coding agent, not a file-deletion tool, and I hadn't asked it to delete anything I could remember. But once I searched, I found the pattern immediately: this is a documented failure mode. Multiple reported incidents — including one person losing their entire C: drive — all with the same shape. A routine instruction like \"clear the cache\" or \"clean up this session\" gets resolved into a shell command that targets a much broader path than intended. No warning. No confirmation of the actual scope. It just runs.",

    "One report described it almost exactly: an agent given \"delete the local working folders created in this session\" instead wiped the root of a drive, because it misresolved the path.",

    "## What actually happened, as far as I can reconstruct",

    "The deletions had gone through my folders alphabetically — a clear sign of a sequential, scripted sweep rather than anything targeted. It reached \"Projects----Archived\" and stopped. Everything alphabetically after that — Commercial, For Resume, Miscellaneous, Start-up, Testing, Training Program — was untouched.",

    "It stopped because, completely unrelated to any of this, WhatsApp on my PC was lagging badly enough that I restarted the machine. That restart killed whatever process was running the deletion, mid-sweep.",

    "I went digging through Antigravity's own logs afterward, trying to find the exact command. I didn't find a smoking gun — the conversation/session logs for that window were oddly incomplete (one session folder was empty, and there was a startup error about an agentSessions service failing to initialize, which might be related). But the surrounding evidence was strong enough: main.log showed the extension host going unresponsive repeatedly through the early morning, then hard-terminating at exactly the time I restarted. The timeline lines up perfectly with \"a process was killed mid-execution by a forced restart.\"",

    "## The lucky part",

    "A few days before this, I'd renamed my main coding folder from \"Coding\" to \"Work\" — for no real reason, just a whim. That rename pushed it later in alphabetical order. If I hadn't done that, the sweep would have reached my actual active coding projects before anything stopped it.",

    "I don't consider myself a spiritual person. But sitting there doing the math on how close that was, it was hard not to feel like something had looked out for me.",

    "## The damage, once I actually counted it",

    "- One retired project folder — already pushed to GitHub, two days before this happened.",
    "- One academic folder — already graded, and the notes inside were also backed up on GitHub as markdown.",
    "- Everything else that had been touched was Drive-synced and sitting in Drive's Trash, fully recoverable.",

    "I ran Recuva and later tested PhotoRec on the affected drive out of curiosity more than necessity at that point — recovered a handful of individual files, though without their original folder structure (expected, since a command-line delete removes the directory entries, not just the file data). By the time I was doing this, it was genuinely just testing recovery software rather than urgent data rescue, because the actual losses were already covered.",

    "Net result: nothing unrecoverable was actually lost.",

    "## What I did next",

    "I filed a full incident report on Google's official Antigravity forum, with logs and screenshots, being careful to state clearly what I could and couldn't prove — I have strong circumstantial evidence, not a confirmed root-cause command. Science and engineering discipline doesn't stop just because you're scared; if anything, that's exactly when it matters most to be precise about what you actually know versus what you suspect.",

    "Browsing the forum afterward, I found this is very much not an isolated incident. Multiple reports, spanning months, all with variations on the same theme: an agent with unsupervised filesystem access, a routine-sounding instruction, and a catastrophic misresolution of scope.",

    "## What I'm taking from this",

    "The tool itself isn't the problem. Antigravity is genuinely good at what it does, and I don't think this incident changes that. The problem was the access model I gave it — full, unsupervised write access to a real drive, with approval prompts that describe intent but not actual scope.",

    "Going forward:",

    "- Agentic tools get scoped to a single project directory they cannot see outside of. Not \"trusted with the whole drive and supervised loosely\" — actually sandboxed.",
    "- Anything irreplaceable stays version-controlled or backed up before an agent gets anywhere near it, not after.",
    "- An approval prompt is not proof of what's about to run. It's a description someone (or something) chose to show me. That's a meaningfully different thing from a guarantee.",

    "I got lucky this time — a random folder rename and a lagging chat app saved me from what could have been a genuinely bad day. I'd rather not need luck the next time."
  ]
};
