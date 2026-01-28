import { Injectable } from "@angular/core";
import { ApiService } from "../../core/services/api.service";

export interface Post {
    id: number;
    title: string,
    content: string,
    authorId : string,
    readCount : number
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

    constructor(private api : ApiService){}

    getFeed(){
        return this.api.get<Post[]>('/posts/public');
    }

    getPost(id: number){
        return this.api.get<Post>(`/posts/${id}`)
    }

    createPost(payload:{title : string , content: String}){
        return this.api.post('/posts',payload);
    }

}