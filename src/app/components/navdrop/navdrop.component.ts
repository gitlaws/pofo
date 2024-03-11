import { Component } from '@angular/core';

@Component({
  selector: 'app-navdrop',
  templateUrl: './navdrop.component.html',
  styleUrls: ['./navdrop.component.scss'],
})
export class NavdropComponent {
  isMenuOpen = false;
  menuItems = [
    { name: 'Home', url: '/home' },
    { name: 'About', url: '/about' },
    { name: 'Contact', url: '/contact' },
    // Add more menu items as needed
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
