import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { HeadingComponent } from './heading/heading.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { CastsComponent } from './casts/casts.component';
import { SimilaresComponent } from './similares/similares.component';

@NgModule({
  declarations: [
    CardComponent,
    HeadingComponent,
    SearchComponent,
    CastsComponent,
    SimilaresComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [
    CardComponent,
    HeadingComponent,
    SearchComponent,
    CastsComponent,
    SimilaresComponent,
  ],
})
export class ComponentsModule {}
