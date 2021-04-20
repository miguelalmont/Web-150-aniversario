import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbientesPjDetailsComponent } from './ambientes-pj-details.component';

describe('AmbientesPjDetailsComponent', () => {
  let component: AmbientesPjDetailsComponent;
  let fixture: ComponentFixture<AmbientesPjDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbientesPjDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbientesPjDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
