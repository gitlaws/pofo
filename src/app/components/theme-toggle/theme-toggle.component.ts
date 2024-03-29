import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/shared/services/theme.service';
import { Theme } from 'src/shared/services/theme.enum';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
})
export class ThemeToggleComponent implements OnInit {
  isDarkMode!: boolean;
  isAnimated: boolean = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => {
      this.isDarkMode = theme === Theme.Dark;
    });
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.isAnimated = true;
    setTimeout(() => {
      this.isAnimated = false;
    }, 500); // Remove the class after the duration of the animation
  }

  toggleLogo() {
    const logo = document.getElementById('logo') as HTMLImageElement;
    logo.src = logo.src.includes('logo78px')
      ? 'assets/logo78px.png'
      : 'assets/logo78px.png';
  }
}
