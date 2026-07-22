import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aboutbusiness } from './aboutbusiness';

describe('Aboutbusiness', () => {
  let component: Aboutbusiness;
  let fixture: ComponentFixture<Aboutbusiness>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aboutbusiness]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aboutbusiness);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
