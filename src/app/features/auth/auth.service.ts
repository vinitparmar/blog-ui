import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private api : ApiService) { }

 login(payload: { email: string; password: string }) {
    return this.api.post<{ token: string }>('/auth/login', payload).pipe(
      tap(res => localStorage.setItem('token', res.token))
    );
  }

  register(payload: { email: string; password: string }) {
    return this.api.post('/auth/register', payload);
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
