import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleformationComponent } from './moduleformation.component';

describe('ModuleformationComponent', () => {
  let component: ModuleformationComponent;
  let fixture: ComponentFixture<ModuleformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
