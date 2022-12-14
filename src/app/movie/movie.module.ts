import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MoviePopularComponent } from './movie-popular/movie-popular.component';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { InfoMovieComponent } from './info-movie/info-movie.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MoviePopularComponent, InfoMovieComponent],
  imports: [
    CommonModule,
    MovieRoutingModule,
    FormsModule,
    ComponentsModule,
    RouterModule,
  ],
})
export class MovieModule {}
