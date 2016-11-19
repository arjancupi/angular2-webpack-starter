import {
  inject,
  TestBed
} from '@angular/core/testing';
import { Component } from '@angular/core';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

// Load the implementations that should be tested
import { AppState } from '../app.service';
import { MovieDetailComponent } from './movie-detail.component';
import { Title } from '../home/title';
import { MovieService } from '../services/movie.service';

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BaseRequestOptions,
      MockBackend,
      {
        provide: Http,
        useFactory: function (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
          return new Http(backend, defaultOptions);
        },
        deps: [MockBackend, BaseRequestOptions]
      },
      AppState,
      Title,
      MovieDetailComponent
    ]
  }));

  it('should have a title', inject([MovieDetailComponent], (movieDetail: MovieDetailComponent) => {
    expect(!!movieDetail.title).toEqual(true);
  }));

  it('should log ngOnInit', inject([MovieDetailComponent], (movieDetail: MovieDetailComponent) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    movieDetail.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));
});
