import { Component } from '@angular/core';

@Component({
  selector: 'app-toolmenu',
  templateUrl: './toolmenu.component.html',
  styleUrl: './toolmenu.component.scss',
})
export class ToolmenuComponent {
  isOpen = false;
  isDarkMode: boolean = false;
  currentTheme: string = '';

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
