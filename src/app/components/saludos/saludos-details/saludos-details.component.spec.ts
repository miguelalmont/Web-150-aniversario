import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludosDetailsComponent } from './saludos-details.component';

describe('SaludosDetailsComponent', () => {
  let component: SaludosDetailsComponent;
  let fixture: ComponentFixture<SaludosDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaludosDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaludosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
