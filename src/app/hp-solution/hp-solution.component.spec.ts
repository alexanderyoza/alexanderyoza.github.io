import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpSolutionComponent } from './hp-solution.component';

describe('HpSolutionComponent', () => {
  let component: HpSolutionComponent;
  let fixture: ComponentFixture<HpSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HpSolutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HpSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
