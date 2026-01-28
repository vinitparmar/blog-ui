import { Injectable } from "@angular/core";
import { ApiService } from "../../core/services/api.service";

export interface TrendingPost {
  postId: number;
  score: number;
}

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private api: ApiService) {}

  getTrending() {
    return this.api.get<TrendingPost[]>('/analytics/posts/trending');
  }
}
