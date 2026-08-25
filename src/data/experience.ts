export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  githubUrl?: string;
}

export const EXPERIENCE_ENTRIES: ExperienceEntry[] = [
  {
    id: "ibm-pbel-internship",
    role: "Full Stack Web Development Intern",
    organization: "IBM Collaborative Project-Based Experiential Learning (PBEL)",
    period: "JUL 16, 2026",
    type: "Internship",
    summary: "Built multiple full-stack web applications through IBM’s project-based experiential learning program.",
    highlights: [
      "Developed end-to-end full-stack web applications using modular service components.",
      "Collaborated on designing and building cloud-integrated software solutions under IBM mentorship.",
      "Demonstrated practical capability in REST API design, frontend state management, and cloud deployment.",
      "Worked on [The Tiffin Dispatch](https://github.com/vaibhv19/food-ordering-system) project as part of the program.",
      "Worked on [E-commerce Website](https://github.com/vaibhv19/E--commerce-Website) project as part of the program.",
      "Worked on [Social Media Backend](https://github.com/vaibhv19/Social-Media-Backend) project as part of the program.",
      "Worked on [Weather App](https://github.com/vaibhv19/Weather-App) project as part of the program."
    ],
    technologies: ["Full Stack Web Development", "React", "Node.js", "Cloud Architecture", "REST APIs"],
    githubUrl: "https://github.com/vaibhv19/IBM-PBEL"
  },
  {
    id: "lenovo-leap-internship",
    role: "Intern / NextGen Scholar",
    organization: "Lenovo — LEAP NextGen Scholar Program",
    period: "JUN 15, 2026 — JUL 30, 2026",
    type: "Internship",
    summary: "Completed a six-week internship focused on AI-driven web application and frontend product development.",
    highlights: [
      "Built [VidyaLink](https://github.com/vaibhv19/VidyaLink), the capstone peer-learning platform and resource vault with live search, topic filtering, and doubt clearance.",
      "Developed modular component-driven user interfaces and client-side management workflows using React, Vite, and React Router.",
      "Implemented client-side data persistence with LocalStorage and SessionStorage alongside responsive UI design."
    ],
    technologies: ["React", "Vite", "JavaScript", "React Router", "LocalStorage", "UI Engineering"],
    githubUrl: "https://github.com/vaibhv19/Lenovo-leap-Internship"
  },
  {
    id: "edunet-aicte-internship",
    role: "Emerging Technologies Intern",
    organization: "Edunet Foundation × AICTE",
    period: "JUN 12, 2026 — JUL 10, 2026",
    type: "Internship",
    summary: "Completed a four-week internship spanning Agentic AI, Cyber Security, Quantum Computing, and IBM Cloud.",
    highlights: [
      "Completed intensive tracks across Agentic AI, Cyber Security, Quantum Computing, and IBM Cloud infrastructure.",
      "Worked on the [Startup Blueprint Generator](https://github.com/vaibhv19/startup-blueprint-generator) project, developing a document-retrieval agent framework with LangChain, vector search, and Streamlit.",
      "Applied modern cloud architecture and containerization practices in hands-on practical evaluations.",
      "Earned verified industry credentials through AICTE and Edunet Foundation collaboration."
    ],
    technologies: ["Agentic AI", "Cyber Security", "Quantum Computing", "IBM Cloud", "Docker"],
    githubUrl: "https://github.com/vaibhv19/IBM-Skillbuild"
  }
];
