import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialesEditComponent } from './materiales-edit.component';

describe('MaterialesEditComponent', () => {
  let component: MaterialesEditComponent;
  let fixture: ComponentFixture<MaterialesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
