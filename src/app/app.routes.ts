import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';
import { MovieDetailComponent } from './movie-detail'

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies/:id', component: MovieDetailComponent },
  { path: '**', component: NoContentComponent },
];
