import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
    path: '',
    loadChildren: () =>
      import('./features/posts/posts.module').then(m => m.PostsModule)
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'profile',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./features/profile/profile.module').then(m => m.ProfileModule)
  },
  { path: '**', redirectTo: '' }
];
