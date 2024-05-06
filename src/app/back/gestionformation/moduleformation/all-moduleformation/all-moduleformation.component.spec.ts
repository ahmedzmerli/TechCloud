import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllModuleformationComponent } from './all-moduleformation.component';

describe('AllModuleformationComponent', () => {
  let component: AllModuleformationComponent;
  let fixture: ComponentFixture<AllModuleformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllModuleformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllModuleformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
