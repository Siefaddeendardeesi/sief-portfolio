export interface LanguageSkill {
  readonly name: string;
  /** Human-readable proficiency label, e.g. "Native" or "Proficient". */
  readonly level: string;
  /** Proficiency as a percentage (0-100) for the progress bar. */
  readonly proficiency: number;
}
