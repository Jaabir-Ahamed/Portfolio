export interface Resume {
  name: string;
  location: string;
  contact: {
    phone: string;
    email: string;
    linkedin: string;
    github: string;
  };
  education: Education[];
  technical_skills: {
    languages: string[];
    technologies: string[];
    ai_llm: string[];
  };
  experience: Experience[];
  projects: Project[];
  leadership_and_activities: Leadership[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  expected_graduation: string;
}

export interface Experience {
  organization: string;
  title: string;
  location: string;
  dates: {
    start: string;
    end: string;
  };
  highlights: string[];
}

export interface Project {
  name: string;
  technologies: string[];
  dates: {
    start: string;
    end: string;
  };
  highlights: string[];
}

export interface Leadership {
  organization: string;
  title: string;
  location: string;
  dates: {
    start: string;
    end: string;
  };
  highlights: string[];
}

