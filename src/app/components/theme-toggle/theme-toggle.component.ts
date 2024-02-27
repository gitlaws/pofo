import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { Theme } from 'src/app/services/theme.enum';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
})
export class ThemeToggleComponent implements OnInit {
  isDarkMode!: boolean;
  isAnimated: boolean = false;
  logoPath = 'assets/slogo.png';

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

  toggleImage() {
    const newLogoPath =
      this.logoPath === 'assets/slogo.png'
        ? 'assets/slogod.png'
        : 'assets/slogo.png';
    this.themeService.changeLogoPath(newLogoPath);
    this.logoPath = newLogoPath;
  }
}
