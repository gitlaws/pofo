import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showDropdown = false;
  currentTheme: string = '';
  hideDropdownTimeout: any;

  toggleDropdown() {
    clearTimeout(this.hideDropdownTimeout);
    this.showDropdown = true;
  }

  hideDropdown() {
    this.hideDropdownTimeout = setTimeout(() => {
      this.showDropdown = false;
    }, 8000); // 8000 milliseconds = 8 seconds
  }

  constructor(private themeService: ThemeService) {
    this.themeService.currentTheme.subscribe(
      (theme) => (this.currentTheme = theme)
    );
  }

  ngOnInit(): void {}
}
