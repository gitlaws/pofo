import { Component } from '@angular/core';

@Component({
  selector: 'app-navdrop',
  templateUrl: './navdrop.component.html',
  styleUrl: './navdrop.component.scss',
})
export class NavdropComponent {
  isMenuOpen = false;
  menuItems = [
    { url: '/link1', name: 'Link 1' },
    { url: '/link2', name: 'Link 2' },
    // add more links as needed
  ];

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
