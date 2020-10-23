import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lightbox } from 'ngx-lightbox';
import { AccountPageService } from '../gal-account-page/gal-account-page.service';

@Component({
  selector: 'gal-gallery',
  templateUrl: './gal-gallery.component.html',
  styleUrls: ['./gal-gallery.component.css']
})
export class GalGalleryComponent implements OnInit {
  posts

  constructor(
    private accountPageService: AccountPageService,
    private activatedRoute: ActivatedRoute,
    private _lightbox: Lightbox) { }
  
  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.posts, index);
  }

  ngOnInit(){
    this.activatedRoute.paramMap
      .subscribe(paramMap => {
        let account = paramMap.get('account');
        this.posts = this.accountPageService.get(account).posts
      })
    console.log(this.posts)
  }

}
