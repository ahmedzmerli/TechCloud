import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateModuleformationComponent } from './update-moduleformation.component';

describe('UpdateModuleformationComponent', () => {
  let component: UpdateModuleformationComponent;
  let fixture: ComponentFixture<UpdateModuleformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateModuleformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateModuleformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
