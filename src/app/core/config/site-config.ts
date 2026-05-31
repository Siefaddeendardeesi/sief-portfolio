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
// TODO(Sief): replace the four placeholder values below with your real
// details. Every contact link, social button and the footer reads from here.
export const CONTACT = {
  email: 'saifdardese@gmail.com',
  phone: '+962 7 7554 4939',
  linkedinUrl: 'https://www.linkedin.com/in/sief-addeen-aldardeesi/',
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
  role: 'Backend .NET Developer',
  title: 'Backend .NET Developer | Aspiring AI Engineer',
  location: 'Amman, Jordan',
  heroTagline:
    'I build production .NET systems — Clean Architecture, real-time features and payment ' +
    'flows — and I am now folding applied machine learning into the mix.',
  aboutBio: [
    'Software Engineer from Üsküdar University (Istanbul, 2023), now based in Amman and ' +
      'working as a backend .NET developer. I specialize in ASP.NET Core, Clean Architecture, ' +
      'and Entity Framework Core, with two flagship projects: FavouriteRestaurant (bilingual ' +
      'restaurant platform) and MyHR (enterprise HR ERP).',
    'Trilingual in Arabic, English, and Turkish, and currently expanding into AI/ML ' +
      'engineering — Python and feature engineering alongside my .NET career.',
  ],
  workingOn: 'Deepening applied machine learning.',
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
  'Backend .NET Developer',
  'ASP.NET Core Specialist',
  'Clean Architecture Advocate',
  'Aspiring AI Engineer',
];

/** Count-up statistics shown beneath the hero copy. */
export const HERO_STATS: readonly HeroStat[] = [
  { value: 3, suffix: '', label: 'Projects built' },
  { value: 30, suffix: '+', label: 'Technologies' },
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
