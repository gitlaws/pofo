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
  logoPath!: string;

  private unsubscribe$ = new Subject<void>();

  constructor(private themeService: ThemeService) {}

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
    this.themeService.currentLogoPath.subscribe(
      (path) => (this.logoPath = path)
    );
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
