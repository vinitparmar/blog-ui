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
  success = false;
  loading = false;
   constructor(private auth: AuthService, private router: Router) {}

  submit() {
    this.loading = true;
    this.auth.register({ email: this.email, password: this.password })
      .subscribe({
        next: () => {
          this.success = true;
          setTimeout(() => this.router.navigateByUrl('/login'), 1000);
        },
        error: () => this.loading = false
      });
  }

}
