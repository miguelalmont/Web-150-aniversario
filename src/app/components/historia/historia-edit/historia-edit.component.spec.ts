import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaEditComponent } from './historia-edit.component';

describe('HistoriaEditComponent', () => {
  let component: HistoriaEditComponent;
  let fixture: ComponentFixture<HistoriaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
