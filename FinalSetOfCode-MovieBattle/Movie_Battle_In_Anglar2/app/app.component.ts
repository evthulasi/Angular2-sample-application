import {Component} from 'angular2/core';
import {ROUTER_PROVIDERS, RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx'; 
import {HomeComponent,MoviesComponent,MovieDetailComponent,MovieService,MovieResult} from './index';

@Component({
    selector: 'm-app',
    template: `
<div class="container">
<router-outlet></router-outlet>
</div>
`,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS,HTTP_PROVIDERS,MovieService]
    
})
@RouteConfig([
        { path: '/home', name: 'Home', component: HomeComponent, useAsDefault:true},
        { path: '/movieOne', name: 'MovieOne', component: MoviesComponent },
        { path: '/movieTwo', name: 'MovieTwo', component: MoviesComponent },
        { path: '/battle', name: 'MovieDetail', component: MovieDetailComponent },
        { path: '/result', name: 'MovieResult', component: MovieResult }
])

export class AppComponent {
    pageTitle: string = "Movie Battle";
    
    constructor(private _router: Router) {
    }
}


