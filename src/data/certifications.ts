export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  issueDate?: string;
  pdfPath: string;
  featured: boolean;
  homeOrder?: number;
}

export const CERTIFICATIONS: Certification[] = [
  // ── 2026 ──────────────────────────────────────────────
  {
    id: "nasscom-eda",
    title: "Exploratory Data Analysis",
    issuer: "FutureSkills Prime / NASSCOM IT-ITeS SSC",
    year: "2026",
    issueDate: "25 Jul 2026",
    pdfPath: "/certificates/Vaibhav_Gupta_Exploratory Data Analysis.pdf",
    featured: false
  },
  {
    id: "ibm-quantum",
    title: "Exploring Quantum Computing",
    issuer: "IBM SkillsBuild",
    year: "2026",
    issueDate: "08 Jul 2026",
    pdfPath: "/certificates/Exploring Quantum Computing.pdf",
    featured: false
  },
  {
    id: "ibm-cybersecurity",
    title: "Getting Started with Cybersecurity",
    issuer: "IBM SkillsBuild",
    year: "2026",
    issueDate: "19 Jun 2026",
    pdfPath: "/certificates/Getting Started with Cybersecurity.pdf",
    featured: false
  },
  {
    id: "ibm-troubleshoot-bob",
    title: "Lab: Troubleshoot Your Code Using IBM Bob",
    issuer: "IBM SkillsBuild",
    year: "2026",
    issueDate: "19 Jun 2026",
    pdfPath: "/certificates/Troubleshoot Your Code Using IBM Bob.pdf",
    featured: false
  },
  {
    id: "ibm-intro-ai",
    title: "Introduction to Artificial Intelligence",
    issuer: "IBM SkillsBuild",
    year: "2026",
    issueDate: "16 Jun 2026",
    pdfPath: "/certificates/Completion Certificate _ SkillsBuild.pdf",
    featured: false
  },

  // ── 2025 ──────────────────────────────────────────────
  {
    id: "iitk-oops-cpp",
    title: "OOPS with C++",
    issuer: "E&ICT Academy, IIT Kanpur",
    year: "2025",
    issueDate: "17 Dec 2025",
    pdfPath: "/certificates/Certificate - E&ICT Academy, IIT Kanpur.pdf",
    featured: true,
    homeOrder: 2
  },
  {
    id: "nptel-python",
    title: "The Joy of Computing using Python",
    issuer: "NPTEL",
    year: "2025",
    issueDate: "Jul – Oct 2025",
    pdfPath: "/certificates/The Joy of Computing using Python.pdf",
    featured: true,
    homeOrder: 1
  },
  {
    id: "simplilearn-docker",
    title: "Getting Started with Docker",
    issuer: "Simplilearn SkillUp",
    year: "2025",
    issueDate: "22 Aug 2025",
    pdfPath: "/certificates/simpliLearn  docker.pdf",
    featured: false
  },
  {
    id: "simplilearn-java",
    title: "Java Programming for Beginners",
    issuer: "Simplilearn SkillUp",
    year: "2025",
    issueDate: "22 Aug 2025",
    pdfPath: "/certificates/simpliLearn Java.pdf",
    featured: false
  },
  {
    id: "simplilearn-mongodb",
    title: "Introduction to MongoDB",
    issuer: "Simplilearn SkillUp",
    year: "2025",
    issueDate: "22 Aug 2025",
    pdfPath: "/certificates/simplilearn mongoDB.pdf",
    featured: false
  },
  {
    id: "iitk-c-programming",
    title: "C Programming",
    issuer: "E&ICT Academy, IIT Kanpur",
    year: "2025",
    issueDate: "14 May 2025",
    pdfPath: "/certificates/IFACET IITK.pdf",
    featured: true,
    homeOrder: 3
  }
];
