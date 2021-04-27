import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitasEditComponent } from './visitas-edit.component';

describe('VisitasEditComponent', () => {
  let component: VisitasEditComponent;
  let fixture: ComponentFixture<VisitasEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitasEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
