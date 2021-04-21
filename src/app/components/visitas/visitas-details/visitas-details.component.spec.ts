import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitasDetailsComponent } from './visitas-details.component';

describe('VisitasDetailsComponent', () => {
  let component: VisitasDetailsComponent;
  let fixture: ComponentFixture<VisitasDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitasDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
