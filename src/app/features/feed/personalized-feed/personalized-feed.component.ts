import { Component, OnInit } from '@angular/core';
import { Post, PostService } from '../../posts/post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personalized-feed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personalized-feed.component.html',
  styleUrl: './personalized-feed.component.css'
})
export class PersonalizedFeedComponent implements OnInit {
 posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getFeed().subscribe(res => this.posts = res);
  }
}
