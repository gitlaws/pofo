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
  isMenuOpen = false;
  isMiddleDivClicked = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleMiddleDiv(event: MouseEvent) {
    event.stopPropagation();
    this.isMiddleDivClicked = !this.isMiddleDivClicked;
  }

  @HostListener('document:click', ['$event'])
  clickout(event: MouseEvent) {
    const clickedInside = this.dotElements.some((dotElement) =>
      dotElement.nativeElement.contains(event.target)
    );
    if (!clickedInside) {
      this.isMiddleDivClicked = false;
    }
  }
}
