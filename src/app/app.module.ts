import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { ShowListComponent } from './features/show-list/show-list.component';
import { ShowDetailsComponent } from './features/show-details/show-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShowListComponent,
    ShowDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
