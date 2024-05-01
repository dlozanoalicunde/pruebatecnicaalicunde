import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceResponsiblePartiesComponent } from './balance-responsible-parties.component';

describe('BalanceResponsiblePartiesComponent', () => {
  let component: BalanceResponsiblePartiesComponent;
  let fixture: ComponentFixture<BalanceResponsiblePartiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BalanceResponsiblePartiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BalanceResponsiblePartiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
