import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountPageService } from './gal-account-page.service'

@Component({
  selector: 'gal-account-page',
  templateUrl: './gal-account-page.component.html',
  styleUrls: ['./gal-account-page.component.css']
})

export class GalAccountPageComponent implements OnInit {
  account = {
    name: 'Loading...',
    avatar: '',
    banner: '',
    posts: []
  };

  constructor(
    private accountPageService: AccountPageService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(){
    this.activatedRoute.paramMap
      .subscribe(paramMap => {
        let account = paramMap.get('account');
        this.account = this.accountPageService.get(account)
      })
  }
}
