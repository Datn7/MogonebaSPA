import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedIn.asObservable();

  login() {
    this.loggedIn.next(true);
    localStorage.setItem('isLoggedIn', 'true');
  }

  logout() {
    this.loggedIn.next(false);
    localStorage.removeItem('isLoggedIn');
  }

  restoreLogin() {
    const stored = localStorage.getItem('isLoggedIn');
    this.loggedIn.next(stored === 'true');
  }

  get isLoggedIn(): boolean {
    return this.loggedIn.value;
  }
}
