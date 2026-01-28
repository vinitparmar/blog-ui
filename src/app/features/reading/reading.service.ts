import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services/api.service';

@Injectable({ providedIn: 'root' })
export class ReadingService {

  constructor(private api: ApiService) {}

  saveProgress(postId: number, percent: number) {
    return this.api.post('/reading-progress', {
      postId,
      percent
    });
  }
}
