import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PActosFormComponent } from './p-actos-form.component';

describe('PActosFormComponent', () => {
  let component: PActosFormComponent;
  let fixture: ComponentFixture<PActosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PActosFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PActosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
