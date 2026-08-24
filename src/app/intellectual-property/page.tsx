import { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { PATENT_RECORDS } from "@/data/patents";

export const metadata: Metadata = {
  title: "Intellectual Property & Patents | Vaibhav Gupta",
  description: "Official design patent records and technical system specifications.",
};

export default function IntellectualPropertyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Page Header */}
      <div className="space-y-3 border-b border-slate-800 pb-6">
        <div className="text-xs font-mono uppercase tracking-widest text-slate-500">
          INTELLECTUAL PROPERTY RECORD
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100">
          Intellectual Property &amp; Patents
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
          Registered design patents and formal intellectual property records covering novel software system architectures and technical designs.
        </p>
      </div>

      {/* Patent Records List */}
      <div className="space-y-8">
        {PATENT_RECORDS.map((patent) => (
          <div
            key={patent.id}
            className="border-b border-slate-800/80 pb-6 space-y-3"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase text-amber-400">
                  {patent.status}
                </span>
                <h2 className="text-xl font-bold text-slate-100">{patent.title}</h2>
                <div className="text-xs font-mono text-slate-400">
                  Application / Registration No: <span className="text-slate-200 font-semibold">{patent.applicationNumber}</span>
                </div>
              </div>
              <a
                href={patent.pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-amber-300 hover:underline flex items-center gap-1 shrink-0 pt-1"
              >
                <span>Open Patent PDF Document</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="space-y-1 text-xs text-slate-300">
              <div className="font-mono text-slate-500">
                Technical Field: <span className="text-slate-300">{patent.field}</span>
              </div>
              <p className="text-slate-400 leading-relaxed pt-1">
                {patent.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
