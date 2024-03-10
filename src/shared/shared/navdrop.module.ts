import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavdropComponent } from '../../app/components/navdrop/navdrop.component'; // import NavdropComponent

@NgModule({
  declarations: [
    NavdropComponent, // declare NavdropComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    NavdropComponent, // export NavdropComponent if it should be usable in other modules
  ],
})
export class NavdropModule {}
