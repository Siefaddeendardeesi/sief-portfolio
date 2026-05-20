export type ProjectLinkType = 'github' | 'live' | 'demo';

export interface ProjectLink {
  readonly type: ProjectLinkType;
  readonly label: string;
  readonly url: string;
}

export interface Project {
  /** URL-safe identifier used by the /projects/:slug route. */
  readonly slug: string;
  readonly title: string;
  readonly tagline: string;
  readonly category: string;
  readonly year: string;
  /** Flagship projects are highlighted in the projects grid. */
  readonly featured: boolean;
  /** Hex seed colour used to generate the project cover artwork. */
  readonly accent: string;
  /** Longer-form paragraphs shown on the project detail page. */
  readonly overview: readonly string[];
  readonly stack: readonly string[];
  readonly highlights: readonly string[];
  readonly links: readonly ProjectLink[];
}
