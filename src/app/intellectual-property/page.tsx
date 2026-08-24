import { Metadata } from "next";
import { ShieldCheck, FileText, ExternalLink, Award, CheckCircle2 } from "lucide-react";
import { PATENT_RECORDS } from "@/data/patents";

export const metadata: Metadata = {
  title: "Intellectual Property & Patents | Vaibhav Gupta",
  description: "Official design patent records and technical system specifications.",
};

export default function IntellectualPropertyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Page Header */}
      <div className="space-y-4 border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>INTELLECTUAL PROPERTY RECORD</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100">
          Intellectual Property &amp; Patents
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
          Registered design patents and formal intellectual property records covering novel software system architectures and technical designs.
        </p>
      </div>

      {/* Patent Records List */}
      <div className="space-y-6">
        {PATENT_RECORDS.map((patent) => (
          <div
            key={patent.id}
            className="p-6 sm:p-8 rounded-xl bg-[#131b2e]/70 border border-slate-800 space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
              <div>
                <span className="text-[10px] font-mono bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded border border-amber-500/20">
                  {patent.status}
                </span>
                <h2 className="text-xl font-bold text-slate-100 mt-2">{patent.title}</h2>
                <div className="text-xs font-mono text-slate-400 mt-1">
                  Application / Registration No: <span className="text-amber-300 font-semibold">{patent.applicationNumber}</span>
                </div>
              </div>
              <a
                href={patent.pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold flex items-center gap-1.5 transition-colors self-start sm:self-auto"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Open Patent PDF Document</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="font-mono text-slate-400">
                Technical Field: <span className="text-slate-200">{patent.field}</span>
              </div>
              <p className="text-slate-300 leading-relaxed pt-1">
                {patent.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
