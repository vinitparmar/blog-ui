import { Component, Input } from '@angular/core';
import { FollowService } from '../follow.service';

@Component({
  selector: 'app-follow-button',
  standalone: true,
  imports: [],
  templateUrl: './follow-button.component.html',
  styleUrl: './follow-button.component.css'
})
export class FollowButtonComponent {
 @Input() authorId!: string;
  following = false;

  constructor(private follow: FollowService) {}

  toggle() {
    this.following = !this.following;
    this.follow.follow(this.authorId).subscribe();
  }
}
