import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.server'; // cleaner import

@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor(private http: HttpClient) {}

  getMessage() {
    return this.http.get<{ message: string }>(`${environment.apiBaseUrl}/test/message`);
  }
}
