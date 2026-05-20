import { CONTACT } from '../config/site-config';
import { Project } from '../models';

/**
 * Featured projects.
 *
 * TODO(Sief): each project links to `${githubUrl}/<repo>`. Update the repo
 * names below if they differ, and add `live` links where a demo is hosted.
 */
export const PROJECTS: readonly Project[] = [
  {
    slug: 'favourite-restaurant',
    title: 'FavouriteRestaurant',
    tagline: 'Full-stack bilingual restaurant ordering platform with real-time order tracking.',
    category: 'Full-Stack Web',
    year: '2025',
    featured: true,
    accent: '#f97316',
    overview: [
      'FavouriteRestaurant is a full-stack, bilingual restaurant ordering platform built on ' +
        'ASP.NET Core MVC and a four-project Clean Architecture solution. Customers browse ' +
        'menus, place orders and follow them in real time, while staff manage the kitchen ' +
        'workflow from a dedicated dashboard.',
      'Payments run through a Stripe pre-authorization and capture flow, live order updates ' +
        'are pushed over SignalR, and scheduled work is handled by Hangfire background jobs. ' +
        'The platform ships full Arabic / English localization with right-to-left support and ' +
        'exports Excel and PDF reports via EPPlus and QuestPDF.',
      'A 1M-context security audit hardened the authentication layer — a hybrid Cookie + JWT ' +
        'scheme, a dedicated antiforgery-token endpoint, and fixes for XSS and unsafe ' +
        'localStorage JWT handling.',
    ],
    stack: [
      'ASP.NET Core MVC (net9.0)',
      'Clean Architecture',
      'EF Core',
      'SQL Server',
      'ASP.NET Identity',
      'JWT',
      'Google OAuth',
      'SignalR',
      'Hangfire',
      'Stripe',
      'Firebase Cloud Messaging',
      'EPPlus',
      'QuestPDF',
      'SCSS',
    ],
    highlights: [
      '4-project Clean Architecture solution (Web / Application / Domain / Infrastructure)',
      'Stripe pre-authorization & capture payment flow',
      'Real-time order updates via SignalR',
      'Bilingual Arabic/English with full RTL support',
      'Hangfire background jobs for scheduled tasks',
      'Excel/PDF reporting with EPPlus and QuestPDF',
      'Hardened auth: hybrid Cookie + JWT, antiforgery token endpoint, fixed XSS and ' +
        'localStorage-JWT issues from a 1M-context security audit',
    ],
    links: [
      {
        type: 'github',
        label: 'Source code',
        url: `${CONTACT.githubUrl}/favourite-restaurant`,
      },
    ],
  },
  {
    slug: 'myhr',
    title: 'MyHR',
    tagline: 'Enterprise HR ERP with Payroll, Accounting, and Reporting modules.',
    category: 'Enterprise ERP',
    year: '2025',
    featured: true,
    accent: '#3b82f6',
    overview: [
      'MyHR is an enterprise HR ERP organised around three integrated modules: HR & Payroll, ' +
        'Accounting & Finance, and Reporting & Dashboards. It is built with ASP.NET Core MVC ' +
        'and a Clean Architecture solution using Entity Framework Core in a Code-First ' +
        'workflow.',
      'The HR module is feature-complete — Employees, Departments, Positions, Attendance, ' +
        'Leave and Employee Contracts — all backed by consistent repository, service and ' +
        'audit-log patterns. Hangfire handles recurring jobs and AutoMapper keeps the domain ' +
        'and view models cleanly separated.',
    ],
    stack: [
      'ASP.NET Core MVC',
      'Clean Architecture',
      'EF Core (Code First)',
      'Hangfire',
      'AutoMapper',
      'SQL Server',
    ],
    highlights: [
      'Three integrated modules: HR & Payroll, Accounting & Finance, Reporting & Dashboards',
      'HR module complete: Employee, Department, Position, Attendance, Leave, EmployeeContract',
      'Full repository / service / audit-log patterns',
      'Enterprise HR domain: payroll, attendance, leave and employee contracts',
    ],
    links: [
      {
        type: 'github',
        label: 'Source code',
        url: `${CONTACT.githubUrl}/myhr`,
      },
    ],
  },
  {
    slug: 'flowchart-studio',
    title: 'FlowchartStudio',
    tagline: '.NET 10 flowchart-building studio with Syncfusion Diagram integration.',
    category: 'Full-Stack Web',
    year: '2025',
    featured: false,
    accent: '#8b5cf6',
    overview: [
      'FlowchartStudio is a .NET 10 studio for building and editing flowcharts, with the ' +
        'Syncfusion Diagram component at its core. Phase 1 ships as an ASP.NET Core MVC ' +
        'monolith, with a Phase 2 migration to a Web API backend and a React front end ' +
        'already planned.',
      'Diagrams can be exported and re-imported as JSON, and a SignalR hub (FlowchartHub) ' +
        'provides the scaffolding for real-time collaborative editing. Authentication uses a ' +
        'hybrid Cookie + JWT scheme.',
    ],
    stack: [
      'ASP.NET Core MVC (.NET 10)',
      'SQL Server',
      'Syncfusion Diagram',
      'Hybrid Cookie + JWT auth',
    ],
    highlights: [
      'Phase 1: ASP.NET MVC monolith → Phase 2: Web API + React migration planned',
      'JSON import/export of diagrams',
      'Real-time collaboration scaffolding via SignalR (FlowchartHub)',
    ],
    links: [
      {
        type: 'github',
        label: 'Source code',
        url: `${CONTACT.githubUrl}/flowchart-studio`,
      },
    ],
  },
  {
    slug: 'car-price-ml',
    title: 'Used Car Price Prediction',
    tagline:
      'Regression model predicting used car prices from a 5,000-row Jordan-based synthetic ' +
      'dataset.',
    category: 'Machine Learning',
    year: '2026',
    featured: false,
    accent: '#10b981',
    overview: [
      'This project trains a regression model to predict used-car prices from a 5,000-row, ' +
        'Jordan-based synthetic dataset that I generated with realistic feature correlations ' +
        'and tuned pricing logic.',
      'The pipeline covers data cleaning, IQR-based outlier removal and a systematic ' +
        'comparison of encoding strategies. The final approach — One-Hot Encoding with a ' +
        'log1p target transform feeding a Linear Regression model — outperformed tree-based ' +
        'models such as XGBoost on this dataset.',
    ],
    stack: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'XGBoost', 'Matplotlib'],
    highlights: [
      'Full pipeline: cleaning, IQR outlier removal, encoding strategy comparison',
      'Final approach: One-Hot Encoding + log1p target transform + Linear Regression — ' +
        'outperformed tree-based models on this dataset',
      'Generated the synthetic dataset with realistic correlations and tuned pricing logic',
    ],
    links: [
      {
        type: 'github',
        label: 'Source code',
        url: `${CONTACT.githubUrl}/used-car-price-prediction`,
      },
    ],
  },
];
