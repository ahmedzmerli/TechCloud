import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteReactComponent } from './delete-react.component';

describe('DeleteReactComponent', () => {
  let component: DeleteReactComponent;
  let fixture: ComponentFixture<DeleteReactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteReactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
