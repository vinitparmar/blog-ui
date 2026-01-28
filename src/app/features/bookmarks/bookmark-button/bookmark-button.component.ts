import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BookmarkService } from '../bookmark.service';

@Component({
  selector: 'app-bookmark-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bookmark-button.component.html',
  styleUrl: './bookmark-button.component.css'
})
export class BookmarkButtonComponent {
 
 @Input() postId!: number;
 saved = false;

 constructor(private bookmark : BookmarkService){}
 
 toggle(){
  this.saved = !this.saved;
  this.bookmark.save(this.postId).subscribe();
 }
}
