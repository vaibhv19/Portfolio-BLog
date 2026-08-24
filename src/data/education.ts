export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  specialization: string;
  period: string;
  status: string;
  highlights: string[];
}

export const EDUCATION_ENTRIES: EducationEntry[] = [
  {
    id: "gniot",
    institution: "Greater Noida Institute of Technology (GNIOT)",
    degree: "Bachelor of Technology, Computer Science",
    specialization: "Computer Science & Engineering",
    period: "2023 – 2027",
    status: "In Progress",
    highlights: [
      "Core coursework in Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Database Management Systems, and Computer Networks.",
      "Hands-on technical project development across distributed caching, multi-agent AI systems, and cloud-deployed applications.",
      "Active participation in technical learning initiatives, IBM SkillsBuild programs, and independent software research."
    ]
  }
];
