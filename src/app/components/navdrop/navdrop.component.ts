import { Component } from '@angular/core';

@Component({
  selector: 'app-navdrop',
  templateUrl: './navdrop.component.html',
  styleUrls: ['./navdrop.component.scss'],
})
export class NavdropComponent {
  isMenuOpen = false;
  menuItems = [
    { name: 'Me', url: '/about' },
    { name: 'Projects', url: '/home' },
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
