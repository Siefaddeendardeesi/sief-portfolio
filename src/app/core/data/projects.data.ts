import { CONTACT } from '../config/site-config';
import { Project } from '../models';

/**
 * Featured projects.
 *
 * Each project links to `${githubUrl}/<repo>`; add `live` links where a demo
 * is hosted.
 */
export const PROJECTS: readonly Project[] = [
  {
    slug: 'favourite-restaurant',
    title: 'Favourite Restaurant',
    tagline: 'Full-stack bilingual restaurant ordering platform with real-time order tracking.',
    category: 'Full-Stack Web',
    year: '2024 – 2025',
    featured: true,
    accent: '#f97316',
    overview: [
      'Favourite Restaurant is a full-stack ordering platform built as a multi-layered ' +
        'solution (Web, Application, Domain, Infrastructure) covering restaurant discovery, ' +
        'ordering, and real-time order tracking.',
      'Authentication uses a dual strategy combining ASP.NET Identity cookies and JWT bearer ' +
        'tokens, with antiforgery token handling and Google OAuth. Payments run through the ' +
        'Stripe gateway with webhook handling, backed by Hangfire background jobs for payment ' +
        'verification and reconciliation.',
      'Order tracking is pushed live over SignalR with Firebase push notifications, and a ' +
        'loyalty points system generates vouchers automatically and validates promo codes. ' +
        'The platform ships English/Arabic localization with RTL support, and targeted ' +
        'optimization raised Lighthouse performance to 93/100 on the home page.',
    ],
    stack: [
      'ASP.NET Core MVC (.NET 9)',
      'Entity Framework Core',
      'SignalR',
      'Hangfire',
      'Stripe API',
      'Firebase Admin SDK',
      'Google OAuth',
      'EPPlus',
      'QuestPDF',
      'AutoMapper',
      'SCSS/Sass',
    ],
    highlights: [
      'Multi-layered solution (Web, Application, Domain, Infrastructure) for restaurant ' +
        'discovery, ordering, and real-time order tracking',
      'Dual authentication combining ASP.NET Identity cookies and JWT bearer tokens, with ' +
        'antiforgery token handling and Google OAuth',
      'Stripe payment gateway with webhook handling, plus Hangfire background jobs for ' +
        'payment verification and reconciliation',
      'Real-time order tracking with SignalR and Firebase push notifications',
      'Loyalty points system with automated voucher generation and promo code validation, ' +
        'plus an admin dashboard',
      'English/Arabic localization with RTL support; Lighthouse performance raised to 93/100 ' +
        'on the home page',
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
];
