import { Component } from '@angular/core';

@Component({
  selector: 'app-dropmenu',
  standalone: true,
  imports: [],
  templateUrl: './dropmenu.component.html',
  styleUrl: './dropmenu.component.scss',
})
export class DropmenuComponent {
  isOpen = false;
  isDarkMode: boolean = false;
}
