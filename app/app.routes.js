"use strict";
var router_1 = require('@angular/router');
var about_component_1 = require("./components/pages/about.component");
var home_component_1 = require("./pages/home.component");
var routes = [
    {
        path: '',
        redirectTo: '/about',
        pathMatch: 'full'
    },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'home', component: home_component_1.HomeComponent }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map