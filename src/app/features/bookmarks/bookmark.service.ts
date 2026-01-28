import { Injectable } from "@angular/core";
import { ApiService } from "../../core/services/api.service";

@Injectable({ providedIn: 'root' })

export class BookmarkService {


    constructor(private api : ApiService){}

    save(postId : number){
        return this.api.post(`/bookmarks/${postId}`,{});
    }

    remove(postId : number){
        return this.api.delete(`/bookmarks/${postId}`);
    }

    getMyBookmarks(){
        return this.api.get('/bookmarks');
    }
}