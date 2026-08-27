import { HeroStat, NavLink, SocialLink } from '../models';

/**
 * Central content and configuration for the portfolio.
 *
 * Personal copy is kept here (rather than hard-coded in templates) so it is
 * easy to update in one place and straightforward to extract for
 * internationalisation later.
 */

// ---------------------------------------------------------------------------
// Contact details
// ---------------------------------------------------------------------------
export const CONTACT = {
  email: 'saifdardese@gmail.com',
  phone: '+962 77 554 4939',
  linkedinUrl: 'https://www.linkedin.com/in/sief-addeenaldardeesi/',
  githubUrl: 'https://github.com/Siefaddeendardeesi',
} as const;

/**
 * Formspree delivers contact-form submissions to your inbox.
 * Create a free form at https://formspree.io and paste the endpoint URL below.
 */
export const FORMSPREE = {
  endpoint: 'https://formspree.io/f/mnjrygal',
} as const;

// ---------------------------------------------------------------------------
// Identity & copy
// ---------------------------------------------------------------------------
export const SITE = {
  name: 'Sief Addeen Aldardeesi',
  shortName: 'Sief Aldardeesi',
  initials: 'SA',
  role: 'Backend Developer',
  title: 'Backend Developer | .NET & ASP.NET Core | AI Engineering',
  location: 'Amman, Jordan',
  heroTagline:
    'I build enterprise HR and advisory platforms on ASP.NET Core and .NET 9 — Clean ' +
    'Architecture, modular monoliths and REST APIs — and I integrate RAG pipelines and ' +
    'LLM-driven workflows into production business software.',
  aboutBio: [
    'Backend Developer with 2+ years of experience building enterprise HR and advisory ' +
      'platforms at Menaitech using ASP.NET Core and Entity Framework Core. I specialize in ' +
      'Clean Architecture, modular monolith design, and REST API development on .NET 9 with ' +
      'SQL Server.',
    'My focus is increasingly on AI engineering — Retrieval-Augmented Generation (RAG) ' +
      'pipelines, agent orchestration with LangGraph, and LLM integration into production ' +
      'business software. Trilingual in Arabic, English, and Turkish.',
  ],
  workingOn: 'RAG pipelines, LangGraph agent orchestration, and LLM integration in production.',
  cvPath: 'assets/cv/SiefAddeenAldardeesiCv.pdf',
  cvFileName: 'SiefAddeenAldardeesiCv.pdf',
  themeStorageKey: 'sief-portfolio-theme',
  copyrightStartYear: 2025,
} as const;

// ---------------------------------------------------------------------------
// Hero — rotating roles & animated stats
// ---------------------------------------------------------------------------
/** Job titles cycled through by the hero typewriter effect. */
export const HERO_ROLES: readonly string[] = [
  'Backend Developer',
  '.NET & ASP.NET Core Developer',
  'Clean Architecture Advocate',
  'AI Engineering',
];

/** Count-up statistics shown beneath the hero copy. */
export const HERO_STATS: readonly HeroStat[] = [
  { value: 2, suffix: '+', label: 'Years experience' },
  { value: 40, suffix: '+', label: 'Technologies' },
  { value: 3, suffix: '', label: 'Languages spoken' },
];

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------
export const NAV_LINKS: readonly NavLink[] = [
  { label: 'About', fragment: 'about' },
  { label: 'Skills', fragment: 'skills' },
  { label: 'Experience', fragment: 'experience' },
  { label: 'Projects', fragment: 'projects' },
  { label: 'Contact', fragment: 'contact' },
];

// ---------------------------------------------------------------------------
// Social / contact links (derived from CONTACT)
// ---------------------------------------------------------------------------
export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    platform: 'github',
    label: 'GitHub',
    value: 'View my code',
    href: CONTACT.githubUrl,
    external: true,
  },
  {
    platform: 'linkedin',
    label: 'LinkedIn',
    value: 'Connect with me',
    href: CONTACT.linkedinUrl,
    external: true,
  },
  {
    platform: 'email',
    label: 'Email',
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    external: false,
  },
  {
    platform: 'phone',
    label: 'Phone',
    value: CONTACT.phone,
    href: `tel:${CONTACT.phone.replace(/\s+/g, '')}`,
    external: false,
  },
  {
    platform: 'location',
    label: 'Location',
    value: SITE.location,
    href: 'https://www.google.com/maps/place/Amman,+Jordan',
    external: true,
  },
];
