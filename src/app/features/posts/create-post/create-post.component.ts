import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Post, PostService } from '../post.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {
   title ='';
   content = '';
   loading = false;
   error = '';

    constructor(
      private postService : PostService,
      private router : Router
    ){}

    submit(){
     if (!this.title || !this.content) {
      this.error = 'Title and content are required';
      return;
    }

    this.loading = true;

    this.postService.createPost({
      title: this.title,
      content: this.content
    }).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
        this.error = 'Failed to create post';
        this.loading = false;
      }
    });
    }
}
