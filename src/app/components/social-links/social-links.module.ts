import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLinksComponent } from './social-links.component';

@NgModule({
  declarations: [SocialLinksComponent],
  exports: [SocialLinksComponent],
  imports: [CommonModule],
})
export class SocialLinksModule {}
