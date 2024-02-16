// app.component.ts
import { Component, OnInit, HostBinding } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @HostBinding('attr.data-theme') theme: 'light' | 'dark' = 'light';
  private themeSubscription: Subscription = new Subscription(); // Initialize themeSubscription here

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeSubscription.add(
      this.themeService.currentTheme.subscribe((theme) => {
        this.theme = theme;
      })
    );
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
