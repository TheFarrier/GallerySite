import { Component, OnInit } from '@angular/core';
import { GalleryCardService } from '../gal-card/gal-card.service';

@Component({
  selector: 'gal-gallery',
  templateUrl: './gal-gallery.component.html',
  styleUrls: ['./gal-gallery.component.css']
})
export class GalGalleryComponent implements OnInit {
  posts

  constructor(private GalleryCardService: GalleryCardService) { }

  ngOnInit(){
    this.posts = this.GalleryCardService.get()
  }

}
