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

  @HostBinding('class.open') get isOpen() {
    return this.showDropdown;
  }

  private unsubscribe$ = new Subject<void>();

  constructor(
    private themeService: ThemeService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
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
