import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Result } from 'src/app/interfaces/movie.interfaces';
import { MovieService } from '../../services/movie.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output('termino') termino: EventEmitter<string> = new EventEmitter();
  @Output('result') result: EventEmitter<Result[]> = new EventEmitter();

  public terminoSearch: string = '';

  constructor(private movieServices: MovieService) {}

  ngOnInit(): void {}

  buscar() {
    this.movieServices
      .movieSearch(this.terminoSearch)
      .pipe(delay(1000))
      .subscribe((resp) => {
        this.result.emit(resp.movie.results);
        this.termino.emit(this.terminoSearch);
        this.terminoSearch = '';
      });
  }
}
