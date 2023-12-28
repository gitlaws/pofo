// theme.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY = 'appTheme';
  currentTheme: string = 'light'; // default theme

  darkThemeSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(private themeService: ThemeService) {}

  setDarkTheme(isDarkTheme: boolean) {
    this.darkThemeSubject.next(isDarkTheme);
  }

  setTheme(theme: string): void {
    localStorage.setItem(this.THEME_KEY, theme);
    document.documentElement.setAttribute('data-theme', theme);
  }

  getTheme(): string | null {
    return localStorage.getItem(this.THEME_KEY);
  }
}
