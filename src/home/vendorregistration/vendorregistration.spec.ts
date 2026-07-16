import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vendorregistration } from './vendorregistration';

describe('Vendorregistration', () => {
  let component: Vendorregistration;
  let fixture: ComponentFixture<Vendorregistration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vendorregistration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vendorregistration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
