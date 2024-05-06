import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoadProfileService } from './load-profile.service';
import { environment } from '@env/environment';
import { MbaOptions } from '@models/mba-options.model';
import { LoadProfile } from '@models/load-profile.model';
describe('LoadProfileService', () => {
  let service: LoadProfileService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoadProfileService]
    });
    service = TestBed.inject(LoadProfileService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get MBA options', () => {
    const mockMbaOptions: MbaOptions[] = [
      {
        "country": "Sweden",
        "countryCode": "SE",
        "mbas": [
          {
            "code": "10Y1001A1001A44P",
            "name": "SE1"
          }
        ]
      },
    ];
    service.getMba().subscribe(options => {
      expect(options).toEqual(mockMbaOptions);
    });
    const req = httpMock.expectOne(`${environment.API_URL}EXP18/MBAOptions`);
    expect(req.request.method).toBe('GET');
    req.flush(mockMbaOptions);
  });

  it('should get aggregate data', () => {
    const mockAggregateData: LoadProfile[] = [
      {
        "timestamp": "2024-05-01T00:00:00",
        "timestampUTC": "2024-05-01T00:00:00Z",
        "mgaCode": "ALS",
        "mgaName": "Alingsås",
        "mba": "SE3",
        "quantity": -540.892
    }
    ];
    const mockParams = { end: 'end', mba: 'mba', mga: 'mga', resolution: 'resolution', start: 'start' };
    service.getAggregate(mockParams.end, mockParams.mba, mockParams.mga, mockParams.resolution, mockParams.start).subscribe(data => {
      expect(data).toEqual(mockAggregateData);
    });
    const req = httpMock.expectOne(`${environment.API_URL}EXP18/Aggregate?end=${mockParams.end}&mba=${mockParams.mba}&mga=${mockParams.mga}&resolution=${mockParams.resolution}&start=${mockParams.start}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockAggregateData);
  });
});