import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Statscomponent } from './statscomponent';

describe('Statscomponent', () => {
  let component: Statscomponent;
  let fixture: ComponentFixture<Statscomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Statscomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Statscomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
