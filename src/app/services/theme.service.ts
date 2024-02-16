// theme.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const LIGHT_THEME = 'light';
const DARK_THEME = 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme: 'light' | 'dark' = LIGHT_THEME;
  private themeSubject: BehaviorSubject<'light' | 'dark'> = new BehaviorSubject<
    'light' | 'dark'
  >(this.theme);

  getTheme(): 'light' | 'dark' {
    return this.theme;
  }

  setTheme(theme: 'light' | 'dark'): void {
    this.theme = theme;
    this.themeSubject.next(this.theme);
  }

  toggleTheme(): void {
    this.theme = this.theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
    this.themeSubject.next(this.theme);
  }

  get currentTheme() {
    return this.themeSubject.asObservable();
  }
}
