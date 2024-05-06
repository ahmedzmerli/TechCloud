import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEvenementFrontComponent } from './details-evenement-front.component';

describe('DetailsEvenementFrontComponent', () => {
  let component: DetailsEvenementFrontComponent;
  let fixture: ComponentFixture<DetailsEvenementFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsEvenementFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsEvenementFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
