import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModuleformationComponent } from './add-moduleformation.component';

describe('AddModuleformationComponent', () => {
  let component: AddModuleformationComponent;
  let fixture: ComponentFixture<AddModuleformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModuleformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddModuleformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
