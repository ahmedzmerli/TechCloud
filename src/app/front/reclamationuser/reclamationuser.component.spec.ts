import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationuserComponent } from './reclamationuser.component';

describe('ReclamationuserComponent', () => {
  let component: ReclamationuserComponent;
  let fixture: ComponentFixture<ReclamationuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamationuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReclamationuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
