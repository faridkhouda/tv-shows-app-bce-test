import { Component, OnInit } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { TvSeriesService } from 'src/app/core/ShowService/tv-show.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  searchTerm: string = '';
  shows: any[] = [];
  pageSize: number = 10;
  totalShows: number = 0;

  private searchTerms = new Subject<string>();
  constructor(private tvSeriesService: TvSeriesService) {}
  
  onSearchChange() {
    this.searchTerms.next(this.searchTerm);
  }
  private sliceData(data: any[], startIndex: number, endIndex: number): any[] {
    return data.slice(startIndex, endIndex);
  }

  getShows() {
    this.tvSeriesService.getShows().subscribe((data: any[]) => {
      this.totalShows = data.length;
      this.shows = this.sliceData(data, 0, this.pageSize);
    });
  }

  ngOnInit(): void {
    {
  this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => term.trim() === '' ? this.tvSeriesService.getShows() : this.tvSeriesService.searchShows(term))
    ).subscribe((data: any[]) => {
      this.totalShows = data.length;
      this.shows = this.sliceData(data, 0, this.pageSize);
    });
    this.getShows();
  }
  }
  
}
