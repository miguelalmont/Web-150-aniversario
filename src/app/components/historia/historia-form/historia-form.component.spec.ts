import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaFormComponent } from './historia-form.component';

describe('HistoriaFormComponent', () => {
  let component: HistoriaFormComponent;
  let fixture: ComponentFixture<HistoriaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
