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
  selector: 'app-ellipsis',
  templateUrl: './ellipsis.component.html',
  styleUrl: './ellipsis.component.scss',
})
export class EllipsisComponent {
  currentTheme: string = '';
  isDarkMode: boolean = false;
  isMenuOpen = false;

  private unsubscribe$ = new Subject<void>();

  constructor(
    private themeService: ThemeService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}
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
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
