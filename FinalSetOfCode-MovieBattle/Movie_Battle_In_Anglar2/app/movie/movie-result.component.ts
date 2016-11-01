import {Component, Injectable, Input, Output} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {MovieService,IMovies,MovieDetailComponent,MoviesInfoComponent} from './index';

@Component({
    templateUrl: './app/movie/movie-result.component.html',
    directives: [MovieDetailComponent, MoviesInfoComponent]
})

export class MovieResult {
    movies: IMovies[];
    errorMessage: string;
    result: boolean = false;
    tie: boolean = false;
    constructor(private _router: Router, private _routeParams: RouteParams, private _movieService: MovieService) {
        this.movies = [];
    }
    
    ngOnInit(): void {
        this.getMovies();
    }

    getMovies() {
        this.movies = this._movieService.getStoredData();
        if (this.movies.length != 0) {
            if (this.movies[0].imdbRating < this.movies[1].imdbRating) {
                this.movies.unshift(this.movies[1]);
                this.movies.splice(2);
            }
            else if (this.movies[0].imdbRating > this.movies[1].imdbRating) {
                this.movies.unshift(this.movies[0]);
                this.movies.splice(0, 1);
            }
            else if (this.movies[0].imdbRating == this.movies[1].imdbRating) {
                this.tie = true;
            }
        }
        else if (this.movies.length == 0) {
            this._router.navigate(['MovieOne']);
        }
    }

    onHome(): void {
        this._router.navigate(['Home']);
    }
}

