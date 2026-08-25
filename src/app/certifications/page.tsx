import { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { CERTIFICATIONS } from "@/data/certifications";

export const metadata: Metadata = {
  title: "Certifications & Verified Credentials | Vaibhav Gupta",
  description: "Archival list of formal certifications, credentials, IIT Kanpur certificates, and IBM SkillsBuild badges.",
};

export default function CertificationsPage() {
  const years = ["2026", "2025"];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-12 space-y-6 text-slate-300">
      {/* Page Header */}
      <div className="space-y-2.5 border-b border-slate-800/80 pb-5">
        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-100">
          Certifications &amp; Credentials
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
          Archival record of formal course completions, credentials, and technical certifications. Clicking any certificate title opens the original PDF document directly.
        </p>
      </div>

      {/* Year-grouped Archival List */}
      <div className="space-y-8">
        {years.map((year) => {
          const certsInYear = CERTIFICATIONS.filter((c) => c.year === year);
          if (certsInYear.length === 0) return null;

          return (
            <div key={year} className="space-y-4">
              {/* Year Section Header */}
              <div className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase border-b border-slate-800/80 pb-1.5">
                {year}
              </div>

              {/* Certification Items List */}
              <div className="space-y-4 pt-1">
                {certsInYear.map((cert, cIdx) => {
                  const indexStr = `${cIdx + 1} /`;
                  return (
                    <div
                      key={cert.id}
                      className="space-y-1"
                    >
                      {/* Certificate Title Link */}
                      <h2 className="text-base sm:text-lg font-bold">
                        <a
                          href={cert.pdfPath}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-100 hover:underline transition-none inline-flex items-center gap-2 group"
                        >
                          <span>
                            {indexStr} {cert.title}
                          </span>
                          <ExternalLink className="w-3.5 h-3.5 text-copper flex-shrink-0" />
                        </a>
                      </h2>

                      {/* Issuer & Date Metadata */}
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                        <span className="text-slate-300">{cert.issuer}</span>
                        {cert.issueDate && (
                          <>
                            <span className="text-slate-600">·</span>
                            <span className="text-slate-400">{cert.issueDate}</span>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
