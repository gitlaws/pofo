import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() isDarkMode: boolean = false;

  // Define the URLs for the menu items
  item1Url: string = '';
  item2Url: string = '';

  // Add a new property to track whether the menu is open or not
  isMenuOpen: boolean = false;

  toggleMenu() {
    // Toggle the isMenuOpen property
    this.isMenuOpen = !this.isMenuOpen;
  }
}