import {Component} from 'angular2/core';
import { Router} from 'angular2/router';

@Component({
    templateUrl: './app/movie/home.html'
})

export class HomeComponent {
    constructor(private _router: Router) {
    }

    movieOne(): void {
        this._router.navigate(['MovieOne']);
    }
}