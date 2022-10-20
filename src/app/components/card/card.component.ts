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
  constructor() {}

  ngOnInit(): void {
    this.images = `${this.imageUrl}${this.movie.poster_path}`;
  }
}
