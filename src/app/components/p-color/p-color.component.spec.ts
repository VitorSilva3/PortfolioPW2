import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PColorComponent } from './p-color.component';

describe('PColorComponent', () => {
  let component: PColorComponent;
  let fixture: ComponentFixture<PColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
