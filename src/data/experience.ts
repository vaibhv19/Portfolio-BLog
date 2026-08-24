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
    id: "ibm-edunet-internship",
    role: "Emerging Technologies Intern",
    organization: "IBM SkillsBuild × Edunet Foundation",
    period: "2025 – Present",
    type: "Internship",
    summary: "Emerging Technologies internship focusing on AI systems, cloud architecture, and modern full-stack development practices under IBM SkillsBuild and Edunet Foundation.",
    highlights: [
      "Worked on emerging technologies including AI model integration, backend engineering, and cloud deployment.",
      "Completed hands-on practical tracks and earned verified IBM credentials in AI and cloud tools.",
      "Applied industry best practices for project structure, containerization, and clean code documentation."
    ],
    technologies: ["Python", "Artificial Intelligence", "Cloud Architecture", "Docker", "REST APIs"]
  },
  {
    id: "ibm-pbel",
    role: "Project-Based Experiential Learning Contributor",
    organization: "IBM Collaborative PBEL",
    period: "2025",
    type: "Experiential Learning",
    summary: "Project-Based Experiential Learning program developing cloud-connected software solutions and architectural prototypes.",
    highlights: [
      "Collaborated on designing and building cloud-integrated software solutions under IBM mentorship.",
      "Implemented modular service components and verified system behavior through structured testing.",
      "Demonstrated practical capability in cloud integration, API design, and containerized deployment."
    ],
    technologies: ["Cloud Computing", "Python", "Docker", "REST APIs", "IBM Cloud Services"]
  }
];
