import { Routes } from '@angular/router';

import { HomeComponent } from '@features/home/home.component';
import { NotFoundComponent } from '@features/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Sief Addeen Aldardeesi — Full-Stack .NET Developer',
  },
  {
    path: 'projects/:slug',
    loadComponent: () =>
      import('@features/project-detail/project-detail.component').then(
        (m) => m.ProjectDetailComponent,
      ),
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Page not found — Sief Addeen Aldardeesi',
  },
];
