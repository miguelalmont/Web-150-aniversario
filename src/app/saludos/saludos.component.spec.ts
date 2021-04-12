import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludosComponent } from './saludos.component';

describe('SaludosComponent', () => {
  let component: SaludosComponent;
  let fixture: ComponentFixture<SaludosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaludosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaludosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
