import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services/api.service';

@Injectable({ providedIn: 'root' })

export class FollowService {

  constructor(private api: ApiService) {}

  follow(authorId: string) {
    return this.api.post(`/follow/${authorId}`, {});
  }

  unfollow(authorId: string) {
    return this.api.delete(`/follow/${authorId}`);
  }
}
