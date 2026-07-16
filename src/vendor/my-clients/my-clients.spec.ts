import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyClients } from './my-clients';

describe('MyClients', () => {
  let component: MyClients;
  let fixture: ComponentFixture<MyClients>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyClients]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyClients);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
