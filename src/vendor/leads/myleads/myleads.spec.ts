import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myleads } from './myleads';

describe('Myleads', () => {
  let component: Myleads;
  let fixture: ComponentFixture<Myleads>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Myleads]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Myleads);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
