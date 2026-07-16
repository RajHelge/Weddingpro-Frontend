import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDownload } from './app-download';

describe('AppDownload', () => {
  let component: AppDownload;
  let fixture: ComponentFixture<AppDownload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppDownload]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDownload);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
