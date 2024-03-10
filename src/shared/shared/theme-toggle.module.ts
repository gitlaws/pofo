import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggleComponent } from '../../app/components/theme-toggle/theme-toggle.component';

@NgModule({
  declarations: [ThemeToggleComponent],
  exports: [ThemeToggleComponent],
  imports: [CommonModule],
})
export class ThemeToggleModule {}
