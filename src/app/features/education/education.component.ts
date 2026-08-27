import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CERTIFICATIONS, EDUCATION } from '@core/data/experience.data';
import { ScrollRevealDirective } from '@shared/directives/scroll-reveal.directive';
import { IconComponent } from '@shared/components/icon/icon.component';

@Component({
  selector: 'app-education',
  imports: [ScrollRevealDirective, IconComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationComponent {
  protected readonly education = EDUCATION;
  protected readonly certifications = CERTIFICATIONS;
}
