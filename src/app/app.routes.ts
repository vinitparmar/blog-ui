import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/layout.component').then(c => c.LayoutComponent),
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/posts/posts.routes').then(r => r.POSTS_ROUTES)
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('./features/auth/auth.routes').then(r => r.AUTH_ROUTES)
      },
      {
        path: 'profile',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/profile/profile.component')
            .then(c => c.ProfileComponent)
      }
    ]
  }
];
