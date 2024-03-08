import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';
import { ThemeToggleModule } from '../theme-toggle/theme-toggle.module';
import { SocialLinksModule } from '../social-links/social-links.module'; // Import SocialLinksModule
import { EllipsisModule } from '../ellipsis/ellipsis.module'; // Import EllipsisModule

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    EllipsisModule,
    RouterModule,
    ThemeToggleModule,
    SocialLinksModule, // Add SocialLinksModule to the imports array
  ],
  exports: [MenuComponent],
})
export class MenuModule {}
