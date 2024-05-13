import {
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync,
} from '@angular/core/testing';
import { SearchFilterComponent } from './search-filter.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterService } from '../services/filter-service/filter.service';

describe('SearchFilterComponent', () => {
  let component: SearchFilterComponent;
  let fixture: ComponentFixture<SearchFilterComponent>;
  let filterServiceSpy: jasmine.SpyObj<FilterService>;

  beforeEach(async () => {
    filterServiceSpy = jasmine.createSpyObj('FilterService', [
      'setSearchData',
      'setFilteredData',
    ]);

    await TestBed.configureTestingModule({
      imports: [
        SearchFilterComponent,
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatButtonModule,
        BrowserAnimationsModule,
      ],
      providers: [{ provide: FilterService, useValue: filterServiceSpy }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFilterComponent);
    component = fixture.componentInstance;
    component.columns = ['code', 'name', 'country', 'scheme'];
    component.data = [
      {
        code: 'Code 1',
        name: 'Name 1',
        country: 'Country 1',
        scheme: 'Scheme 1',
      },
      {
        code: 'Code 2',
        name: 'Name 2',
        country: 'Country 2',
        scheme: 'Scheme 2',
      },
    ];
    component.filters = {
      code: { checked: false, value: '' },
      name: { checked: false, value: '' },
      country: { checked: false, value: '' },
      scheme: { checked: false, value: '' },
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call setSearchData on input keyup', fakeAsync(() => {
    const inputElement: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    inputElement.value = 'test';
    inputElement.dispatchEvent(new Event('keyup'));

    tick();

    expect(filterServiceSpy.setSearchData).toHaveBeenCalledWith('test');
  }));

  it('should call filterBy on checkbox change', () => {
    spyOn(component, 'filterBy');
    const checkboxElement: HTMLInputElement =
      fixture.nativeElement.querySelector('input[type="checkbox"]');
    checkboxElement.dispatchEvent(new Event('change'));

    expect(component.filterBy).toHaveBeenCalled();
  });

  it('should call saveFilterValue on input keyup', fakeAsync(() => {
    const checkboxElement: HTMLInputElement =
      fixture.nativeElement.querySelector('input[type="checkbox"]');
    checkboxElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    const inputElement: HTMLInputElement =
      fixture.nativeElement.querySelector('input[type="text"]');
    inputElement.value = 'test';
    inputElement.dispatchEvent(new Event('keyup'));

    tick();

    expect(component.saveFilterValue).toHaveBeenCalled();
  }));

  it('should call setFilteredData on button click', () => {
    spyOn(component, 'setFilteredData');
    const buttonElement: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    buttonElement.click();

    expect(component.setFilteredData).toHaveBeenCalled();
  });

  it('should call setFilteredData with correct data', fakeAsync(() => {
    component.data = [
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

    component.columns = ['name'];
    component.filters = { name: { checked: true, value: 'item 1' } };

    component.setFilteredData();
    tick();

    expect(filterServiceSpy.setFilteredData).toHaveBeenCalledWith([
      {
        code: 'code 1',
        name: 'Item 1',
        country: 'country 1',
        scheme: 'scheme 1',
      },
    ]);
  }));
});
