import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbientesPjFormComponent } from './ambientes-pj-form.component';

describe('AmbientesPjFormComponent', () => {
  let component: AmbientesPjFormComponent;
  let fixture: ComponentFixture<AmbientesPjFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbientesPjFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbientesPjFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
