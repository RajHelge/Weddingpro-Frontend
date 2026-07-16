import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Businesssignup } from './businesssignup';

describe('Businesssignup', () => {
  let component: Businesssignup;
  let fixture: ComponentFixture<Businesssignup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Businesssignup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Businesssignup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
