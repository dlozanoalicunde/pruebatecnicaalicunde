import { TestBed } from '@angular/core/testing';

import { DbDataApiService } from './db-data-api.service';

describe('DbDataApiService', () => {
  let service: DbDataApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbDataApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
