import { Component } from '@angular/core';

@Component({
  selector: 'app-ellipsis',
  templateUrl: './ellipsis.component.html',
  styleUrls: ['./ellipsis.component.scss'],
})
export class EllipsisComponent {
  menuIsOpen = false;

  resetEllipsis() {
    // Add the logic to reset the ellipsis here
    this.menuIsOpen = false;
  }
}
