import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SITE } from '@core/config/site-config';
import { LANGUAGES } from '@core/data/languages.data';
import { ScrollRevealDirective } from '@shared/directives/scroll-reveal.directive';
import { IconComponent } from '@shared/components/icon/icon.component';

@Component({
  selector: 'app-about',
  imports: [ScrollRevealDirective, IconComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  protected readonly site = SITE;
  protected readonly languages = LANGUAGES;
}
