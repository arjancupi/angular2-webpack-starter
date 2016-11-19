import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { Observable } from 'rxjs/Observable';
import { MovieDetail } from '../models/movie-detail';
import { Title } from '../home/title';

import { AppState } from '../app.service';

@Component({
  selector: 'contacts-detail',
  templateUrl: './movie-detail.component.html',
  providers: [
    Title,
    MovieService
  ],
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  movie: MovieDetail;
  private sub: any;

  constructor(
    public title: Title,
    public appState: AppState,
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log('hello `MovieDetail` component');
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      this.movieService.getMovie(id)
        .subscribe(
        movie => this.movie = movie, // Bind to view
        err => {
          // Log errors if any
          console.log(err);
        });
    });
  }
}
