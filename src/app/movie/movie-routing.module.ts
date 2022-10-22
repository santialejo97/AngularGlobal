import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoMovieComponent } from './info-movie/info-movie.component';
import { MoviePopularComponent } from './movie-popular/movie-popular.component';

const routes: Routes = [
  {
    path: 'popular',
    component: MoviePopularComponent,
  },
  {
    path: 'infomovie/:id',
    component: InfoMovieComponent,
  },
  {
    path: '**',
    redirectTo: 'popular',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieRoutingModule {}
