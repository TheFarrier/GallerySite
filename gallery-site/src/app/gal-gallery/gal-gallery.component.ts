import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountPageService } from '../gal-account-page/gal-account-page.service';
import { GalleryCardService } from '../gal-card/gal-card.service';

@Component({
  selector: 'gal-gallery',
  templateUrl: './gal-gallery.component.html',
  styleUrls: ['./gal-gallery.component.css']
})
export class GalGalleryComponent implements OnInit {
  posts

  constructor(
    private accountPageService: AccountPageService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    this.activatedRoute.paramMap
      .subscribe(paramMap => {
        let account = paramMap.get('account');
        this.posts = this.accountPageService.get(account).posts
      })
  }

}
