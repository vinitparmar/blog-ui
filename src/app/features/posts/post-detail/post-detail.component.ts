import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Post, PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent implements OnInit {

  post?:Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

ngOnInit(){
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.postService.getPost(id)
    .subscribe(post => this.post = post);
}

}
