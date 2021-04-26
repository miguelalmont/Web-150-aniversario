import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaDetailsComponent } from './historia-details.component';

describe('HistoriaDetailsComponent', () => {
  let component: HistoriaDetailsComponent;
  let fixture: ComponentFixture<HistoriaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
