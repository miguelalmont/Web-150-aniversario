import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitasViewComponent } from './visitas-view.component';

describe('VisitasViewComponent', () => {
  let component: VisitasViewComponent;
  let fixture: ComponentFixture<VisitasViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitasViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitasViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
