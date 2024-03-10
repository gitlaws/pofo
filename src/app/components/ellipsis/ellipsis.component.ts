import {
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-ellipsis',
  templateUrl: './ellipsis.component.html',
  styleUrls: ['./ellipsis.component.scss'],
})
export class EllipsisComponent {
  @ViewChildren('dotElement') dotElements!: QueryList<ElementRef>;

  menuIsOpen = false;
  isHovered = false;
  isClickedOutside = false;

  toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen;
  }

  resetEllipsis() {
    this.menuIsOpen = false;
    this.isHovered = false;
    this.isClickedOutside = false;
  }

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    if (!this.menuIsOpen) {
      this.isHovered = false;
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const ellipsisContainer = document.querySelector('.ellipsis-container');
    const clickedInside = ellipsisContainer?.contains(event.target as Node);
    const clickedOnDot = (event.target as Element).classList.contains(
      'ellipsis-dot'
    );
    if (!clickedInside && !clickedOnDot) {
      this.resetEllipsis();
      this.isClickedOutside = true;
    }
  }
}
