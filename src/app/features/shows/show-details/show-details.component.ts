// show-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EpisodesService } from 'src/app/core/EpisodesService/episodes.service';
import { SeasonsService } from 'src/app/core/SeasonSerivce/seasons.service';
import { TvSeriesService } from 'src/app/core/ShowService/tv-show.service';
import { Episode } from 'src/app/interfaces/episode.model';
import { Season } from 'src/app/interfaces/season.model';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss'],
})
export class ShowDetailsComponent implements OnInit {
  showId!: number;
  showDetails: any;
  seasons: Season[] = [];
  episodes: Episode[] = [];

  constructor(
    private route: ActivatedRoute,
    private tvSeriesService: TvSeriesService,
    private seasonsService: SeasonsService,
    private episodesService: EpisodesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.showId = +params['id'];
      this.getShowDetails();
      this.fetchSeasons();
      this.fetchEpisodes();
    });
  }

  getShowDetails(): void {
    this.tvSeriesService.getShowDetails(this.showId).subscribe((details) => {
      this.showDetails = details;
    });
  }

  fetchSeasons() {
    this.seasonsService.getSeasons(this.showId).subscribe((seasons) => {
      this.seasons = seasons;
    });
  }
  fetchEpisodes() {
    this.episodesService.getEpisodes(this.showId).subscribe((episodes) => {
      this.episodes = episodes;
    });
  }
  toSeasonPage(){
    this.router.navigate(['/']);
  }
  toEpisodesPage(){
    this.router.navigate(['/']);
  }
}
