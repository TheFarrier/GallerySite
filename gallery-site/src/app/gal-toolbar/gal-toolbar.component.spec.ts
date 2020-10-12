import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalToolbarComponent } from './gal-toolbar.component';

describe('GalToolbarComponent', () => {
  let component: GalToolbarComponent;
  let fixture: ComponentFixture<GalToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
