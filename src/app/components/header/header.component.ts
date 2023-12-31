import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showDropdown = false;

  currentTheme: string = '';

  constructor(private themeService: ThemeService) {
    this.themeService.currentTheme.subscribe(
      (theme) => (this.currentTheme = theme)
    );
  }

  ngOnInit(): void {}
}
