import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostEvenementComponent } from './post-evenement.component';

describe('PostEvenementComponent', () => {
  let component: PostEvenementComponent;
  let fixture: ComponentFixture<PostEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostEvenementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
