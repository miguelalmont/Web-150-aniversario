import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OracionFormComponent } from './oracion-form.component';

describe('OracionFormComponent', () => {
  let component: OracionFormComponent;
  let fixture: ComponentFixture<OracionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OracionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OracionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
