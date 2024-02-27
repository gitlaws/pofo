import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { Theme } from 'src/app/services/theme.enum';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentTheme: string = '';
  showDropdown = false;
  hideDropdownTimeout: any;
  isDarkMode: boolean = false;
  logoPath = 'assets/slogo.png';

  private unsubscribe$ = new Subject<void>();

  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.logoPath = this.isDarkMode ? 'assets/slogod.png' : 'assets/slogo.png';
  }

  handleError() {
    this.logoPath = 'assets/error.png'; // path to a fallback image
  }

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
    this.themeService.currentTheme
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((theme) => {
        this.isDarkMode = theme === Theme.Dark;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
