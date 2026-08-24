export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export const EXPERIENCE_ENTRIES: ExperienceEntry[] = [
  {
    id: "edunet-aicte-internship",
    role: "Emerging Technologies Intern",
    organization: "Edunet Foundation × AICTE",
    period: "2025",
    type: "Internship",
    summary: "Completed a four-week internship spanning Agentic AI, Cyber Security, Quantum Computing, and IBM Cloud.",
    highlights: [
      "Completed intensive tracks across Agentic AI, Cyber Security, Quantum Computing, and IBM Cloud infrastructure.",
      "Applied modern cloud architecture and containerization practices in hands-on practical evaluations.",
      "Earned verified industry credentials through AICTE and Edunet Foundation collaboration."
    ],
    technologies: ["Agentic AI", "Cyber Security", "Quantum Computing", "IBM Cloud", "Docker"]
  },
  {
    id: "ibm-pbel-internship",
    role: "Full Stack Web Development Intern",
    organization: "IBM Collaborative Project-Based Experiential Learning (PBEL)",
    period: "2025",
    type: "Internship",
    summary: "Built multiple full-stack web applications through IBM’s project-based experiential learning program.",
    highlights: [
      "Developed end-to-end full-stack web applications using modular service components.",
      "Collaborated on designing and building cloud-integrated software solutions under IBM mentorship.",
      "Demonstrated practical capability in REST API design, frontend state management, and cloud deployment."
    ],
    technologies: ["Full Stack Web Development", "React", "Node.js", "Cloud Architecture", "REST APIs"]
  }
];
