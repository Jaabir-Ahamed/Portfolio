import { Resume } from "@/types/resume";

export const resumeData: Resume = {
  name: "Jaabir Ahamed Saleem",
  location: "San Jose, CA",
  contact: {
    phone: "(510) 701-7153",
    email: "jaabirahamedsaleem@gmail.com",
    linkedin: "linkedin.com/in/jaabirahamed",
    github: "github.com/Jaabir-Ahamed",
  },
  education: [
    {
      institution: "San Jose State University",
      degree: "B.S. in Software Engineering",
      location: "San Jose, CA",
      expected_graduation: "June 2027",
    },
  ],
  technical_skills: {
    languages: ["Python", "JavaScript/TypeScript", "C#", "SQL"],
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Tailwind",
      "REST APIs",
      "Supabase (Auth, Storage, RLS)",
      "PostgreSQL",
      "Docker",
      "Git/GitHub",
    ],
    ai_llm: [
      "Google AI Studio (Gemini)",
      "PDF parsing/chunking",
      "prompt & JSON-schema design",
    ],
  },
  experience: [
    {
      organization: "Salam Food Pantry (Nonprofit)",
      title: "Product / Software Engineer (Volunteer)",
      location: "Fremont, CA",
      dates: {
        start: "Jun 2025",
        end: "Present",
      },
      highlights: [
        "Delivered full-stack MVP using Next.js and Supabase for real-time volunteer coordination and automated reporting, reducing admin workload by 80% for 47+ seniors monthly.",
        "Built role-based authentication, bulk data import, and multilingual admin dashboards to standardize intake and improve data quality across programs.",
        "Set up Supabase RLS policies and audit logging to protect PII while still enabling aggregate reporting for donors and board members.",
      ],
    },
    {
      organization: "Mainspring Energy",
      title: "Software Engineering Intern (University Project)",
      location: "Remote",
      dates: {
        start: "Jan 2025",
        end: "May 2025",
      },
      highlights: [
        "Developed Python & FastAPI service translating between HTTP and DDS, cutting integration time for new data types by 60% and manual conversion errors by 80%.",
        "Implemented connection pooling and request batching, decreasing latency on frequent operations by 30% and increasing distributed-system throughput.",
        "Collaborated with platform team to containerize the service with Docker and add health checks / metrics endpoints for observability.",
      ],
    },
  ],
  projects: [
    {
      name: "BrainDeck — AI Study Decks from PDFs",
      technologies: ["Next.js", "Supabase", "Google AI Studio (Gemini)"],
      dates: {
        start: "Aug 2025",
        end: "Present",
      },
      highlights: [
        "Convert course PDFs into editable Q–A/cloze flashcards with page citations, tagging, and spaced-repetition scheduling.",
        "Designed upload pipeline (extract → chunk → LLM (Gemini) → JSON validate) with provenance and difficulty tags stored in PostgreSQL.",
        "Implemented Quiz Mode (Kahoot-style) plus progress tracking, and hardened auth/routing for first-time sign-in and landing flows.",
      ],
    },
    {
      name: "Photo Album Manager",
      technologies: ["Java (Swing)", "MVC", "Iterator", "Strategy"],
      dates: {
        start: "Mar 2025",
        end: "Jun 2025",
      },
      highlights: [
        "Built desktop photo manager supporting add/view/delete and sort by name, date, and size, with robust error handling for empty albums and invalid paths.",
        "Applied MVC, Iterator, and Strategy patterns to separate UI, model, and sorting behavior for easier extension and testing.",
      ],
    },
  ],
  leadership_and_activities: [
    {
      organization: "SJSU High Speed Autonomous Plane (H.S.A.P.)",
      title: "Project Manager",
      location: "San Jose, CA",
      dates: {
        start: "Aug 2025",
        end: "Present",
      },
      highlights: [
        "Lead multidisciplinary team of 20 using GitHub Projects and Jira to plan sprints, track issues, and deliver iterations on schedule.",
      ],
    },
  ],
};

