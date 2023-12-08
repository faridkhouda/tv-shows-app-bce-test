// seasons.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Season } from '../../interfaces/season.model';

@Injectable({
  providedIn: 'root',
})
export class SeasonsService {
  private apiUrl = 'https://api.tvmaze.com/shows';

  constructor(private http: HttpClient) {}

  getSeasons(showId: number): Observable<Season[]> {
    const url = `${this.apiUrl}/${showId}/seasons`;
    return this.http.get<Season[]>(url);
  }
}
