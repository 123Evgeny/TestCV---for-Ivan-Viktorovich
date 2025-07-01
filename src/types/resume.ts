export interface BaseSection {
  id: string;
  type: "experience" | "education" | "skills" | "certificates" | "about";
  order: number;
}

export interface ExperienceSection extends BaseSection {
  type: "experience";
  position: string;
  company: string;
  period: string;
  description: string;
}

export interface EducationSection extends BaseSection {
  type: "education";
  institution: string;
  degree: string;
  period: string;
}

export interface SkillsSection extends BaseSection {
  type: "skills";
  skills: string[];
}

export interface CertificatesSection extends BaseSection {
  type: "certificates";
  name: string;
  issuer: string;
  date: string;
}

export interface AboutSection extends BaseSection {
  type: "about";
  content: string;
}

export type ResumeSection =
  | ExperienceSection
  | EducationSection
  | SkillsSection
  | CertificatesSection
  | AboutSection;

export interface ResumeData {
  personalInfo: {
    name: string;
    surname: string;
    email: string;
    phone: string;
    location: string;
  };
  sections: ResumeSection[];
}

export interface ResumeTheme {
  primaryColor: string;
  fontFamily: string;
}
