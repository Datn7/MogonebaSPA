import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './test-component.html'
})
export class TestComponent implements OnInit {
 

  constructor(private testService: TestService) {}

  message = '';

ngOnInit() {
  this.testService.getMessage().subscribe({
    next: res => {
      console.log('API Response:', res);
      this.message = res.message; // ✅ Must assign this!
    },
    error: err => {
      console.error('API Error:', err);
      this.message = 'Error: ' + err.message;
    }
  });
}

}
