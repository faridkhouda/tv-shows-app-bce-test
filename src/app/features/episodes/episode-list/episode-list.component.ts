import { Component, Input } from '@angular/core';
import { Episode } from 'src/app/interfaces/episode.model';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.scss']
})
export class EpisodeListComponent {
  @Input()
  episodes: Episode[] = [];
}
