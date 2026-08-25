import { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { PATENT_RECORDS } from "@/data/patents";

export const metadata: Metadata = {
  title: "Intellectual Property & Patents | Vaibhav Gupta",
  description: "Official design patent records and technical system specifications.",
};

export default function IntellectualPropertyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-12 space-y-6 text-slate-300">
      {/* Page Header */}
      <div className="space-y-2.5 border-b border-slate-800/80 pb-5">
        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-100">
          Intellectual Property &amp; Patents
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
          Registered design patents and formal intellectual property records covering novel software system architectures and technical designs.
        </p>
      </div>

      {/* Patent Records List */}
      <div className="space-y-8">
        {PATENT_RECORDS.map((patent) => (
            <div
              key={patent.id}
              className="border-b border-slate-800/60 pb-8 space-y-3 last:border-b-0 last:pb-0"
            >
              {/* Patent Title */}
              <div className="space-y-1">
                <h2 className="text-lg sm:text-xl font-bold">
                  <a
                    href={patent.pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-100 hover:underline transition-all inline-flex items-center gap-2 group"
                  >
                    <span>
                      {patent.title}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-copper flex-shrink-0" />
                  </a>
                </h2>

                {patent.subtitle && (
                  <div className="text-xs font-mono text-slate-400">
                    {patent.subtitle}
                  </div>
                )}
              </div>

              {/* Technical Field & Description */}
              <div className="space-y-2.5 pt-1 pl-4 sm:pl-6 border-l-2 border-slate-800/80 text-xs sm:text-sm">
                <div className="font-mono text-slate-400 text-xs">
                  Technical Field:{" "}
                  <span className="text-slate-200">{patent.field}</span>
                </div>

                <p className="text-slate-300 leading-relaxed">
                  {patent.description}
                </p>

              </div>
            </div>
        ))}
      </div>
    </div>
  );
}
