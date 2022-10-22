import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/interfaces/movie.interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  private imageUrl: string = environment.imagesPath;
  @Input('movie') movie!: Result;
  public images!: string;
  public noImages: string =
    'https://w7.pngwing.com/pngs/768/975/png-transparent-deadpool-domino-film-test-screening-superhero-movie-deadpool.png';
  constructor() {}

  ngOnInit(): void {
    if (!this.movie.poster_path) {
      this.images = `${this.imageUrl}${this.movie.backdrop_path}`;
    } else {
      this.images = `${this.imageUrl}${this.movie.poster_path}`;
    }
  }
}
