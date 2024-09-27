import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    if (this.email && this.password) {
      this.authService.login({ email: this.email, password: this.password }).subscribe({
        next: () => {
          this.router.navigate(['/']); // Navigate to home or desired route after login
        },
        error: (err) => {
          this.errorMessage = 'Login failed. Please check your credentials.';
        }
      });
    } else {
      this.errorMessage = 'Please fill in all fields.';
    }
  }

  isFormValid(): boolean {
    return this.email.trim() !== '' && this.password.trim() !== ''; // Checks if both fields are not empty
  }
}