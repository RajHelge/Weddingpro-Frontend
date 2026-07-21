import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenuesDetails } from './venues-details';

describe('VenuesDetails', () => {
  let component: VenuesDetails;
  let fixture: ComponentFixture<VenuesDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VenuesDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenuesDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
