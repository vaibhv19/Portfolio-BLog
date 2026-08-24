import { Metadata } from "next";
import { ExternalLink } from "lucide-react";
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
      <div className="space-y-3 border-b border-slate-800 pb-6">
        <div className="text-xs font-mono uppercase tracking-widest text-slate-500">
          VERIFIED CREDENTIAL ARCHIVE
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100">
          Certifications &amp; Credentials
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
          Archival record of formal course completions, NPTEL certifications, and IBM credentials. Clicking any certificate title opens the original PDF document directly.
        </p>
      </div>

      {/* Year-grouped Archival List */}
      <div className="space-y-10">
        {years.map((year) => {
          const certsInYear = CERTIFICATIONS.filter((c) => c.year === year);
          if (certsInYear.length === 0) return null;

          return (
            <div key={year} className="space-y-3">
              <div className="text-sm font-mono font-bold text-amber-400 border-b border-slate-800 pb-1">
                {year}
              </div>

              <div className="divide-y divide-slate-800/60">
                {certsInYear.map((cert) => (
                  <div
                    key={cert.id}
                    className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs group"
                  >
                    <div className="space-y-0.5">
                      <a
                        href={cert.pdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-slate-100 group-hover:text-amber-300 transition-colors inline-flex items-center gap-1.5"
                      >
                        <span>{cert.title}</span>
                        <ExternalLink className="w-3 h-3 text-amber-400" />
                      </a>
                      <div className="text-slate-400 text-[11px] flex items-center gap-2">
                        <span>{cert.issuer}</span>
                        {cert.issueDate && (
                          <>
                            <span>•</span>
                            <span>{cert.issueDate}</span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-auto font-mono text-[10px]">
                      {cert.recognition && (
                        <span className="text-amber-300 bg-amber-400/10 px-2 py-0.5 border border-amber-400/20">
                          {cert.recognition}
                        </span>
                      )}
                      <a
                        href={cert.pdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-slate-200 underline"
                      >
                        PDF Document ↗
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
