import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  isAboutPageActive: boolean = false;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }
  aboutPage() {
    this.router.navigate(['/about']);
    this.isAboutPageActive = true;
  }
  contectUsPage() {
    this.router.navigate(['/contect-us']);
  }
}
