import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [{
    path: "",
    component: MainComponent,
},{
    path: "**",
    component: PageNotFoundComponent,
}];
