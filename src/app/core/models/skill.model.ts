export interface SkillGroup {
  readonly title: string;
  /** Icon key resolved by the shared IconComponent. */
  readonly icon: string;
  /** Optional qualifier, e.g. "Currently learning". */
  readonly note?: string;
  readonly skills: readonly string[];
}
