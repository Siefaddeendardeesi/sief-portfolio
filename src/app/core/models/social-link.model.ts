export type SocialPlatform = 'github' | 'linkedin' | 'email' | 'phone' | 'location';

export interface SocialLink {
  readonly platform: SocialPlatform;
  readonly label: string;
  readonly value: string;
  readonly href: string;
  /** When true the link opens in a new tab. */
  readonly external: boolean;
}
