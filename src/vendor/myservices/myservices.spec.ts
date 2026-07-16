import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myservices } from './myservices';

describe('Myservices', () => {
  let component: Myservices;
  let fixture: ComponentFixture<Myservices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Myservices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Myservices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
