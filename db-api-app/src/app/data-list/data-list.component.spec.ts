import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataListComponent } from './data-list.component';
import { Retailer } from '../model/Retailer';
import { of } from 'rxjs';
import { DbDataApiService } from '../services/db-data-api/db-data-api.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { FilterService } from '../services/filter-service/filter.service';

describe('DataListComponent', () => {
  let component: DataListComponent;
  let fixture: ComponentFixture<DataListComponent>;
  let dbDataApiServiceSpy: jasmine.SpyObj<DbDataApiService>;
  let filterServiceSpy: jasmine.SpyObj<FilterService>;

  beforeEach(async () => {
    dbDataApiServiceSpy = jasmine.createSpyObj('DbDataApiService', [
      'getRetailers',
    ]);
    filterServiceSpy = jasmine.createSpyObj('FilterService', [
      'getSearchData$',
      'getFilteredData$',
    ]);

    await TestBed.configureTestingModule({
      imports: [DataListComponent],
      providers: [
        { provide: DbDataApiService, useValue: dbDataApiServiceSpy },
        { provide: LiveAnnouncer, useValue: {} },
        { provide: FilterService, useValue: filterServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch data on initialization', () => {
    const testData = [
      {
        reName: 'Name 1',
        country: 'Country 1',
        codingScheme: 'Scheme 1',
        reCode: 'Code 1',
      },
      {
        reName: 'Name 2',
        country: 'Country 2',
        codingScheme: 'Scheme 2',
        reCode: 'Code 2',
      },
    ];
    const expectedRetailers: Retailer[] = testData.map(
      (data) =>
        new Retailer(data.reName, data.country, data.codingScheme, data.reCode)
    );
    dbDataApiServiceSpy.getRetailers.and.returnValue(of(testData));

    component.ngOnInit();

    expect(dbDataApiServiceSpy.getRetailers).toHaveBeenCalled();
    expect(component.retailers).toEqual(expectedRetailers);
    expect(component.dataSource.data).toEqual(expectedRetailers);
  });

  it('should set paginator and sort after view initialization', () => {
    const paginatorSpy = jasmine.createSpyObj('MatPaginator', ['test']);
    const sortSpy = jasmine.createSpyObj('MatSort', ['test']);
    component.paginator = paginatorSpy;
    component.sort = sortSpy;

    component.ngAfterViewInit();

    expect(component.dataSource.paginator).toBe(paginatorSpy);
    expect(component.dataSource.sort).toBe(sortSpy);
  });

  it('should destroy subscriptions on component destroy', () => {
    spyOn(component['unsubscribe'], 'next');
    spyOn(component['unsubscribe'], 'complete');

    component.ngOnDestroy();

    expect(component['unsubscribe'].next).toHaveBeenCalled();
    expect(component['unsubscribe'].complete).toHaveBeenCalled();
  });

  it('should set filtered data on filter service subscription', () => {
    const testData = [
      {
        reName: 'Name 1',
        country: 'Country 1',
        codingScheme: 'Scheme 1',
        reCode: 'Code 1',
      },
      {
        reName: 'Name 2',
        country: 'Country 2',
        codingScheme: 'Scheme 2',
        reCode: 'Code 2',
      },
    ];
    const expectedRetailers: Retailer[] = testData.map(
      (data) =>
        new Retailer(data.reName, data.country, data.codingScheme, data.reCode)
    );
    filterServiceSpy.getFilteredData$.and.returnValue(of(expectedRetailers));

    component.ngOnInit();

    expect(component.dataSource.data).toEqual(expectedRetailers);
  });

  it('should set filter on search data service subscription', () => {
    const testData = 'test search data';
    filterServiceSpy.getSearchData$.and.returnValue(of(testData));

    component.ngOnInit();

    expect(component.dataSource.filter).toBe(testData);
  });
});
