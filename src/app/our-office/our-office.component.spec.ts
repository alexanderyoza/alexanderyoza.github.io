import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurOfficeComponent } from './our-office.component';

describe('OurOfficeComponent', () => {
  let component: OurOfficeComponent;
  let fixture: ComponentFixture<OurOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurOfficeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
