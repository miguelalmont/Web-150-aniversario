import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PActosComponent } from './p-actos.component';

describe('PActosComponent', () => {
  let component: PActosComponent;
  let fixture: ComponentFixture<PActosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PActosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PActosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
