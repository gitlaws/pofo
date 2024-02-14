// theme-toggle.component.ts
import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
})
export class ThemeToggleComponent implements OnInit {
  darkMode: boolean = false;
  isAnimated = false;
  isClicked = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.darkMode = this.themeService.getTheme() === 'dark';
    const isClickedStorage = localStorage.getItem('isClicked');
    this.isClicked = isClickedStorage ? JSON.parse(isClickedStorage) : false;
    const darkModeStorage = localStorage.getItem('darkMode');
    this.darkMode = darkModeStorage ? JSON.parse(darkModeStorage) : false;
  }

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
    const theme = this.darkMode ? 'dark' : 'light';
    this.themeService.setTheme(theme);
  }

  toggleTheme() {
    this.isClicked = !this.isClicked;
    this.darkMode = !this.darkMode;
    this.updateLocalStorage();
    this.themeService.changeTheme(this.darkMode ? 'dark' : 'light');
  }

  toggleAnimation() {
    this.isAnimated = true;
    setTimeout(() => {
      this.isAnimated = false;
    }, 1000); // replace 1000 with the duration of your spin animation in milliseconds
  }

  updateLocalStorage() {
    localStorage.setItem('isClicked', JSON.stringify(this.isClicked));
    localStorage.setItem('darkMode', JSON.stringify(this.darkMode));
  }
}
