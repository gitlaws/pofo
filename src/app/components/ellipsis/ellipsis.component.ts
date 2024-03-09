import {
  Component,
  ElementRef,
  HostListener,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-ellipsis',
  templateUrl: './ellipsis.component.html',
  styleUrls: ['./ellipsis.component.scss'],
})
export class EllipsisComponent {
  @ViewChildren('dotElement') dotElements!: QueryList<ElementRef>;

  middleDotIsClicked = false;
  imageIsHovered = false; // Add this property
  menuIsOpen = false;

  handleDotClick(dotIndex: number) {
    if (dotIndex === 1) {
      this.middleDotIsClicked = !this.middleDotIsClicked;
    }
  }

  handleImageHover() {
    // Add this method
    this.imageIsHovered = true;
  }

  toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen;
  }
}
