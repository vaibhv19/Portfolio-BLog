import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { EXPERIENCE_WITH_ARTICLES } from "@/data/experienceWith";
import { PROJECTS } from "@/data/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

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

  const relatedProjects = PROJECTS.filter((p) => article.whereIUsedIt.includes(p.id));

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Back link */}
      <div>
        <Link
          href="/skills"
          className="text-xs font-mono text-slate-400 hover:text-slate-100 transition-colors inline-flex items-center gap-1"
        >
          <ArrowLeft className="w-3 h-3" />
          <span>Back to Skills Taxonomy</span>
        </Link>
      </div>

      {/* Article Header */}
      <div className="space-y-3 border-b border-slate-800 pb-6">
        <div className="text-xs font-mono uppercase text-slate-500">
          PRACTICAL EXPERIENCE — {article.category}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
          {article.title}
        </h1>
        <p className="text-base text-slate-300 font-serif-editorial italic leading-relaxed border-l-2 border-amber-400/80 pl-4 py-1">
          {article.summary}
        </p>
      </div>

      {/* Editorial Content Flow */}
      <div className="space-y-10 text-sm text-slate-300 leading-relaxed">
        {/* Section 1: First Encounter */}
        <section className="space-y-2">
          <h2 className="text-sm font-bold text-slate-100 font-mono uppercase tracking-wider text-amber-400">
            01 / First Encounter &amp; Motivation
          </h2>
          <p>{article.firstEncounter}</p>
          <p className="pt-2">{article.whyUsed}</p>
        </section>

        {/* Section 2: Lessons Learned */}
        <section className="space-y-3 pt-4 border-t border-slate-800/60">
          <h2 className="text-sm font-bold text-slate-100 font-mono uppercase tracking-wider text-amber-400">
            02 / Lessons Learned Through Hands-on Work
          </h2>
          <div className="space-y-3 pt-1">
            {article.lessonsLearned.map((lesson, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs">
                <span className="font-mono text-slate-500 font-bold">({idx + 1})</span>
                <span className="text-slate-200">{lesson}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Challenges */}
        <section className="space-y-2 pt-4 border-t border-slate-800/60">
          <h2 className="text-sm font-bold text-slate-100 font-mono uppercase tracking-wider text-amber-400">
            03 / Challenges &amp; Trade-offs
          </h2>
          <p>{article.challenges}</p>
        </section>

        {/* Section 4: What I'd Do Differently */}
        <section className="space-y-2 pt-4 border-t border-slate-800/60">
          <h2 className="text-sm font-bold text-slate-100 font-mono uppercase tracking-wider text-amber-400">
            04 / Retrospective Perspective
          </h2>
          <p>{article.whatIdDoDifferently}</p>
        </section>

        {/* Section 5: Where I Used It */}
        <section className="space-y-4 pt-6 border-t border-slate-800">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-100 font-mono uppercase tracking-wider">
              WHERE I USED IT
            </h2>
            <span className="text-[10px] font-mono text-slate-500">Project Evidence</span>
          </div>

          <div className="space-y-3">
            {relatedProjects.map((project) => (
              <div key={project.id} className="py-2 border-b border-slate-800/40 space-y-1 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-100">{project.title}</span>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-300 hover:underline text-[11px] font-mono flex items-center gap-1"
                    >
                      <span>Repository</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
                <p className="text-slate-400">{project.tagline}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
