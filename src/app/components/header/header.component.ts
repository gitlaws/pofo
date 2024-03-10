import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ThemeService } from 'src/shared/services/theme.service';
import { Theme } from 'src/shared/services/theme.enum';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isDarkMode: boolean = false;
  currentTheme: string = '';

  private unsubscribe$ = new Subject<void>();

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.currentTheme
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((theme) => {
        this.isDarkMode = theme === Theme.Dark;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.unsubscribe();
  }
}
