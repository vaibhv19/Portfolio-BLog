export interface PatentRecord {
  id: string;
  title: string;
  field: string;
  description: string;
  pdfPath: string;
}

export const PATENT_RECORDS: PatentRecord[] = [
  {
    id: "patent-452200",
    title: "Design Patent Application 452200-001",
    field: "Software Systems & Hardware Interface Architecture",
    description: "Official registered patent document recording innovative architectural design and technical system specifications.",
    pdfPath: "/patent/452200-001 6853 .pdf"
  }
];
