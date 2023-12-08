// tv-series.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvSeriesService {
  private apiUrlSearch = 'https://api.tvmaze.com/search/shows'; // Update the search URL

  constructor(private http: HttpClient) {}

  searchShows(query: string): Observable<any[]> {
    const searchUrl = `${this.apiUrlSearch}?q=${query}`;
    return this.http.get<any[]>(searchUrl);
  }

  getShows(): Observable<any[]> {
    return this.http.get<any[]>('https://api.tvmaze.com/shows');
  }

  getShowDetails(showId: number): Observable<any> {
    const url = `https://api.tvmaze.com/shows/${showId}`;
    return this.http.get<any[]>(url);
  }
}
