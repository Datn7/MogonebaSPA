import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { environment } from '../../environments/environment.server';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RouterModule],
  templateUrl: './register.component.html',
   styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  message = '';
  form!: FormGroup; // declare the form first

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

 submit() {
  if (this.form.invalid) return;

  this.http.post(`${environment.apiBaseUrl}/users/register`, this.form.value)
    .subscribe({
      next: (res: any) => {
        this.router.navigate(['/landing']); // Redirect
      },
      error: err => {
        this.message = err.error || 'Registration failed';
      }
    });
}}