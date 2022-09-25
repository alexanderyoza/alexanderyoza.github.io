import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpSolutionsComponent } from './hp-solutions.component';

describe('HpSolutionsComponent', () => {
  let component: HpSolutionsComponent;
  let fixture: ComponentFixture<HpSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HpSolutionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HpSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
