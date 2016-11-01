import {Component} from 'angular2/core';
import {FormBuilder, Validators} from 'angular2/common';
import {Router, RouteParams} from 'angular2/router';

@Component({
    templateUrl: './app/movie/movies.component.html'
})

export class MoviesComponent {

    movieCount: string = "";
    movieOne: any = "";

    constructor(fb: FormBuilder, private _routeParams: RouteParams, private _router: Router) {

        this.movieForm = fb.group({
            movieName: ["", Validators.required]
        });

        this.movieOne = this._routeParams.get('firstMovie');
        if (this.movieOne == null || undefined) {
            this.movieCount = "Movie One";
        }
        else if (this.movieOne != null || undefined) {
            this.movieCount = "Movie Two";
        }
    }

    doMovie(event) {
        if (this.movieOne == null || undefined) {
            this._router.navigate(['MovieTwo', { firstMovie: this.movieForm.value.movieName }]);
        }
        else if (this.movieOne != null || undefined) {
            this._router.navigate(['MovieDetail', { firstMovie: this.movieOne, secondMovie: this.movieForm.value.movieName }]);
        }
    }
}