import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment.server';

@Component({
  selector: 'app-add-memory',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-memory.component.html',
  styleUrls: ['./add-memory.component.scss']
})
export class AddMemoryComponent {
  memoryForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.memoryForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      location: ['', Validators.required],
      imageUrl: ['']
    });
  }

  submit() {
    if (this.memoryForm.valid) {
      this.http.post(`${environment.apiBaseUrl}/memories`, this.memoryForm.value)
        .subscribe({
          next: () => this.router.navigate(['/memories']),
          error: err => console.error('Failed to add memory', err)
        });
    }
  }
}
