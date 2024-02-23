import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { Theme } from 'src/app/services/theme.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentTheme: string = '';
  showDropdown = false;
  hideDropdownTimeout: any;
  isDarkMode: boolean = false;

  constructor(private themeService: ThemeService) {}

  toggleDropdown() {
    clearTimeout(this.hideDropdownTimeout); // clear the timeout
    this.showDropdown = true;
  }

  hideDropdown() {
    this.hideDropdownTimeout = setTimeout(() => {
      this.showDropdown = false;
    }, 3000); // 3000 milliseconds = 3 seconds
  }

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => {
      this.isDarkMode = theme === Theme.Dark;
    });
  }
}
