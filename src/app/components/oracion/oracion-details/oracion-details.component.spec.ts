import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OracionDetailsComponent } from './oracion-details.component';

describe('OracionDetailsComponent', () => {
  let component: OracionDetailsComponent;
  let fixture: ComponentFixture<OracionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OracionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OracionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
