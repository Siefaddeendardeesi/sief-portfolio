import { EducationItem, ExperienceItem } from '../models';

export const EXPERIENCE: readonly ExperienceItem[] = [
  {
    role: 'Full Stack Developer Trainee',
    company: 'A Plus Academy',
    location: 'Amman, Jordan',
    period: 'Dec 2023 – Dec 2024',
    current: false,
    summary: 'Year-long full-stack training programme across the .NET and web stack.',
    highlights: [
      'Completed structured training in C#, ASP.NET Core and SQL Server.',
      'Built full-stack web applications from database design through to the UI.',
      'Practised Clean Architecture, EF Core and modern front-end fundamentals.',
    ],
  },
];

export const EDUCATION: readonly EducationItem[] = [
  {
    degree: 'B.Sc. in Software Engineering',
    institution: 'Üsküdar University',
    location: 'Istanbul, Turkey',
    period: 'Graduated 2023',
    summary:
      'Studied software engineering fundamentals — algorithms, software design, databases ' +
      'and modern development practices.',
  },
];
