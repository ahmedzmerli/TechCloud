import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCommentaireComponent } from './all-commentaire.component';

describe('AllCommentaireComponent', () => {
  let component: AllCommentaireComponent;
  let fixture: ComponentFixture<AllCommentaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCommentaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
