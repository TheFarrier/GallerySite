import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountPageService } from './gal-account-page.service'

@Component({
  selector: 'gal-account-page',
  templateUrl: './gal-account-page.component.html',
  styleUrls: ['./gal-account-page.component.css']
})

export class GalAccountPageComponent implements OnInit {
  account = '';
  posts = [];

  constructor(
    private accountPageService: AccountPageService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(){
    this.activatedRoute.paramMap
      .subscribe(paramMap => {
        let account = paramMap.get('account')
        this.getPosts(account)
      })
  }

  getPosts(account: string) {
    this.account = account;
    this.posts = this.accountPageService.get(account).posts;
  }

}
