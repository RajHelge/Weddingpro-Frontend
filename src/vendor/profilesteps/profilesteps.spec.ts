import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Profilesteps } from './profilesteps';

describe('Profilesteps', () => {
  let component: Profilesteps;
  let fixture: ComponentFixture<Profilesteps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Profilesteps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Profilesteps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
