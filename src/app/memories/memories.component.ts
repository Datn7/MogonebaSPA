import { Component, OnInit } from '@angular/core';
import { MemoryService } from '../services/memory.service';
import { Memory } from '../models/memory.model';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-memories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './memories.component.html',
  styleUrls: ['./memories.component.scss']
})
export class MemoriesComponent implements OnInit {
  memories: Memory[] = [];

  constructor(private memoryService: MemoryService) {}

  ngOnInit(): void {
    this.memoryService.getAll().subscribe({
      next: (data) => this.memories = data,
      error: (err) => console.error('Failed to load memories:', err)
    });
  }
}
