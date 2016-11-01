import {Component, Injectable, Input, Output} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {MovieService} from './movie.service';
import {MoviesInfoComponent} from './movies-info.component'
import {IMovies} from './index';

@Component({
    templateUrl: './app/movie/movie-detail.component.html',
    directives: [MoviesInfoComponent]
})

export class MovieDetailComponent {

    movies: IMovies[];
    errorMessage: string;

    constructor(private _movieService: MovieService, private _routeParams: RouteParams, private _router: Router) {
        this.movies = [];
        this._firstMovie = "";
        this._secondMovie = "";
    }

    private _firstMovie;
    private _secondMovie;

    ngOnInit(): void {
        this._firstMovie = this._routeParams.get('firstMovie');
        this._secondMovie = this._routeParams.get('secondMovie');
        this.movies= this._movieService.getMovieDetails(this._firstMovie, this._secondMovie);
    }

    onMovieOne(): void {
        this._router.navigate(['MovieOne']);
    }
    onMovieResult(): void {
        this._router.navigate(['MovieResult']);
    }
}