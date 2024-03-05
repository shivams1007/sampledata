import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  isAboutPageActive: boolean = false;
  sideMenuOpen: boolean = false;
  iscontectPageActive: boolean = false;
  ishomePageActive: boolean = false;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateActivePage();
      }
    });
  }
  aboutPage() {
    this.router.navigate(['/about']);
  }
  contectUsPage() {
    this.router.navigate(['/contect-us']);
  }
  homePage() {
    this.router.navigate(['/sample-videos']);
  }
  updateActivePage() {
    const currentUrl = this.router.url;
    this.isAboutPageActive = currentUrl === '/about';
    this.iscontectPageActive = currentUrl === '/contect-us';
    this.ishomePageActive = currentUrl === '/sample-videos';
  }
  toggleSideMenu() {
    this.sideMenuOpen = !this.sideMenuOpen;
  }

}
