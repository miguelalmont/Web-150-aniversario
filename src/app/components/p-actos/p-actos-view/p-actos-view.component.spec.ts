import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PActosViewComponent } from './p-actos-view.component';

describe('PActosViewComponent', () => {
  let component: PActosViewComponent;
  let fixture: ComponentFixture<PActosViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PActosViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PActosViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
