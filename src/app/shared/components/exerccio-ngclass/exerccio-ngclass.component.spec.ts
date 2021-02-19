import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerccioNgclassComponent } from './exerccio-ngclass.component';

describe('ExerccioNgclassComponent', () => {
  let component: ExerccioNgclassComponent;
  let fixture: ComponentFixture<ExerccioNgclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerccioNgclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerccioNgclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
