import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbytitleComponent } from './searchbytitle.component';

describe('SearchbytitleComponent', () => {
  let component: SearchbytitleComponent;
  let fixture: ComponentFixture<SearchbytitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchbytitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchbytitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
