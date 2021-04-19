import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludosViewComponent } from './saludos-view.component';

describe('SaludosViewComponent', () => {
  let component: SaludosViewComponent;
  let fixture: ComponentFixture<SaludosViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaludosViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaludosViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
