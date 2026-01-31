import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { PostCardComponent } from '../../../shared/post-card/post-card.component';
import { Post, PostService } from '../post.service';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [CommonModule ,PostCardComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent {
  posts : Post[] = [];
  page = 0;
  loading =  false;

  constructor(private postService:PostService){}

  load(){
    if(this.loading){
      return;
    }

    this.loading =  true;

    this.postService.getFeed(this.page).subscribe( res =>{
        this.posts.push(...res);
        this.page++;
        this.loading=false;
    });
  }

  @HostListener('window:scroll')
  onScroll(){
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight-200){
      this.load();
    }
  }
}
