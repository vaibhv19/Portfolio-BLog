import { Metadata } from "next";
import { Award, ExternalLink, FileText, CheckCircle2 } from "lucide-react";
import { CERTIFICATIONS } from "@/data/certifications";

export const metadata: Metadata = {
  title: "Certifications & Verified Credentials | Vaibhav Gupta",
  description: "Archival list of formal certifications, NPTEL Elite credentials, IIT Kanpur certificates, and IBM SkillsBuild badges.",
};

export default function CertificationsPage() {
  const years = ["2026", "2025", "2024"];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Page Header */}
      <div className="space-y-4 border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
          <Award className="w-3.5 h-3.5" />
          <span>VERIFIED CREDENTIAL ARCHIVE</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100">
          Certifications &amp; Credentials
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
          Archival record of formal course completions, NPTEL certifications, and IBM credentials. Clicking any certificate title opens the original PDF document directly.
        </p>
      </div>

      {/* Year-grouped Archival List */}
      <div className="space-y-10">
        {years.map((year) => {
          const certsInYear = CERTIFICATIONS.filter((c) => c.year === year);
          if (certsInYear.length === 0) return null;

          return (
            <div key={year} className="space-y-4">
              <div className="text-lg font-mono font-bold text-amber-400 border-b border-slate-800/80 pb-2">
                {year}
              </div>

              <div className="divide-y divide-slate-800/60 rounded-xl bg-[#131b2e]/60 border border-slate-800/80 overflow-hidden">
                {certsInYear.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#18233a] transition-colors group"
                  >
                    <div className="space-y-1">
                      <a
                        href={cert.pdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-base font-bold text-slate-100 group-hover:text-amber-300 transition-colors"
                      >
                        <span>{cert.title}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-amber-400 opacity-80 group-hover:opacity-100 transition-opacity" />
                      </a>
                      <div className="text-xs text-slate-400 flex items-center gap-2">
                        <span>{cert.issuer}</span>
                        {cert.issueDate && (
                          <>
                            <span>•</span>
                            <span>{cert.issueDate}</span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-auto">
                      {cert.recognition && (
                        <span className="text-[10px] font-mono bg-amber-500/10 text-amber-300 px-2.5 py-1 rounded border border-amber-500/20">
                          {cert.recognition}
                        </span>
                      )}
                      <a
                        href={cert.pdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-xs font-mono text-slate-300 flex items-center gap-1 transition-colors"
                      >
                        <FileText className="w-3.5 h-3.5 text-amber-400" />
                        <span>PDF</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
