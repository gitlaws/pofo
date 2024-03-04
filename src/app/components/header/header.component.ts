import {
  Component,
  OnInit,
  OnDestroy,
  Renderer2,
  ElementRef,
  HostBinding,
  Input,
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
  @Input() links: string[] = [];
  isOpen = false;
  isDarkMode: boolean = false;
  currentTheme: string = '';
  menuVisible = false;

  private unsubscribe$ = new Subject<void>();

  constructor(
    private themeService: ThemeService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  // toggleDropdown() {
  //   this.isOpen = !this.isOpen;
  // }

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
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
