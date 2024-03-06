import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeService } from './services/theme.service';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';
import { HeaderComponent } from './components/header/header.component';
import { GridPanelComponent } from './components/grid-panel/grid-panel.component';
import { MainSectionComponent } from './components/main-section/main-section.component';

import { EllipsisComponent } from './components/ellipsis/ellipsis.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { MenuModule } from './components/menu/menu.module';

@NgModule({
  declarations: [
    AppComponent,
    ThemeToggleComponent,
    ComponentDocumentationComponent,
    HeaderComponent,
    GridPanelComponent,
    MainSectionComponent,
    EllipsisComponent,
    SocialLinksComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MenuModule],
  providers: [],
  bootstrap: [AppComponent, EllipsisComponent],
})
export class AppModule {}
