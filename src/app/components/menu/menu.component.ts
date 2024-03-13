import {
  Component,
  EventEmitter,
  Output,
  HostListener,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Output() menuClosed = new EventEmitter<void>();

  isMenuOpen = false;
  menuItems = [
    { name: 'Item 1', url: '/item1', class: 'proejcts' },
    { name: 'Item 2', url: '/item2', class: 'profile' },
    // Add more items as needed
  ];

  constructor(private eRef: ElementRef) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
