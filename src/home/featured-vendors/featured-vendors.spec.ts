import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedVendors } from './featured-vendors';

describe('FeaturedVendors', () => {
  let component: FeaturedVendors;
  let fixture: ComponentFixture<FeaturedVendors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedVendors]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedVendors);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
