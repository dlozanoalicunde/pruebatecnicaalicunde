import { TestBed } from '@angular/core/testing';

import { LoadProfileService } from './load-profile.service';

describe('LoadProfileService', () => {
  let service: LoadProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
