import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketPartiesComponent } from './market-parties.component';

describe('MarketPartiesComponent', () => {
  let component: MarketPartiesComponent;
  let fixture: ComponentFixture<MarketPartiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketPartiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarketPartiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
