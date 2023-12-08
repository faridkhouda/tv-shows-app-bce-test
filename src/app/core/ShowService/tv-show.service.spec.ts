import { TestBed } from '@angular/core/testing';

import { TvSeriesService } from './tv-show.service';

describe('TvShowService', () => {
  let service: TvSeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvSeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
