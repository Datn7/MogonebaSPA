import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Memory } from '../models/memory.model';
import { environment } from '../../environments/environment.server';

@Injectable({
  providedIn: 'root',
})
export class MemoryService {
  private apiUrl = `${environment.apiBaseUrl}/`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Memory[]> {
    return this.http.get<Memory[]>(this.apiUrl + 'memories');
  }

  addMemory(memory: Memory): Observable<any> {
    return this.http.post(`${environment.apiBaseUrl}/memories/`, memory);
  }

  deleteMemory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}memories/${id}`);
  }
}
