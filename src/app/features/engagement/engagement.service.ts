import { Injectable } from "@angular/core";
import { ApiService } from "../../core/services/api.service";



@Injectable({
  providedIn: 'root'
})
export class EngagementService {

    constructor(private api : ApiService){}

    likePost(postId : number){
        return this.api.post(`/likes/${postId}`,{});
    }

    commentPost(postId : number , text : string){
        return this.api.post(`/comments/${postId}`,{text});
    }

    sharePost(postId : number){
        return this.api.post(`/shares/${postId}`,{});
    }
}