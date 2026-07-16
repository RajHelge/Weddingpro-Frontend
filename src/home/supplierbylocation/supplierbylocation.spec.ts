import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Supplierbylocation } from './supplierbylocation';

describe('Supplierbylocation', () => {
  let component: Supplierbylocation;
  let fixture: ComponentFixture<Supplierbylocation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Supplierbylocation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Supplierbylocation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
