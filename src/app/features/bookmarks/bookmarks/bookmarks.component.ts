import { Component, OnInit } from '@angular/core';
import { BookmarkService } from '../bookmark.service';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from '../../../shared/post-card/post-card.component';

@Component({
  selector: 'app-bookmarks',
  standalone: true,
  imports: [CommonModule,PostCardComponent ],
  templateUrl: './bookmarks.component.html',
  styleUrl: './bookmarks.component.css'
})
export class BookmarksComponent implements OnInit {

  posts: any[] = [];

  constructor(private bookmark : BookmarkService){}

  ngOnInit(){
    this.bookmark.getMyBookmarks().subscribe(res => this.posts = res);
  }
}
