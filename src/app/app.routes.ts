import { Routes } from '@angular/router';

// here we can define routes and what page should render on that route
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./home/home').then((m) => m.Home);
    },
  },
  {
    path: 'todos',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./todos/todos').then((m) => m.Todos);
    },
  },
];
