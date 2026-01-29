import { Component, OnInit } from '@angular/core';
import { PostCardComponent } from '../../../shared/post-card/post-card.component';
import { PostService } from '../../posts/post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-infinite-feed',
  standalone: true,
  imports: [CommonModule, PostCardComponent],
  templateUrl: './infinite-feed.component.html',
  styleUrl: './infinite-feed.component.css'
})
export class InfiniteFeedComponent implements OnInit {

  posts: any[] = [];
  page = 0;
  loading = false;

  constructor(private postService : PostService){}

  ngOnInit(){
    this.loadMore();
  }

  loadMore() {
    if (this.loading) return;
    this.loading = true;

    this.postService.getFeed(this.page).subscribe(res => {
      this.posts.push(...res);
      this.page++;
      this.loading = false;
    });
  }
}
