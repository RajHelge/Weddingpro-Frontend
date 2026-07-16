import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowBusiness } from './grow-business';

describe('GrowBusiness', () => {
  let component: GrowBusiness;
  let fixture: ComponentFixture<GrowBusiness>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrowBusiness]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrowBusiness);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
