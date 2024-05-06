import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteModuleformationComponent } from './delete-moduleformation.component';

describe('DeleteModuleformationComponent', () => {
  let component: DeleteModuleformationComponent;
  let fixture: ComponentFixture<DeleteModuleformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteModuleformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteModuleformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
