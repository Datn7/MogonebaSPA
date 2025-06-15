import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Memory } from '../models/memory.model';
import { environment } from '../../environments/environment.server';

@Injectable({
  providedIn: 'root'
})
export class MemoryService {
  private apiUrl = `${environment.apiBaseUrl}/memories`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Memory[]> {
    return this.http.get<Memory[]>(this.apiUrl);
  }

  create(memory: Memory): Observable<Memory> {
    return this.http.post<Memory>(this.apiUrl, memory);
  }
}
