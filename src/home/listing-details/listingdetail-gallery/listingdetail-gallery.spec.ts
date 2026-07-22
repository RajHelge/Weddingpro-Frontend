import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingdetailGallery } from './listingdetail-gallery';

describe('ListingdetailGallery', () => {
  let component: ListingdetailGallery;
  let fixture: ComponentFixture<ListingdetailGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListingdetailGallery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingdetailGallery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
