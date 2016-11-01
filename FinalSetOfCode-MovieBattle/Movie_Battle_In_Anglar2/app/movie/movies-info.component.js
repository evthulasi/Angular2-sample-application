System.register(['angular2/core', './movies'], function(exports_1, context_1) {
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
    var core_1, movies_1;
    var MoviesInfoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (movies_1_1) {
                movies_1 = movies_1_1;
            }],
        execute: function() {
            MoviesInfoComponent = (function () {
                function MoviesInfoComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', movies_1.IMovies)
                ], MoviesInfoComponent.prototype, "moviesInfo", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], MoviesInfoComponent.prototype, "ratingVisible", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], MoviesInfoComponent.prototype, "indx", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], MoviesInfoComponent.prototype, "comparision", void 0);
                MoviesInfoComponent = __decorate([
                    core_1.Component({
                        selector: 'movies-iterator',
                        template: "\n         <h2 *ngIf=\"indx==0 && comparision==true\">Movie One</h2>\n         <h2 *ngIf=\"indx==1 && comparision==true\">Movie Two</h2>\n\n         <h2 *ngIf=\"indx==0 && comparision==false\">Winner</h2>\n         <h2 *ngIf=\"indx==1 && comparision==false\">Looser</h2>\n\n        <p class='lead'>\n            <li class=\"list-group-item\" *ngIf=\"ratingVisible==true\">IMDB Rating:  {{moviesInfo.imdbRating}}</li>\n            <li class=\"list-group-item\"><img src={{moviesInfo.Poster}} class=\"img-rounded img-responsive center-block\" /></li>\n            <li class=\"list-group-item\">Title:  {{moviesInfo.Title}}</li>\n            <li class=\"list-group-item\">Genre: {{moviesInfo.Genre}}</li>\n            <li class=\"list-group-item\">Director: {{moviesInfo.Director}}</li>\n            <li class=\"list-group-item\">Actors: {{moviesInfo.Actors}}</li>\n            <li class=\"list-group-item\">Released: {{moviesInfo.Released}}</li>\n            <li class=\"list-group-item\">Language: {{moviesInfo.Language}}</li>\n\n        </p>\n   \n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MoviesInfoComponent);
                return MoviesInfoComponent;
            }());
            exports_1("MoviesInfoComponent", MoviesInfoComponent);
        }
    }
});
//# sourceMappingURL=movies-info.component.js.map