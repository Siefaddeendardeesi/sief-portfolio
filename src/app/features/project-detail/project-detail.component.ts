import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

import { ProjectService } from '@core/services/project.service';
import { ScrollRevealDirective } from '@shared/directives/scroll-reveal.directive';
import { IconComponent } from '@shared/components/icon/icon.component';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink, ScrollRevealDirective, IconComponent],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetailComponent {
  private readonly projectService = inject(ProjectService);
  private readonly title = inject(Title);

  /** Bound from the `:slug` route param via `withComponentInputBinding()`. */
  readonly slug = input.required<string>();

  protected readonly project = computed(() => this.projectService.getBySlug(this.slug()));

  constructor() {
    effect(() => {
      const project = this.project();
      if (project) {
        this.title.setTitle(`${project.title} — Sief Addeen Aldardeesi`);
      }
    });
  }
}
