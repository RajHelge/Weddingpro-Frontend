import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vendoroutlet } from './vendoroutlet';

describe('Vendoroutlet', () => {
  let component: Vendoroutlet;
  let fixture: ComponentFixture<Vendoroutlet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vendoroutlet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vendoroutlet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
