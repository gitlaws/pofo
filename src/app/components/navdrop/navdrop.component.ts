import { Component } from '@angular/core';

@Component({
  selector: 'app-navdrop',
  templateUrl: './navdrop.component.html',
  styleUrls: ['./navdrop.component.scss'],
})
export class NavdropComponent {
  isMenuOpen = false;
  menuItems = [
    { name: 'Projects', url: '/home' },
    { name: 'Me', url: '/about' },
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
