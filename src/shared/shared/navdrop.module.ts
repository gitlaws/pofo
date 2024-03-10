import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavdropComponent } from '../../app/components/navdrop/navdrop.component';
import { ThemeToggleModule } from './theme-toggle.module';
import { SocialLinksModule } from './social-links.module';

@NgModule({
  declarations: [NavdropComponent],
  imports: [CommonModule, RouterModule, ThemeToggleModule, SocialLinksModule],
  exports: [NavdropComponent],
})
export class NavdropModule {}
