System.register(['angular2/core', 'angular2/router', './index'], function(exports_1, context_1) {
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
    var core_1, router_1, index_1;
    var MovieResult;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }],
        execute: function() {
            MovieResult = (function () {
                function MovieResult(_router, _routeParams, _movieService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._movieService = _movieService;
                    this.result = false;
                    this.tie = false;
                    this.movies = [];
                }
                MovieResult.prototype.ngOnInit = function () {
                    this.getMovies();
                };
                MovieResult.prototype.getMovies = function () {
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
                };
                MovieResult.prototype.onHome = function () {
                    this._router.navigate(['Home']);
                };
                MovieResult = __decorate([
                    core_1.Component({
                        templateUrl: './app/movie/movie-result.component.html',
                        directives: [index_1.MovieDetailComponent, index_1.MoviesInfoComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, index_1.MovieService])
                ], MovieResult);
                return MovieResult;
            }());
            exports_1("MovieResult", MovieResult);
        }
    }
});
//# sourceMappingURL=movie-result.component.js.map