import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/shared/services/theme.service';

@Component({
  selector: 'app-grid-panel',
  templateUrl: './grid-panel.component.html',
  styleUrls: ['./grid-panel.component.scss'],
})
export class GridPanelComponent {
  currentTheme: string = 'light';

  constructor(private themeService: ThemeService) {
    this.themeService.currentTheme.subscribe(
      (theme) => (this.currentTheme = theme)
    );
  }

  ngOnInit(): void {}
}
