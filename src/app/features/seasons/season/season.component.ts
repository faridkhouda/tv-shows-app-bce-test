import { Component, Input } from '@angular/core';
import { Season } from 'src/app/interfaces/season.model';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent {
  @Input()
  season!: Season;
}
