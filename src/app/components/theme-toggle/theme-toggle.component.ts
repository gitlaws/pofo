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
  }

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
    const theme = this.darkMode ? 'dark' : 'light';
    this.themeService.setTheme(theme);
  }

  toggleAnimation() {
    this.isAnimated = true;
    setTimeout(() => {
      this.isAnimated = false;
    }, 1000); // replace 1000 with the duration of your spin animation in milliseconds
  }

  toggleTheme() {
    this.toggleDarkMode();
    this.toggleAnimation();
    this.isClicked = !this.isClicked;
    this.themeService.currentTheme.subscribe((theme) => {
      const nextTheme = theme === 'light' ? 'dark' : 'light';
      this.themeService.changeTheme(nextTheme);
    });
  }
}
