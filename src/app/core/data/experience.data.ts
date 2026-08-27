import { EducationItem, ExperienceItem } from '../models';

export const EXPERIENCE: readonly ExperienceItem[] = [
  {
    role: 'Backend Developer',
    company: 'Menaitech',
    location: 'Amman, Jordan',
    period: 'May 2025 – Present',
    current: true,
    summary:
      'Build and maintain enterprise HR and B2B advisory platforms on ASP.NET Core (.NET 9), ' +
      'and integrate AI capabilities into production business software.',
    highlights: [
      'Build and maintain enterprise HR and B2B advisory platforms using ASP.NET Core (.NET 9) ' +
        'and Entity Framework Core, applying Clean Architecture and modular monolith principles.',
      'Design and implement RESTful APIs and domain service layers with a DTO, interface, ' +
        'service, and endpoint pattern, supported by architecture tests to enforce module ' +
        'boundaries.',
      'Deliver bilingual (Arabic/English) application support, including localization ' +
        'resources, RTL handling, and runtime language switching.',
      'Model and query relational data in SQL Server, including large multi-table schemas ' +
        'covering job architecture, compensation benchmarking, and pay equity.',
      'Integrate AI capabilities into production business software, including RAG pipelines, ' +
        'Python FastAPI agent layers, and LLM-driven matching and recommendation workflows.',
      'Contribute to code quality through frontend and security audits addressing XSS risks, ' +
        'authentication hardening, localization gaps, and web performance optimization.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Menaitech',
    location: 'Amman, Jordan',
    period: 'May 2024 – September 2024',
    current: false,
    summary:
      'Contributed to the enterprise HR system using ASP.NET Core, Clean Architecture and ' +
      'Entity Framework Core within an Agile team.',
    highlights: [
      'Contributed to features of the enterprise HR system using ASP.NET Core.',
      'Applied Clean Architecture principles and EF Core in backend feature development.',
      'Hands-on database management with SQL Server and SSMS.',
      'Collaborated with the development team on real-world HR software delivery in an Agile ' +
        'workflow.',
    ],
  },
  {
    role: 'HR Assistant',
    company: 'W&D for Clothing Industry',
    location: 'Amman, Jordan',
    period: 'July 2023 – May 2024',
    current: false,
    summary:
      'Supported human resources functions including recruitment coordination and ' +
      'administrative operations.',
    highlights: [
      'Supported HR functions including recruitment coordination and administrative operations.',
      'Maintained employee records and supported day-to-day office operations.',
    ],
  },
  {
    role: 'Student Volunteer',
    company: 'ISSTeam, Üsküdar University International Office',
    location: 'Istanbul, Türkiye',
    period: 'June 2021 – July 2022',
    current: false,
    summary:
      'Supported international students with registration, orientation and administrative ' +
      'processes across Arabic, English and Turkish.',
    highlights: [
      'Supported international students with registration, orientation, and administrative ' +
        'processes.',
      'Helped students facing language barriers using Arabic, English, and Turkish.',
      'Organized and supported student events.',
    ],
  },
];

export const EDUCATION: readonly EducationItem[] = [
  {
    degree: 'B.Sc. in Computer Software Engineering',
    institution: 'Üsküdar University',
    location: 'Istanbul, Türkiye',
    period: 'October 2018 – June 2022',
    summary: 'Coursework in algorithms, software design, databases, and full-stack development.',
  },
  {
    degree: 'Professional Certificate, Full Stack Developer',
    institution: 'A Plus Academy',
    location: 'Amman, Jordan',
    period: 'January 2024 – June 2024',
    summary:
      'Intensive training in full-stack web development covering front-end and back-end ' +
      'technologies and scalable application design.',
  },
];

/** Professional certifications, rendered alongside the education cards. */
export const CERTIFICATIONS: readonly string[] = [
  'Kubernetes Fundamentals',
  'Python Data Structures — University of Michigan (Coursera)',
  'Programming for Everybody: Getting Started with Python — University of Michigan (Coursera)',
  'Getting Started with Firebase Cloud Firestore',
  'Full Stack Developer — A Plus Academy',
];
