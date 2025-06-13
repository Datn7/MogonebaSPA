import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  standalone: true,
  templateUrl: './test-component.html'
})
export class TestComponent implements OnInit {
  message = '';

  constructor(private testService: TestService) {}

  ngOnInit() {
    console.log('TestComponent initialized'); // 👈 Add this

    this.testService.getMessage().subscribe({
      next: res => {
        console.log('API Response:', res); // 👈 Add this
        this.message = res.message;
      },
      error: err => {
        console.error('API Error:', err);
        this.message = 'Error: ' + err.message;
      }
    });
  }
}
