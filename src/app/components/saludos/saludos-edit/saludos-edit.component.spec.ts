import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludosEditComponent } from './saludos-edit.component';

describe('SaludosEditComponent', () => {
  let component: SaludosEditComponent;
  let fixture: ComponentFixture<SaludosEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaludosEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaludosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
