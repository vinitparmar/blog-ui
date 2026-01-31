import { Routes } from "@angular/router";
import { authGuard } from "../../core/guards/auth.guard";

export const POSTS_ROUTES: Routes = [
    {
        path : '',
        loadComponent : () => 
            import('./feed/feed.component')
            .then(c => c.FeedComponent)
    },
     {
        path : '/posts/:id',
        loadComponent : () => 
            import('./post-detail/post-detail.component')
            .then(c => c.PostDetailComponent)
    },
    {
        path : 'write',
        canActivate : [authGuard],
        loadComponent : () => 
            import('./create-post/create-post.component')
            .then(c => c.CreatePostComponent)
    },
    {
        path: 'bookmarks',
        canActivate: [authGuard],
        loadComponent: () =>
          import('../bookmarks/bookmarks/bookmarks.component')
            .then(c => c.BookmarksComponent)
   },
   {
      path: 'trending',
      loadComponent: () =>
        import('../analytics/trending/trending.component')
          .then(c => c.TrendingComponent)
   }
];