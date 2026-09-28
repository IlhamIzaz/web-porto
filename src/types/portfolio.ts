export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Machine Learning" | "Business Intelligence" | "Data Engineering" | "NLP & Deep Learning" | "Statistical Analysis";
  description: string;
  problem: string;
  approach: string[];
  metrics: { label: string; value: string }[];
  technologies: string[];
  datasetInfo: string;
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  publishedDate: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: "Advanced" | "Proficient" | "Familiar";
    highlight?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: "Full-Time" | "Contract" | "Internship" | "Freelance";
  description: string;
  highlights: string[];
  tools: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  major: string;
  institution: string;
  period: string;
  description: string;
  relevantCourses: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  skillsCovered: string[];
}

export interface InsightArticle {
  id: string;
  title: string;
  readTime: string;
  date: string;
  category: string;
  summary: string;
  keyTakeaway: string;
}
