import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from '../../interfaces/find-movie.interfaces';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-info-movie',
  templateUrl: './info-movie.component.html',
  styleUrls: ['./info-movie.component.css'],
})
export class InfoMovieComponent implements OnInit {
  public movie!: Movie;
  public images!: string;
  constructor(
    private activiteRoute: ActivatedRoute,
    private movieServices: MovieService
  ) {}

  ngOnInit(): void {
    this.activiteRoute.params.subscribe(({ id }) => {
      this.movieServices.findMovie(id).subscribe(({ ok, movie }) => {
        this.movie = movie;
        this.imagesPoster(movie.poster_path);
      });
    });
  }

  imagesPoster(poster: string) {
    this.images = environment.imagesPath + poster;
    console.log(this.images);
  }
}
