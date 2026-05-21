/** A single animated count-up statistic shown in the hero section. */
export interface HeroStat {
  /** The number the counter animates up to. */
  readonly value: number;
  /** Optional suffix rendered after the value (e.g. '+'). */
  readonly suffix: string;
  /** Short caption describing what the value represents. */
  readonly label: string;
}
