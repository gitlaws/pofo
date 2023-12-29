// theme.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY = 'appTheme';
  private themeSubject = new BehaviorSubject('light');
  currentTheme = this.themeSubject.asObservable();

  // new setters & getters
  // getTheme(): string | null {
  //   return localStorage.getItem('theme');
  // }

  // setTheme(theme: string): void {
  //   localStorage.setItem('theme', theme);
  //   this.themeSubject.next(theme);
  // }

  // old setters & getters

  getTheme(): string | null {
    return localStorage.getItem(this.THEME_KEY);
  }

  setTheme(theme: string): void {
    localStorage.setItem(this.THEME_KEY, theme);
    document.documentElement.setAttribute('data-theme', theme);
  }
}
