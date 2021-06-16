import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SColorComponent } from './s-color.component';

describe('SColorComponent', () => {
  let component: SColorComponent;
  let fixture: ComponentFixture<SColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
