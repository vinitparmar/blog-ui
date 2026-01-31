import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/layout.component')
        .then(c => c.LayoutComponent),
    children: [

      // 🔓 AUTH (WITH HEADER)
      {
        path: 'login',
        loadComponent: () =>
          import('./features/auth/login/login.component')
            .then(c => c.LoginComponent)
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./features/auth/register/register.component')
            .then(c => c.RegisterComponent)
      },

      // 📰 POSTS / FEED
      {
        path: '',
        loadChildren: () =>
          import('./features/posts/posts.routes')
            .then(r => r.POSTS_ROUTES)
      },

      // 👤 PROFILE
      {
        path: 'profile',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/profile/profile.component')
            .then(c => c.ProfileComponent)
      },

      // 🔖 BOOKMARKS
      {
        path: 'bookmarks',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/bookmarks/bookmarks/bookmarks.component')
            .then(c => c.BookmarksComponent)
      }
    ]
  }
];
