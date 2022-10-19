import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MoviePopularComponent } from './movie-popular/movie-popular.component';


@NgModule({
  declarations: [
    MoviePopularComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule
  ]
})
export class MovieModule { }
