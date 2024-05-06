import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementFrontComponent } from './evenement-front.component';

describe('EvenementFrontComponent', () => {
  let component: EvenementFrontComponent;
  let fixture: ComponentFixture<EvenementFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvenementFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvenementFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
