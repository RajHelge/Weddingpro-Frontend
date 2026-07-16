import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionPricing } from './promotion-pricing';

describe('PromotionPricing', () => {
  let component: PromotionPricing;
  let fixture: ComponentFixture<PromotionPricing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromotionPricing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotionPricing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
