import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ProjectService } from '@core/services/project.service';
import { ScrollRevealDirective } from '@shared/directives/scroll-reveal.directive';
import { TiltDirective } from '@shared/directives/tilt.directive';
import { IconComponent } from '@shared/components/icon/icon.component';
import { filterStagger } from '@shared/animations/animations';

@Component({
  selector: 'app-projects',
  imports: [RouterLink, ScrollRevealDirective, TiltDirective, IconComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [filterStagger],
})
export class ProjectsComponent {
  private readonly projectService = inject(ProjectService);
  private readonly allProjects = this.projectService.projects;

  /** 'All' plus each distinct project category, used for the filter buttons. */
  protected readonly categories: readonly string[] = [
    'All',
    ...new Set(this.allProjects.map((project) => project.category)),
  ];

  /** The category currently selected in the filter bar. */
  readonly activeCategory = signal('All');

  /** Projects matching the active filter. */
  protected readonly filteredProjects = computed(() => {
    const category = this.activeCategory();
    return category === 'All'
      ? this.allProjects
      : this.allProjects.filter((project) => project.category === category);
  });

  setCategory(category: string): void {
    this.activeCategory.set(category);
  }

  /** Number of projects in a given category (or all of them for 'All'). */
  countFor(category: string): number {
    return category === 'All'
      ? this.allProjects.length
      : this.allProjects.filter((project) => project.category === category).length;
  }
}
