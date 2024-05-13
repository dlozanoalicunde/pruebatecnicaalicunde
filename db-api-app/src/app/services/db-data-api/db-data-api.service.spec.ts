import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { DbDataApiService } from './db-data-api.service';
import { RetailerDTO } from '../../model/RetailerDTO';

describe('DbDataApiService', () => {
  let service: DbDataApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DbDataApiService],
    });
    service = TestBed.inject(DbDataApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return retailers', () => {
    const mockRetailers: RetailerDTO[] = [
      {
        reName: 'Retailer 1',
        country: 'Country 1',
        codingScheme: 'Scheme 1',
        reCode: 'Code 1',
      },
      {
        reName: 'Retailer 2',
        country: 'Country 2',
        codingScheme: 'Scheme 2',
        reCode: 'Code 2',
      },
    ];

    service.getRetailers().subscribe((retailers: RetailerDTO[]) => {
      expect(retailers.length).toBe(2);
      expect(retailers).toEqual(mockRetailers);
    });

    const req = httpMock.expectOne('/api');
    expect(req.request.method).toBe('GET');
    req.flush(mockRetailers);
  });
});
