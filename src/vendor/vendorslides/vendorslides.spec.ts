import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vendorslides } from './vendorslides';

describe('Vendorslides', () => {
  let component: Vendorslides;
  let fixture: ComponentFixture<Vendorslides>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vendorslides]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vendorslides);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
