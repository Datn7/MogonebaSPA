import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
   isLoggedIn = false;
  dropdownOpen = false;

  constructor(private auth: AuthService, private router: Router) {
    this.auth.isLoggedIn$.subscribe(status => this.isLoggedIn = status);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
