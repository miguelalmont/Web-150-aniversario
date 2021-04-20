import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbientesPjViewComponent } from './ambientes-pj-view.component';

describe('AmbientesPjViewComponent', () => {
  let component: AmbientesPjViewComponent;
  let fixture: ComponentFixture<AmbientesPjViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbientesPjViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbientesPjViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
