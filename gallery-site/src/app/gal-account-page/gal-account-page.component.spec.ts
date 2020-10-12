import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalAccountPageComponent } from './gal-account-page.component';

describe('GalAccountPageComponent', () => {
  let component: GalAccountPageComponent;
  let fixture: ComponentFixture<GalAccountPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalAccountPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalAccountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
