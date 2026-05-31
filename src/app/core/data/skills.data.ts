import { SkillGroup } from '../models';

export const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    title: 'Backend',
    icon: 'backend',
    skills: [
      'ASP.NET Core',
      'C#',
      '.NET 9 / 10',
      'Entity Framework Core',
      'Clean Architecture',
      'SignalR',
      'Hangfire',
      'AutoMapper',
      'JWT',
      'ASP.NET Identity',
    ],
  },
  {
    title: 'Frontend',
    icon: 'frontend',
    skills: ['TypeScript', 'SCSS', 'HTML5', 'JavaScript'],
  },
  {
    title: 'Databases',
    icon: 'database',
    skills: ['SQL Server', 'EF Core (Code First)', 'LINQ'],
  },
  {
    title: 'DevOps & Tools',
    icon: 'devops',
    skills: ['Git', 'GitHub'],
  },
  {
    title: 'Integrations',
    icon: 'integrations',
    skills: ['Stripe', 'Firebase', 'Google OAuth', 'Syncfusion', 'EPPlus', 'QuestPDF'],
  },
  {
    title: 'AI / ML',
    icon: 'ai',
    note: 'Currently learning',
    skills: ['Python', 'Feature Engineering'],
  },
];
