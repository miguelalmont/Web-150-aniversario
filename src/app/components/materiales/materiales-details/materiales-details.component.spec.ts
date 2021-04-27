import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialesDetailsComponent } from './materiales-details.component';

describe('MaterialesDetailsComponent', () => {
  let component: MaterialesDetailsComponent;
  let fixture: ComponentFixture<MaterialesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
