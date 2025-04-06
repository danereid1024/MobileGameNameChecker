import { TestBed } from '@angular/core/testing';

import { NameDataService } from './name-data.service';

describe('NameDataService', () => {
  let service: NameDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NameDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
