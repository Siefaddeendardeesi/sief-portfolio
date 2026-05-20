import { ChangeDetectionStrategy, Component } from '@angular/core';

import { EXPERIENCE } from '@core/data/experience.data';
import { ScrollRevealDirective } from '@shared/directives/scroll-reveal.directive';
import { IconComponent } from '@shared/components/icon/icon.component';
import { listStagger } from '@shared/animations/animations';

@Component({
  selector: 'app-experience',
  imports: [ScrollRevealDirective, IconComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [listStagger],
})
export class ExperienceComponent {
  protected readonly experience = EXPERIENCE;
}
