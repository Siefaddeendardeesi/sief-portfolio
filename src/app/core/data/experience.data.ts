import { EducationItem, ExperienceItem } from '../models';

export const EXPERIENCE: readonly ExperienceItem[] = [
  {
    role: 'Trainee Developer',
    company: 'Menaitech',
    location: 'Amman, Jordan',
    period: 'May 2025 – Present',
    current: true,
    summary: 'Developing features for enterprise HR software within Menaitech’s team.',
    highlights: [
      'Build and maintain HR product features with ASP.NET Core, EF Core and SQL Server.',
      'Work within an established enterprise codebase and team development workflow.',
      'Apply real HR-domain knowledge that directly shaped the MyHR side project.',
    ],
  },
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
