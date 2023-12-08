import { Component, Input } from '@angular/core';
import { Episode } from 'src/app/interfaces/episode.model';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent {
  @Input()
  episode!: Episode;
}
