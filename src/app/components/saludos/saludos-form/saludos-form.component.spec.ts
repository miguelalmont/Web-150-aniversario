import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludosFormComponent } from './saludos-form.component';

describe('SaludosFormComponent', () => {
  let component: SaludosFormComponent;
  let fixture: ComponentFixture<SaludosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaludosFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaludosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
