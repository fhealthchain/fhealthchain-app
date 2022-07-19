import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryClinicComponent } from './primary-clinic.component';

describe('PrimaryClinicComponent', () => {
  let component: PrimaryClinicComponent;
  let fixture: ComponentFixture<PrimaryClinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryClinicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
