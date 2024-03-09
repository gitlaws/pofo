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
  imageIsHovered = false;
  menuIsOpen = false;

  handleDotClick(dotIndex: number) {
    if (dotIndex === 1) {
      if (this.menuIsOpen || this.imageIsHovered) {
        this.middleDotIsClicked = true;
      } else {
        this.middleDotIsClicked = false;
      }
    }
  }

  handleImageHover() {
    this.imageIsHovered = true;
  }

  toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen;
  }

  resetEllipsis() {
    this.middleDotIsClicked = false;
    this.imageIsHovered = false;
  }
}
