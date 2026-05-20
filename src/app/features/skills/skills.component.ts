import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SKILL_GROUPS } from '@core/data/skills.data';
import { IconName } from '@shared/components/icon/icon.component';
import { IconComponent } from '@shared/components/icon/icon.component';
import { ScrollRevealDirective } from '@shared/directives/scroll-reveal.directive';
import { listStagger } from '@shared/animations/animations';

@Component({
  selector: 'app-skills',
  imports: [IconComponent, ScrollRevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [listStagger],
})
export class SkillsComponent {
  protected readonly skillGroups = SKILL_GROUPS;

  iconFor(name: string): IconName {
    return name as IconName;
  }
}
