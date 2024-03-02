import {
  Component,
  OnInit,
  OnDestroy,
  Renderer2,
  ElementRef,
  HostBinding,
} from '@angular/core';
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
  isDarkMode: boolean = false;

  private unsubscribe$ = new Subject<void>();

  constructor(
    private themeService: ThemeService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  toggleDropdown() {
    console.log('toggleDropdown method called'); // This will log when the method is called
    this.showDropdown = !this.showDropdown;
    console.log('showDropdown value is', this.showDropdown); // This will log the updated value of showDropdown
  }

  ngOnInit(): void {
    this.themeService.currentTheme
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((theme) => {
        this.isDarkMode = theme === Theme.Dark;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.unsubscribe();
  }
}
