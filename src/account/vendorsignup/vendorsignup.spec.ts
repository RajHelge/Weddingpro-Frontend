import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vendorsignup } from './vendorsignup';

describe('Vendorsignup', () => {
  let component: Vendorsignup;
  let fixture: ComponentFixture<Vendorsignup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vendorsignup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vendorsignup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
