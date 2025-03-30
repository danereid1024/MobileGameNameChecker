import { TestBed } from '@angular/core/testing';

import { NameCheckerService } from './name-checker.service';

describe('NameCheckerService', () => {
  let service: NameCheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NameCheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
