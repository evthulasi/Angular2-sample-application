System.register(['angular2/core', 'angular2/router', './movie.service', './movies-info.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, movie_service_1, movies_info_component_1;
    var MovieDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (movie_service_1_1) {
                movie_service_1 = movie_service_1_1;
            },
            function (movies_info_component_1_1) {
                movies_info_component_1 = movies_info_component_1_1;
            }],
        execute: function() {
            MovieDetailComponent = (function () {
                function MovieDetailComponent(_movieService, _routeParams, _router) {
                    this._movieService = _movieService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this.movies = [];
                    this._firstMovie = "";
                    this._secondMovie = "";
                }
                MovieDetailComponent.prototype.ngOnInit = function () {
                    this._firstMovie = this._routeParams.get('firstMovie');
                    this._secondMovie = this._routeParams.get('secondMovie');
                    this.movies = this._movieService.getMovieDetails(this._firstMovie, this._secondMovie);
                };
                MovieDetailComponent.prototype.onMovieOne = function () {
                    this._router.navigate(['MovieOne']);
                };
                MovieDetailComponent.prototype.onMovieResult = function () {
                    this._router.navigate(['MovieResult']);
                };
                MovieDetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: './app/movie/movie-detail.component.html',
                        directives: [movies_info_component_1.MoviesInfoComponent]
                    }), 
                    __metadata('design:paramtypes', [movie_service_1.MovieService, router_1.RouteParams, router_1.Router])
                ], MovieDetailComponent);
                return MovieDetailComponent;
            }());
            exports_1("MovieDetailComponent", MovieDetailComponent);
        }
    }
});
//# sourceMappingURL=movie-detail.component.js.map