export interface ExperienceItem {
  readonly role: string;
  readonly company: string;
  readonly location: string;
  readonly period: string;
  /** Marks the currently held position. */
  readonly current: boolean;
  readonly summary: string;
  readonly highlights: readonly string[];
}

export interface EducationItem {
  readonly degree: string;
  readonly institution: string;
  readonly location: string;
  readonly period: string;
  readonly summary: string;
  readonly imagePath?: string;
}
