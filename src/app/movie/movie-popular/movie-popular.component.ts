import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie, Result } from '../../interfaces/movie.interfaces';
import { delay, Observer } from 'rxjs';

@Component({
  selector: 'app-movie-popular',
  templateUrl: './movie-popular.component.html',
  styleUrls: ['./movie-popular.component.css'],
})
export class MoviePopularComponent implements OnInit {
  public movie: Result[] = [];
  public pageTotal!: number;
  public initPages: number = 1;
  public termino!: string;
  public spinner: boolean = true;

  constructor(private movieServices: MovieService) {}

  ngOnInit(): void {
    this.getMovie(1);
    this.pageTotal = this.movieServices.Total;
  }

  getMovie(page: number) {
    const observe: Observer<Result[]> = {
      next: (value: Result[]) => {
        this.movie = value;
        this.spinner = false;
      },
      error: (err: any) => {
        this.spinner = true;
      },
      complete: () => {
        console.log('complete');
      },
    };
    this.movieServices.moviePopular(page).pipe(delay(300)).subscribe(observe);
  }

  paginador(page: number) {
    this.initPages = page;
    this.spinner = true;
    if (page <= this.pageTotal) {
      this.getMovie(page);
    } else {
      this.initPages = this.pageTotal;
    }
  }

  resulSearch(result: Result[]) {
    console.log(result);
    this.movie = result;
  }

  terminoSearch(termino: string) {
    this.termino = termino;
  }
}
