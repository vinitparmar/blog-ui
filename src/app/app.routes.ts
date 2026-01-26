import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
    path: '',
    loadComponent: () =>
      import('./features/posts/posts.component').then(c => c.PostsComponent)
  },
  {
    path: '',
    loadChildren: () =>
      import('./features/auth/auth.routes').then(r => r.AUTH_ROUTES)
  },
  {
    path: 'profile',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/profile/profile.component').then(c => c.ProfileComponent)
  }
];
