import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usersignup } from './usersignup';

describe('Usersignup', () => {
  let component: Usersignup;
  let fixture: ComponentFixture<Usersignup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Usersignup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Usersignup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
