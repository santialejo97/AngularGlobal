import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { HeadingComponent } from './heading/heading.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CardComponent, HeadingComponent],
  imports: [CommonModule, RouterModule],
  exports: [CardComponent, HeadingComponent],
})
export class ComponentsModule {}
