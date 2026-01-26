import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule , RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email = '';
  password = '';
  loading = false;
  error = '';

  constructor(private auth:AuthService , private router : Router){}

  submit() {
    this.loading = true;

    this.auth.login({ email: this.email, password: this.password})
    .subscribe({
      next:() => this.router.navigateByUrl('/'),
      error : () => {
         this.error = 'Invalid credentials';
          this.loading = false;
      } 
    });
  }
}
