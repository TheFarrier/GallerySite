import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalGalleryComponent } from './gal-gallery.component';

describe('GalGalleryComponent', () => {
  let component: GalGalleryComponent;
  let fixture: ComponentFixture<GalGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
