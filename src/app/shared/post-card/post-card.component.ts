import { Component, Input } from '@angular/core';
import { Post } from '../../features/posts/post.service';
import { EngagementService } from '../../features/engagement/engagement.service';
import { BookmarkService } from '../../features/bookmarks/bookmark.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent {

  @Input({required:true}) post : any;

  constructor(
    private engagement : EngagementService,
    private bookmark : BookmarkService
  ){}

  like(){
    this.engagement.likePost(this.post.id).subscribe();
  }

  bookmarkPost(){
    this.bookmark.toggleBookmark(this.post.id).subscribe();
  }

  share() {
    navigator.share?.({
      title: this.post.title,
      url: `/posts/${this.post.id}`
    });
  }
}
