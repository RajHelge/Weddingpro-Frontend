import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Whyweddingpro } from './whyweddingpro';

describe('Whyweddingpro', () => {
  let component: Whyweddingpro;
  let fixture: ComponentFixture<Whyweddingpro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Whyweddingpro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Whyweddingpro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
