import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../features/auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule , RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  get loggedIn() {
    return !!localStorage.getItem('token');
  }


  constructor(private router: Router){}

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
