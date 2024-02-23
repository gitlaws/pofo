import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { Theme } from 'src/app/services/theme.enum';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
})
export class ThemeToggleComponent implements OnInit {
  // theme: Theme = Theme.Light; // Initialize theme with a default value

  // isDarkMode: boolean;
  isDarkMode!: boolean;

  isAnimated: boolean = false; // or true, depending on your default state

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => {
      this.isDarkMode = theme === Theme.Dark;
    });
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
