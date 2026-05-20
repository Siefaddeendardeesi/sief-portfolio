import { EducationItem, ExperienceItem } from '../models';

export const EXPERIENCE: readonly ExperienceItem[] = [
  {
    role: 'Full Stack Developer Trainee',
    company: 'A+ Academy',
    location: 'Amman, Jordan',
    period: 'Jul 2024 – Jan 2025',
    current: false,
    summary:
      'Completed the 300-hour Full Stack Web Development Program — C#, ASP.NET Core, SQL Server, ' +
      'and full-stack web development.',
    highlights: [
      'Certificate of completion — Full Stack Web Development Program (No. 13/7/152).',
      'Structured training in C#, ASP.NET Core and SQL Server.',
      'Built web applications from database design through to the UI.',
    ],
  },
];

export const EDUCATION: readonly EducationItem[] = [
  {
    degree: 'Full Stack Web Development Program',
    institution: 'A+ Academy · TVSDC Jordan',
    location: 'Amman, Jordan',
    period: 'Jul 2024 – Jan 2025 · 300 hours',
    summary:
      'Certificate of completion (No. 13/7/152). Licensed training programme covering C#, ' +
      'ASP.NET Core, SQL Server, and full-stack web development.',
    imagePath: 'assets/credentials/a-plus-academy-certificate.png',
  },
  {
    degree: 'B.Sc. in Software Engineering',
    institution: 'Üsküdar University',
    location: 'Istanbul, Turkey',
    period: 'Graduated 2023',
    summary: 'Coursework in algorithms, software design, databases, and full-stack development.',
  },
];
