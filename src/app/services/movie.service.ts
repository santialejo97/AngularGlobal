import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { MoviesResponse, Result } from '../interfaces/movie.interfaces';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private url: string = environment.url;
  constructor(private http: HttpClient) {}

  moviePopular(page: number = 1): Observable<Result[]> {
    return this.http
      .get<MoviesResponse>(`${this.url}/movie/popular?page=${page}`)
      .pipe(map((resp) => resp.movie.results));
  }
}
