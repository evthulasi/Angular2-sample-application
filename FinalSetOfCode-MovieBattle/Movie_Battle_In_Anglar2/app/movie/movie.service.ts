import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {IMovies} from './index';

@Injectable()
export class MovieService {

    movies: IMovies[];

    constructor(private _http: Http) { this.movies = [];}
    
    getMovieDetails(_movieOne,_movieTwo): IMovies[] {
        this.movies = [];
       Observable.forkJoin(this._http.get("http://www.omdbapi.com/?t="+ _movieOne).map((response: Response) => <IMovies>response.json()),
            this._http.get("http://www.omdbapi.com/?t="+ _movieTwo).map((response: Response) => <IMovies>response.json()))
            .catch(this.handleError)
               .subscribe(
                   data => {
                       this.movies.push(data[0]);
                       this.movies.push(data[1]);
                   });
           return this.movies;
    }

    getStoredData() :IMovies[] {
        return this.movies;
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'server error');
    }
}