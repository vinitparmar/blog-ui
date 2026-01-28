import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Post, PostService } from '../../posts/post.service';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [CommonModule ,RouterModule],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent {

  posts : Post[] = [];
  loading = true;

  constructor(private postService : PostService){};

  ngOnInit(){
    this.postService.getFeed().subscribe(posts => {
      this.posts = posts;
      this.loading = false;
    });
  }
}
