import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderFrontComponent } from './slider-front.component';

describe('SliderFrontComponent', () => {
  let component: SliderFrontComponent;
  let fixture: ComponentFixture<SliderFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
