import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HeroComponent } from '@features/hero/hero.component';
import { AboutComponent } from '@features/about/about.component';
import { SkillsComponent } from '@features/skills/skills.component';
import { ExperienceComponent } from '@features/experience/experience.component';
import { EducationComponent } from '@features/education/education.component';
import { ProjectsComponent } from '@features/projects/projects.component';
import { ContactComponent } from '@features/contact/contact.component';

/** The single-page portfolio: every section stacked on the `/` route. */
@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
