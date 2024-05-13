import { TestBed } from '@angular/core/testing';

import { BalanceResponsiblePartiesService } from './balance-responsible-parties.service';

describe('BalanceResponsiblePartiesService', () => {
  let service: BalanceResponsiblePartiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BalanceResponsiblePartiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
