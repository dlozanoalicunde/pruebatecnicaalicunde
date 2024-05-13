import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { By } from '@angular/platform-browser';
import { DataDetailsComponent } from './data-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DataDetailsComponent', () => {
  let component: DataDetailsComponent;
  let fixture: ComponentFixture<DataDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DataDetailsComponent,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DataDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display no data message if selectedData is not provided', () => {
    fixture.detectChanges();
    const noDataElement = fixture.debugElement.query(
      By.css('.data-details__no-data')
    );
    expect(noDataElement.nativeElement.textContent.trim()).toBe(
      'No data selected. Please, chose a row to see details'
    );
  });

  it('should display data fields when selectedData is provided', () => {
    const selectedData = {
      code: '123',
      country: 'USA',
      name: 'John',
      scheme: 'ABC',
    };
    component.selectedData = selectedData;
    fixture.detectChanges();
    const dataFieldElements = fixture.debugElement.queryAll(
      By.css('.data-details__field')
    );
    expect(dataFieldElements.length).toBe(Object.keys(selectedData).length);
    dataFieldElements.forEach((element, index) => {
      const key = Object.keys(selectedData)[index] as keyof typeof selectedData;
      const value = selectedData[key];
      expect(element.nativeElement.textContent).toContain(key);
      expect(element.nativeElement.textContent).toContain(value);
    });
  });
});
