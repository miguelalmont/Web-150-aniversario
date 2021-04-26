import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OracionEditComponent } from './oracion-edit.component';

describe('OracionEditComponent', () => {
  let component: OracionEditComponent;
  let fixture: ComponentFixture<OracionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OracionEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OracionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
