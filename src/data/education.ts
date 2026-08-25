export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  period: string;
}

export const EDUCATION_ENTRIES: EducationEntry[] = [
  {
    id: "gniot",
    institution: "Greater Noida Institute of Technology (GNIOT)",
    degree: "Bachelor of Technology, Computer Science",
    period: "Sep 2023 – May 2027",
  },
  {
    id: "rpm-academy",
    institution: "RPM Academy",
    degree: "Class 12, PCM",
    period: "Jun 2020 – May 2022",
  },
  {
    id: "springer-public-school",
    institution: "Springer Public School, Gorakhpur",
    degree: "Class 10, Science",
    period: "May 2018 – Jul 2020",
  }
];
