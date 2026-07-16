import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyCouples } from './happy-couples';

describe('HappyCouples', () => {
  let component: HappyCouples;
  let fixture: ComponentFixture<HappyCouples>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HappyCouples]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HappyCouples);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
