import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from '../../../shared/post-card/post-card.component';

@Component({
  selector: 'app-trending',
  standalone: true,
  imports: [CommonModule,PostCardComponent ],
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.css'
})
export class TrendingComponent implements OnInit{
posts: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.get<any[]>('/analytics/posts/trending')
      .subscribe(res => this.posts = res);
  }
}
