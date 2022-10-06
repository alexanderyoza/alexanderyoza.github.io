import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPrivacyComponent } from './patient-privacy.component';

describe('PatientPrivacyComponent', () => {
  let component: PatientPrivacyComponent;
  let fixture: ComponentFixture<PatientPrivacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientPrivacyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
