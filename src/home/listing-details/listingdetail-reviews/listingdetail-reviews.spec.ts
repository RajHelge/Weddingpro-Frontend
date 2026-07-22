import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingdetailReviews } from './listingdetail-reviews';

describe('ListingdetailReviews', () => {
  let component: ListingdetailReviews;
  let fixture: ComponentFixture<ListingdetailReviews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListingdetailReviews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingdetailReviews);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
