import { Component } from '@angular/core';

@Component({
  selector: 'app-ellipsis',
  templateUrl: './ellipsis.component.html',
  styleUrls: ['./ellipsis.component.scss'],
})
export class EllipsisComponent {
  isMenuOpen = false;

  resetEllipsis() {
    // Add the logic to reset the ellipsis here
    this.isMenuOpen = false;
  }
}
