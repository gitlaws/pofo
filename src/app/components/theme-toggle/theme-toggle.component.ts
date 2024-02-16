// theme-toggle.component.ts
import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
})
export class ThemeToggleComponent implements OnInit {
  private clickSubject = new Subject<void>();

  darkMode = false;
  isAnimated = false;
  isClicked = false;

  constructor(private themeService: ThemeService) {
    this.clickSubject.pipe(debounceTime(300)).subscribe(() => {
      this.themeService.toggleTheme();
    });
  }

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe(() => {
      this.isAnimated = true;
      setTimeout(() => {
        this.isAnimated = false;
      }, 1000);
    });
  }

  get isDarkMode(): boolean {
    return this.themeService.getTheme() === 'dark';
  }

  get indicatorTransform(): string {
    return this.isDarkMode ? 'translateX(1.5em)' : 'none';
  }

  toggle(): void {
    // this.themeService.toggleTheme();
    this.clickSubject.next();
  }
}
