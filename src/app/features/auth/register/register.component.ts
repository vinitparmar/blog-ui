import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule , RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  email = '';
  password = '';
  error = '';
  loading = false;
   
  constructor(private auth: AuthService, private router: Router) {}

 submit() {
    if (!this.email || this.password.length < 6) {
      this.error = 'Password must be at least 6 characters';
      return;
    }

    this.loading = true;
    this.error = '';

    this.auth.register({ email: this.email, password: this.password })
      .subscribe({
        next: () => this.router.navigateByUrl('/login'),
        error: () => {
          this.error = 'Registration failed';
          this.loading = false;
        }
      });
  }
}
