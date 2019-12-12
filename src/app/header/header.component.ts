import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isNavbarVisible = false;
  title = 'LUDZIE NAUKI REGIONU LESZCZYŃSKIEGO';

  constructor(public router: Router) { }

  ngOnInit() {
  }

  isLinkActive(linkName: string): boolean {
    return linkName === this.router.url;
  }

  toggleNavbar(): void {
    this.isNavbarVisible = !this.isNavbarVisible;
  }
}
