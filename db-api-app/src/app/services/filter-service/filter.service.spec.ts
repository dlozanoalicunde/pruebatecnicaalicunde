import { TestBed } from '@angular/core/testing';
import { FilterService } from './filter.service';

describe('FilterService', () => {
  let service: FilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterService],
    });
    service = TestBed.inject(FilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get search data', (done: DoneFn) => {
    const testData = 'test search data';

    service.setSearchData(testData);
    service.getSearchData$().subscribe((data) => {
      expect(data).toEqual(testData);
      done();
    });
  });

  it('should set and get filtered data', (done: DoneFn) => {
    const testData = [
      {
        code: 'code 1',
        name: 'Item 1',
        country: 'country 1',
        scheme: 'scheme 1',
      },
      {
        code: 'code 2',
        name: 'Item 2',
        country: 'country 2',
        scheme: 'scheme 2',
      },
    ];

    service.setFilteredData(testData);
    service.getFilteredData$().subscribe((data) => {
      expect(data).toEqual(testData);
      done();
    });
  });
});
