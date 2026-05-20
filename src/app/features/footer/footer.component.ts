import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CONTACT, SITE, SOCIAL_LINKS } from '@core/config/site-config';
import { SocialPlatform } from '@core/models';
import { IconComponent, IconName } from '@shared/components/icon/icon.component';

const SOCIAL_ICONS: Record<SocialPlatform, IconName> = {
  github: 'github',
  linkedin: 'linkedin',
  email: 'mail',
  phone: 'phone',
  location: 'map-pin',
};

@Component({
  selector: 'app-footer',
  imports: [RouterLink, IconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  readonly site = SITE;
  protected readonly contact = CONTACT;
  protected readonly socialLinks = SOCIAL_LINKS;
  protected readonly year = new Date().getFullYear();

  iconFor(platform: SocialPlatform): IconName {
    return SOCIAL_ICONS[platform];
  }
}
