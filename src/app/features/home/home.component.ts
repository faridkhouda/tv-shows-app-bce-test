// home.component.ts
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { TvSeriesService } from 'src/app/core/ShowService/tv-show.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  shows: any[] = [];
  pageSize: number = 10;
  totalShows: number = 0;
  searchTerm: string = '';

  private searchTerms = new Subject<string>();

  constructor(private tvSeriesService: TvSeriesService) {}

  ngOnInit() {
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

  getShows() {
    this.tvSeriesService.getShows().subscribe((data: any[]) => {
      this.totalShows = data.length;
      this.shows = this.sliceData(data, 0, this.pageSize);
    });
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    
    this.tvSeriesService.getShows().subscribe((data: any[]) => {
      this.shows = this.sliceData(data, startIndex, endIndex);
    });
  }

  onSearchChange() {
    this.searchTerms.next(this.searchTerm);
  }
  private sliceData(data: any[], startIndex: number, endIndex: number): any[] {
    return data.slice(startIndex, endIndex);
  }
}
