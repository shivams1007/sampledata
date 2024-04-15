import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  isAboutPageActive: boolean = false;
  sideMenuOpen: boolean = false;
  isContectPageActive: boolean = false;
  isHomePageActive: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateActivePage();
      }
    });
  }

  updateActivePage() {
    const currentUrl = this.router.url;
    this.isAboutPageActive = currentUrl === '/about';
    this.isContectPageActive = currentUrl === '/contect-us';
    this.isHomePageActive =
      !this.isAboutPageActive && !this.isContectPageActive;
  }

  toggleSideMenu() {
    this.sideMenuOpen = !this.sideMenuOpen;
  }
}
