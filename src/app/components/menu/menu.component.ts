import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  isOpen = false;
  isDarkMode: boolean = false;
  currentTheme: string = '';

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
