import { Injectable } from '@angular/core';

import { PROJECTS } from '../data/projects.data';
import { Project } from '../models';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  readonly projects = PROJECTS;

  getBySlug(slug: string): Project | undefined {
    return PROJECTS.find((project) => project.slug === slug);
  }

  getFeatured(): readonly Project[] {
    return PROJECTS.filter((project) => project.featured);
  }
}
