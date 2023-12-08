// episodes.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Episode } from 'src/app/interfaces/episode.model';


@Injectable({
  providedIn: 'root',
})
export class EpisodesService {
  private baseUrl = 'https://api.tvmaze.com/shows';

  constructor(private http: HttpClient) {}

  getEpisodes(showId: number, includeSpecials: boolean = false): Observable<Episode[]> {
    const specialsParam = includeSpecials ? '?specials=1' : '';
    const url = `${this.baseUrl}/${showId}/episodes${specialsParam}`;
    return this.http.get<Episode[]>(url);
  }

  getEpisode(showId: number, episodeId: number): Observable<Episode> {
    const url = `${this.baseUrl}/${showId}/episodes/${episodeId}`;
    return this.http.get<Episode>(url);
  }
}
