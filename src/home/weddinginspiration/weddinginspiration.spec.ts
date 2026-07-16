import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Weddinginspiration } from './weddinginspiration';

describe('Weddinginspiration', () => {
  let component: Weddinginspiration;
  let fixture: ComponentFixture<Weddinginspiration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Weddinginspiration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Weddinginspiration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
