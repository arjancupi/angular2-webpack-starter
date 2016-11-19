import { Component } from '@angular/core';
import { AppState } from '../app.service';
import { Title } from './title';
import { XLarge } from './x-large';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title,
    MovieService
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: ['./home.component.css'],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.component.html'
})
export class HomeComponent {

  movies: Movie[];
  // TypeScript public modifiers
  constructor(public appState: AppState, public title: Title, private moviesService: MovieService) {

  }

  ngOnInit() {
    console.log('hello `Home` component');
    this.loadMovies();
  }

  loadMovies() {

    // Get all comments
    this.moviesService
      .getMovies()
      .subscribe(movies => this.movies = movies, // Bind to view
      err => {// Log errors if any
        console.log(err);
      });
  }
}
