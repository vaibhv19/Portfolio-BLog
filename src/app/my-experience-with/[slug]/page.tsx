import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Cpu, ExternalLink, CheckCircle2, AlertTriangle, Lightbulb } from "lucide-react";
import { EXPERIENCE_WITH_ARTICLES } from "@/data/experienceWith";
import { PROJECTS } from "@/data/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return EXPERIENCE_WITH_ARTICLES.map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = EXPERIENCE_WITH_ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: `${article.title} | Vaibhav Gupta`,
    description: article.summary,
  };
}

export default async function ExperienceWithArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = EXPERIENCE_WITH_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Get related project entities
  const relatedProjects = PROJECTS.filter((p) => article.whereIUsedIt.includes(p.id));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Back link */}
      <div>
        <Link
          href="/skills"
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-300 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Skills &amp; Technology Index</span>
        </Link>
      </div>

      {/* Article Header */}
      <div className="space-y-4 border-b border-slate-800 pb-8">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono uppercase bg-amber-500/10 text-amber-300 px-2.5 py-1 rounded border border-amber-500/20">
            {article.category}
          </span>
          <span className="text-xs font-mono text-slate-500">PRACTICAL EXPERIENCE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
          {article.title}
        </h1>
        <p className="text-base text-slate-300 font-serif-editorial leading-relaxed italic border-l-2 border-amber-500/50 pl-4 py-1">
          {article.summary}
        </p>
      </div>

      {/* Article Content Breakdown */}
      <div className="space-y-8 text-sm text-slate-300 leading-relaxed">
        {/* Section 1: First Encounter & Motivation */}
        <section className="space-y-3 p-6 rounded-xl bg-[#131b2e]/60 border border-slate-800">
          <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-amber-400" />
            <span>First Encounter &amp; Motivation</span>
          </h2>
          <p>{article.firstEncounter}</p>
          <p className="pt-2">{article.whyUsed}</p>
        </section>

        {/* Section 2: Key Engineering Lessons */}
        <section className="space-y-4 p-6 rounded-xl bg-[#131b2e]/60 border border-slate-800">
          <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>Lessons Learned Through Hands-on Work</span>
          </h2>
          <ul className="space-y-3">
            {article.lessonsLearned.map((lesson, idx) => (
              <li key={idx} className="flex items-start gap-3 bg-[#0d1322]/80 p-3.5 rounded-lg border border-slate-800/80">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{lesson}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Section 3: Engineering Challenges */}
        <section className="space-y-3 p-6 rounded-xl bg-[#131b2e]/60 border border-slate-800">
          <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span>Challenges &amp; Trade-offs</span>
          </h2>
          <p>{article.challenges}</p>
        </section>

        {/* Section 4: What I'd Do Differently */}
        <section className="space-y-3 p-6 rounded-xl bg-[#131b2e]/60 border border-slate-800">
          <h2 className="text-lg font-bold text-slate-100">What I Would Do Differently</h2>
          <p>{article.whatIdDoDifferently}</p>
        </section>

        {/* Section 5: Where I Used It (Project Mapping) */}
        <section className="space-y-4 pt-4 border-t border-slate-800">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-100">WHERE I USED IT</h2>
            <span className="text-xs font-mono text-slate-400">Relevant Project Implementations</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedProjects.map((project) => (
              <div
                key={project.id}
                className="p-4 rounded-lg bg-[#131b2e] border border-slate-800 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-100 text-sm">{project.title}</h3>
                  <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    {project.category}
                  </span>
                </div>
                <p className="text-xs text-slate-400">{project.tagline}</p>
                <div className="pt-2 text-xs">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-amber-300 hover:underline text-xs"
                    >
                      <span>View Project Repository</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
