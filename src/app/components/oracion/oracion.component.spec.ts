import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OracionComponent } from './oracion.component';

describe('OracionComponent', () => {
  let component: OracionComponent;
  let fixture: ComponentFixture<OracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OracionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
