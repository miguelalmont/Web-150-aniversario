import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaViewComponent } from './historia-view.component';

describe('HistoriaViewComponent', () => {
  let component: HistoriaViewComponent;
  let fixture: ComponentFixture<HistoriaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriaViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
