import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ShowListComponent } from './features/shows/show-list/show-list.component';
import { ShowDetailsComponent } from './features/shows/show-details/show-details.component';
import { SeasonComponent } from './features/seasons/season/season.component';
import { EpisodeComponent } from './features/episodes/episode/episode.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'shows', component: ShowListComponent },
  { path: 'show/:id', component: ShowDetailsComponent },
  { path: 'seasons', component: SeasonComponent },
  { path: 'episodes', component: EpisodeComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
