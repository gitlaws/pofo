import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';
import { HeaderComponent } from './components/header/header.component';
import { GridPanelComponent } from './components/grid-panel/grid-panel.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { ThemeToggleModule } from '../shared/shared/theme-toggle.module';
import { SocialLinksModule } from '../shared/shared/social-links.module';
import { NavdropModule } from '../shared/shared/navdrop.module'; // Import NavdropModule
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MenuLinksModule } from './components/menu-links/menu-links.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    ComponentDocumentationComponent,
    HeaderComponent,
    GridPanelComponent,
    MainSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThemeToggleModule,
    SocialLinksModule,
    NavdropModule,
    MenuLinksModule,
  ],
  exports: [NavdropModule, MenuLinksModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
