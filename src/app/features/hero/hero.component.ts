import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { CONTACT, HERO_ROLES, HERO_STATS, SITE, SOCIAL_LINKS } from '@core/config/site-config';
import { SocialPlatform } from '@core/models';
import { AlertService } from '@core/services/alert.service';
import { ContactService } from '@core/services/contact.service';
import { fadeInUp } from '@shared/animations/animations';
import { IconComponent, IconName } from '@shared/components/icon/icon.component';
import { CountUpDirective } from '@shared/directives/count-up.directive';
import { MagneticDirective } from '@shared/directives/magnetic.directive';

const SOCIAL_ICONS: Record<SocialPlatform, IconName> = {
  github: 'github',
  linkedin: 'linkedin',
  email: 'mail',
  phone: 'phone',
  location: 'map-pin',
};

/** Typewriter timings, in milliseconds. */
const TYPE_SPEED = 85;
const DELETE_SPEED = 40;
const HOLD_FULL = 1700;
const HOLD_EMPTY = 320;

@Component({
  selector: 'app-hero',
  imports: [RouterLink, IconComponent, CountUpDirective, MagneticDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInUp],
})
export class HeroComponent {
  private readonly alert = inject(AlertService);
  private readonly contactService = inject(ContactService);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly site = SITE;
  protected readonly contact = CONTACT;
  protected readonly stats = HERO_STATS;
  protected readonly socialLinks = SOCIAL_LINKS.filter((link) =>
    ['github', 'linkedin', 'email'].includes(link.platform),
  );

  /** The role text currently shown by the typewriter. */
  readonly typedRole = signal(HERO_ROLES[0]);

  private readonly roles = HERO_ROLES;
  private roleIndex = 0;
  private charIndex = HERO_ROLES[0].length;
  private deleting = false;
  private timer: ReturnType<typeof setTimeout> | undefined;

  constructor() {
    afterNextRender(() => this.startTypewriter());
    this.destroyRef.onDestroy(() => clearTimeout(this.timer));
  }

  iconFor(platform: SocialPlatform): IconName {
    return SOCIAL_ICONS[platform];
  }

  onCvDownload(): void {
    this.alert.toast('CV downloaded — good luck reaching out!', 'success', 3000);
  }

  async onContactMe(): Promise<void> {
    const message = await this.alert.contactForm();
    if (!message) {
      return;
    }

    try {
      await this.contactService.send(message);
      this.alert.toast('Message sent — thanks for reaching out!', 'success', 3000);
    } catch (error) {
      const detail =
        error instanceof Error ? error.message : 'Please try again or email me directly.';
      await this.alert.error('Could not send message', detail);
    }
  }

  private startTypewriter(): void {
    const reducedMotion =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      this.typedRole.set(this.roles[0]);
      return;
    }
    this.charIndex = 0;
    this.typedRole.set('');
    this.tick();
  }

  /** Advances the typewriter by one character and schedules the next step. */
  private tick(): void {
    const current = this.roles[this.roleIndex];
    this.charIndex += this.deleting ? -1 : 1;
    this.typedRole.set(current.slice(0, this.charIndex));

    let delay = this.deleting ? DELETE_SPEED : TYPE_SPEED;

    if (!this.deleting && this.charIndex === current.length) {
      this.deleting = true;
      delay = HOLD_FULL;
    } else if (this.deleting && this.charIndex === 0) {
      this.deleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      delay = HOLD_EMPTY;
    }

    this.timer = setTimeout(() => this.tick(), delay);
  }
}
