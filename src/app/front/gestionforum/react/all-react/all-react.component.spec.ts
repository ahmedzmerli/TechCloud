import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllReactComponent } from './all-react.component';

describe('AllReactComponent', () => {
  let component: AllReactComponent;
  let fixture: ComponentFixture<AllReactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllReactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
