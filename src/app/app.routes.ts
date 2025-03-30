import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { IdSearchComponent } from '../pages/id-search/id-search.component';

export const routes: Routes = [

{   path: '',
    component: HomeComponent,
    title: 'Home Page'
},
{   path: 'id-search/:id',
    component: IdSearchComponent,
    title: 'ID Search Page'
}
];
