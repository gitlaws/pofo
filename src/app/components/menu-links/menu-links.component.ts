import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-links',
  templateUrl: './menu-links.component.html',
  styleUrl: './menu-links.component.scss',
})
export class MenuLinksComponent {
  menuItems = [
    { name: 'Item 1', url: '/item1', class: 'projects' },
    { name: 'Item 2', url: '/item2', class: 'profile' },
    // Add more items as needed
  ];
}
