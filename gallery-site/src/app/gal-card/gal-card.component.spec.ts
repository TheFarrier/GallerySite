import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalCardComponent } from './gal-card.component';

describe('GalCardComponent', () => {
  let component: GalCardComponent;
  let fixture: ComponentFixture<GalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
