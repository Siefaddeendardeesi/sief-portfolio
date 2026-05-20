import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ProjectService } from '@core/services/project.service';
import { ScrollRevealDirective } from '@shared/directives/scroll-reveal.directive';
import { IconComponent } from '@shared/components/icon/icon.component';
import { listStagger } from '@shared/animations/animations';

@Component({
  selector: 'app-projects',
  imports: [RouterLink, ScrollRevealDirective, IconComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [listStagger],
})
export class ProjectsComponent {
  private readonly projectService = inject(ProjectService);

  protected readonly projects = this.projectService.projects;
}
