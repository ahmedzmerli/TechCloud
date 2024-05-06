import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCertificatComponent } from './delete-certificat.component';

describe('DeleteCertificatComponent', () => {
  let component: DeleteCertificatComponent;
  let fixture: ComponentFixture<DeleteCertificatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCertificatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCertificatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
