import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbientesPjEditComponent } from './ambientes-pj-edit.component';

describe('AmbientesPjEditComponent', () => {
  let component: AmbientesPjEditComponent;
  let fixture: ComponentFixture<AmbientesPjEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbientesPjEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbientesPjEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
