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

import { Title } from '../home/title/title.service';
import { MovieService } from './movie.service'

describe('MovieService', () => {
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
      Title,
      MovieService
    ]
  }));

  it('should have http', inject([MovieService], (service: MovieService) => {
    expect(!!service.http).toEqual(true);
  }));

});
