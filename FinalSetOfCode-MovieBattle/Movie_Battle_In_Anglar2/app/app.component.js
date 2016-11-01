System.register(['angular2/core', 'angular2/router', 'angular2/http', 'rxjs/Rx', './index'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, index_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (index_1_1) {
                index_1 = index_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_router) {
                    this._router = _router;
                    this.pageTitle = "Movie Battle";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'm-app',
                        template: "\n<div class=\"container\">\n<router-outlet></router-outlet>\n</div>\n",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, index_1.MovieService]
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'Home', component: index_1.HomeComponent, useAsDefault: true },
                        { path: '/movieOne', name: 'MovieOne', component: index_1.MoviesComponent },
                        { path: '/movieTwo', name: 'MovieTwo', component: index_1.MoviesComponent },
                        { path: '/battle', name: 'MovieDetail', component: index_1.MovieDetailComponent },
                        { path: '/result', name: 'MovieResult', component: index_1.MovieResult }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map