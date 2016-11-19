/* * * ./app/comments/services/comment.service.ts * * */
// Imports
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Movie } from '../models/movie';
import { MovieDetail } from '../models/movie-detail';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MovieService {
    // hold base url for movies
    private moviesUrl = 'https://startmeup.herokuapp.com/api/movies';

    // Resolve HTTP using the constructor
    constructor(public http: Http) { }

    // Fetch all existing movies
    getMovies(): Observable<Movie[]> {
        return this.http.get(this.moviesUrl)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }
    // Fetch movie by id
    getMovie(id: string): Observable<MovieDetail> {
        // convert id to number & decrement id because of api offset
        let identifier = Number(id) -1;
        return this.http.get(this.moviesUrl + '/' + identifier)
            // calling .json() on the response to return data
            .map((res: Response) => res.json())
            // errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }
}
