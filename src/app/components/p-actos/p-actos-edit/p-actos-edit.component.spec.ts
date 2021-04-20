import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PActosEditComponent } from './p-actos-edit.component';

describe('PActosEditComponent', () => {
  let component: PActosEditComponent;
  let fixture: ComponentFixture<PActosEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PActosEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PActosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
