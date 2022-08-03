import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtranjeroComponent } from './extranjero.component';

describe('ExtranjeroComponent', () => {
  let component: ExtranjeroComponent;
  let fixture: ComponentFixture<ExtranjeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtranjeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtranjeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
