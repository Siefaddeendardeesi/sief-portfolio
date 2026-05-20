import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CONTACT, SITE, SOCIAL_LINKS } from '@core/config/site-config';
import { SocialPlatform } from '@core/models';
import { AlertService } from '@core/services/alert.service';
import { fadeInUp } from '@shared/animations/animations';
import { IconComponent, IconName } from '@shared/components/icon/icon.component';

const SOCIAL_ICONS: Record<SocialPlatform, IconName> = {
  github: 'github',
  linkedin: 'linkedin',
  email: 'mail',
  phone: 'phone',
  location: 'map-pin',
};

@Component({
  selector: 'app-hero',
  imports: [RouterLink, IconComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInUp],
})
export class HeroComponent {
  private readonly alert = inject(AlertService);

  protected readonly site = SITE;
  protected readonly contact = CONTACT;
  protected readonly socialLinks = SOCIAL_LINKS.filter((link) =>
    ['github', 'linkedin', 'email'].includes(link.platform),
  );

  iconFor(platform: SocialPlatform): IconName {
    return SOCIAL_ICONS[platform];
  }

  onCvDownload(): void {
    this.alert.toast('CV downloaded — good luck reaching out!', 'success', 3000);
  }

  async onContactMe(): Promise<void> {
    const message = await this.alert.contactForm();
    if (message) {
      this.alert.toast('Message sent — thanks for reaching out!', 'success', 3000);
    }
  }
}
