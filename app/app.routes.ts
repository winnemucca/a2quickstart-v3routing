import { provideRouter, RouterConfig } from '@angular/router';
import {AboutComponent} from "./components/pages/about.component";
import {HomeComponent} from "./pages/home.component";

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/about',
        pathMatch: 'full'
    },
    { path: 'about', component: AboutComponent },
    { path: 'home', component: HomeComponent }
];

export const appRouterProviders = [
    provideRouter(routes)
];