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
  showDropdown: boolean = false;
  hideDropdownTimeout: ReturnType<typeof setTimeout> | undefined;
  isDarkMode: boolean = false;
  private readonly darkTheme: Theme = Theme.Dark;

  private unsubscribe$ = new Subject<void>();

  constructor(private themeService: ThemeService) {}

  toggleDropdown(): void {
    if (this.hideDropdownTimeout) {
      clearTimeout(this.hideDropdownTimeout);
    }
    this.showDropdown = true;
  }

  hideDropdown(): void {
    this.hideDropdownTimeout = setTimeout(() => {
      this.showDropdown = false;
    }, 3000);
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
    if (this.hideDropdownTimeout) {
      clearTimeout(this.hideDropdownTimeout);
    }
  }
}
