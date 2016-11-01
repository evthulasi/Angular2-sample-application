System.register(['angular2/core', 'angular2/common', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1;
    var MoviesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            MoviesComponent = (function () {
                function MoviesComponent(fb, _routeParams, _router) {
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this.movieCount = "";
                    this.movieOne = "";
                    this.movieForm = fb.group({
                        movieName: ["", common_1.Validators.required]
                    });
                    this.movieOne = this._routeParams.get('firstMovie');
                    if (this.movieOne == null || undefined) {
                        this.movieCount = "Movie One";
                    }
                    else if (this.movieOne != null || undefined) {
                        this.movieCount = "Movie Two";
                    }
                }
                MoviesComponent.prototype.doMovie = function (event) {
                    if (this.movieOne == null || undefined) {
                        this._router.navigate(['MovieTwo', { firstMovie: this.movieForm.value.movieName }]);
                    }
                    else if (this.movieOne != null || undefined) {
                        this._router.navigate(['MovieDetail', { firstMovie: this.movieOne, secondMovie: this.movieForm.value.movieName }]);
                    }
                };
                MoviesComponent = __decorate([
                    core_1.Component({
                        templateUrl: './app/movie/movies.component.html'
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_1.RouteParams, router_1.Router])
                ], MoviesComponent);
                return MoviesComponent;
            }());
            exports_1("MoviesComponent", MoviesComponent);
        }
    }
});
//# sourceMappingURL=movies.component.js.map