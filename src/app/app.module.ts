import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { ShowListComponent } from './features/shows/show-list/show-list.component';
import { ShowDetailsComponent } from './features/shows/show-details/show-details.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { SeasonComponent } from './features/seasons/season/season.component';
import { SeasonListComponent } from './features/seasons/season-list/season-list.component';
import { EpisodeComponent } from './features/episodes/episode/episode.component';
import { EpisodeListComponent } from './features/episodes/episode-list/episode-list.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './features/navbar/navbar.component';
import { FooterComponent } from './features/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShowListComponent,
    ShowDetailsComponent,
    SeasonComponent,
    SeasonListComponent,
    EpisodeComponent,
    EpisodeListComponent,
    NavbarComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
