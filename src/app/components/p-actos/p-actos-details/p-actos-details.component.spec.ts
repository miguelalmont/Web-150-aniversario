import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PActosDetailsComponent } from './p-actos-details.component';

describe('PActosDetailsComponent', () => {
  let component: PActosDetailsComponent;
  let fixture: ComponentFixture<PActosDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PActosDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PActosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
