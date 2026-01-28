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

    constructor(
      private postService : PostService,
      private router : Router
    ){}

    submit(){
      this.loading = false;
      this.postService.createPost({
          title : this.title,
          content : this.content
      }).subscribe(() =>{
        this.router.navigateByUrl('/');
      });
    }
}
