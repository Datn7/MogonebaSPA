import { Component, HostListener } from '@angular/core';
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

  ngOnInit(): void {
  this.auth.isLoggedIn$.subscribe(status => {
    this.isLoggedIn = status;

    // Collapse dropdown when logging out
    if (!status) {
      this.dropdownOpen = false;
    }
  });
}


  logout() {
     this.dropdownOpen = false;  
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  @HostListener('document:click', ['$event'])
onClickOutside(event: MouseEvent) {
  const target = event.target as HTMLElement;
  if (!target.closest('.profile-wrapper')) {
    this.dropdownOpen = false;
  }
}

}
