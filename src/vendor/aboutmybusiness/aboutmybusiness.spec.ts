import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aboutmybusiness } from './aboutmybusiness';

describe('Aboutmybusiness', () => {
  let component: Aboutmybusiness;
  let fixture: ComponentFixture<Aboutmybusiness>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aboutmybusiness]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aboutmybusiness);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
