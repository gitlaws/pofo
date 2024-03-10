import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EllipsisComponent } from '../../app/components/ellipsis/ellipsis.component';

@NgModule({
  declarations: [EllipsisComponent],
  imports: [CommonModule],
  exports: [EllipsisComponent], // Export EllipsisComponent so it can be used in other modules
})
export class EllipsisModule {}
