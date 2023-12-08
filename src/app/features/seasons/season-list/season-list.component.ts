import { Component, Input } from '@angular/core';
import { Season } from 'src/app/interfaces/season.model';

@Component({
  selector: 'app-season-list',
  templateUrl: './season-list.component.html',
  styleUrls: ['./season-list.component.scss']
})
export class SeasonListComponent {

  @Input()
  seasons: Season[] = [];
}
