import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accountlayout } from './accountlayout';

describe('Accountlayout', () => {
  let component: Accountlayout;
  let fixture: ComponentFixture<Accountlayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Accountlayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Accountlayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
