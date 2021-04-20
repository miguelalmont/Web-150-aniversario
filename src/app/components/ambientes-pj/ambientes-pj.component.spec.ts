import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbientesPJComponent } from './ambientes-pj.component';

describe('AmbientesPJComponent', () => {
  let component: AmbientesPJComponent;
  let fixture: ComponentFixture<AmbientesPJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbientesPJComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbientesPJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
