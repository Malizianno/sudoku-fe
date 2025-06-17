import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/board', pathMatch: 'full' },
  {
    path: 'board',
    loadComponent: () =>
      import('./components/board/board').then((m) => m.Board),
  },
];
