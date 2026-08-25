export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  period: string;
  skills: string[];
}

export const EDUCATION_ENTRIES: EducationEntry[] = [
  {
    id: "gniot",
    institution: "Greater Noida Institute of Technology (GNIOT)",
    degree: "Bachelor of Technology, Computer Science",
    period: "Sep 2023 – May 2027",
    skills: ["Problem Solving", "Teamwork"]
  },
  {
    id: "rpm-academy",
    institution: "RPM Academy",
    degree: "Class 12, PCM",
    period: "Jun 2020 – May 2022",
    skills: ["Problem Solving", "Communication"]
  },
  {
    id: "springer-public-school",
    institution: "Springer Public School, Gorakhpur",
    degree: "Class 10, Science",
    period: "May 2018 – Jul 2020",
    skills: ["Teamwork", "Leadership"]
  }
];
