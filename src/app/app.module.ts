import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';
import { HeaderComponent } from './components/header/header.component';
import { GridPanelComponent } from './components/grid-panel/grid-panel.component';
import { MainSectionComponent } from './components/main-section/main-section.component';

import { MenuModule } from './components/menu/menu.module';
import { ThemeToggleModule } from './components/theme-toggle/theme-toggle.module';
import { SocialLinksModule } from './components/social-links/social-links.module'; // Import SocialLinksModule
import { EllipsisModule } from './components/ellipsis/ellipsis.module'; // Import EllipsisModule

@NgModule({
  declarations: [
    AppComponent,
    ComponentDocumentationComponent,
    HeaderComponent,
    GridPanelComponent,
    MainSectionComponent,
    // EllipsisComponent, // Remove EllipsisComponent from declarations
    // Remove SocialLinksComponent from declarations
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    ThemeToggleModule,
    SocialLinksModule, // Add SocialLinksModule to imports
    EllipsisModule, // Add EllipsisModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
