import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { MoviesResponse, Result } from '../interfaces/movie.interfaces';
import { environment } from '../../environments/environment';
import { FindMovieResponse } from '../interfaces/find-movie.interfaces';
import { CastResponse, Cast } from '../interfaces/cast-movie.interfaces';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private url: string = environment.url;
  private pagesTotal: number = 500;

  constructor(private http: HttpClient) {}

  get Total() {
    return this.pagesTotal;
  }

  moviePopular(page: number = 500): Observable<Result[]> {
    return this.http
      .get<MoviesResponse>(`${this.url}/movie/popular?page=${page}`)
      .pipe(
        tap((resp) => {
          this.pagesTotal = resp.movie.total_pages;
        }),
        map((resp) => resp.movie.results)
      );
  }

  movieSearch(termino: string): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(
      `${this.url}/movie/search?peli=${termino}`
    );
  }

  findMovie(id: number): Observable<FindMovieResponse> {
    const headers = new HttpHeaders({
      movieId: id.toString(),
    });
    return this.http.get<FindMovieResponse>(`${this.url}/movie/findmovie`, {
      headers,
    });
  }

  getCast(id: number): Observable<Cast[]> {
    const headers = new HttpHeaders({
      movieId: id.toString(),
    });
    return this.http
      .get<CastResponse>(`${this.url}/movie/cast`, { headers })
      .pipe(map(({ cast }) => cast));
  }
}
