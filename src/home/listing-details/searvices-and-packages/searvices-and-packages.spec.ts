import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearvicesAndPackages } from './searvices-and-packages';

describe('SearvicesAndPackages', () => {
  let component: SearvicesAndPackages;
  let fixture: ComponentFixture<SearvicesAndPackages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearvicesAndPackages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearvicesAndPackages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
