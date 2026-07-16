import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mypromotions } from './mypromotions';

describe('Mypromotions', () => {
  let component: Mypromotions;
  let fixture: ComponentFixture<Mypromotions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mypromotions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mypromotions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
