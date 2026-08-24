export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  issueDate?: string;
  recognition?: string;
  pdfPath: string;
  featured: boolean;
  homeOrder?: number;
}

export const CERTIFICATIONS: Certification[] = [
  {
    id: "nptel-python",
    title: "The Joy of Computing using Python",
    issuer: "NPTEL",
    year: "2025",
    recognition: "Elite",
    pdfPath: "/certificates/The Joy of Computing using Python.pdf",
    featured: true,
    homeOrder: 1
  },
  {
    id: "iitk-oops-cpp",
    title: "OOPS with C++",
    issuer: "E&ICT Academy, IIT Kanpur",
    year: "2024",
    recognition: "Verified Certificate",
    pdfPath: "/certificates/IFACET IITK.pdf",
    featured: true,
    homeOrder: 2
  },
  {
    id: "iitk-c-programming",
    title: "C Programming",
    issuer: "E&ICT Academy, IIT Kanpur",
    year: "2024",
    recognition: "Verified Certificate",
    pdfPath: "/certificates/Certificate - E&ICT Academy, IIT Kanpur.pdf",
    featured: true,
    homeOrder: 3
  },
  {
    id: "nasscom-eda",
    title: "Exploratory Data Analysis",
    issuer: "FutureSkills Prime / NASSCOM IT-ITeS SSC",
    year: "2026",
    issueDate: "25 July 2026",
    recognition: "Gold Assessment",
    pdfPath: "/certificates/Vaibhav_Gupta_Exploratory Data Analysis.pdf",
    featured: false
  },
  {
    id: "ibm-troubleshoot-bob",
    title: "Lab: Troubleshoot Your Code Using IBM Bob",
    issuer: "IBM SkillsBuild",
    year: "2026",
    pdfPath: "/certificates/Troubleshoot Your Code Using IBM Bob.pdf",
    featured: false
  },
  {
    id: "ibm-quantum",
    title: "Exploring Quantum Computing",
    issuer: "IBM SkillsBuild",
    year: "2025",
    pdfPath: "/certificates/Exploring Quantum Computing.pdf",
    featured: false
  },
  {
    id: "ibm-intro-ai",
    title: "Getting Started with Artificial Intelligence",
    issuer: "IBM SkillsBuild",
    year: "2025",
    pdfPath: "/certificates/getting Started with AI.pdf",
    featured: false
  },
  {
    id: "ibm-cybersecurity",
    title: "Getting Started with Cybersecurity",
    issuer: "IBM SkillsBuild",
    year: "2025",
    pdfPath: "/certificates/Getting Started with Cybersecurity.pdf",
    featured: false
  },
  {
    id: "simplilearn-docker",
    title: "Getting Started with Docker",
    issuer: "Simplilearn SkillUp",
    year: "2025",
    pdfPath: "/certificates/simpliLearn  docker.pdf",
    featured: false
  },
  {
    id: "simplilearn-mongodb",
    title: "Introduction to MongoDB",
    issuer: "Simplilearn SkillUp",
    year: "2025",
    pdfPath: "/certificates/simplilearn mongoDB.pdf",
    featured: false
  },
  {
    id: "simplilearn-java",
    title: "Java Programming for Beginners",
    issuer: "Simplilearn SkillUp",
    year: "2024",
    pdfPath: "/certificates/simpliLearn Java.pdf",
    featured: false
  }
];
