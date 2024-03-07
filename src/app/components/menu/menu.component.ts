import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  isMenuOpen = false;
  menuItems = [
    { name: 'Item 1', url: '/item1' },
    { name: 'Item 2', url: '/item2' },
    // Add more items as needed
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
