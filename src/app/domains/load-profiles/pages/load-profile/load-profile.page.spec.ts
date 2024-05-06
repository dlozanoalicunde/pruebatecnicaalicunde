import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadProfilePage } from './load-profile.page';

describe('LoadProfilePage', () => {
  let component: LoadProfilePage;
  let fixture: ComponentFixture<LoadProfilePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadProfilePage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
