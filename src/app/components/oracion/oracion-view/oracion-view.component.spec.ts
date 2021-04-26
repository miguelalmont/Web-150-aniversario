import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OracionViewComponent } from './oracion-view.component';

describe('OracionViewComponent', () => {
  let component: OracionViewComponent;
  let fixture: ComponentFixture<OracionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OracionViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OracionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
