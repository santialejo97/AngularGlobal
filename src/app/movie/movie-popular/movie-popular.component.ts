import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie, Result } from '../../interfaces/movie.interfaces';

@Component({
  selector: 'app-movie-popular',
  templateUrl: './movie-popular.component.html',
  styleUrls: ['./movie-popular.component.css'],
})
export class MoviePopularComponent implements OnInit {
  public movie!: Result[];
  constructor(private movieServices: MovieService) {}

  ngOnInit(): void {
    this.movieServices.moviePopular().subscribe((resp) => {
      this.movie = resp;
    });
  }
}
