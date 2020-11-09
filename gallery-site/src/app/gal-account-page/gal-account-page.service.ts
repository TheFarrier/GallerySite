import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn:'root'
})

export class AccountPageService {
  accounts =[
    {
      name: 'Gwen Elliot',
      avatar: '../../assets/profile.jpg',
      banner: '../../assets/Illustration.jpg',
      posts: [
        {
          id: 1,
          src: '../../assets/Gwen_001.png'
        },{
          id: 2,
          src: '../../assets/Gwen_look_crop.png'
        },{
          id: 3,
          src: '../../assets/Gwen_Pool_003.png'
        },{
          id: 4,
          src: '../../assets/Gwen_Pool_005.png'
        },{
          id: 5,
          src: '../../assets/Gwen_Pool_009.png'
        },{
          id: 6,
          src: '../../assets/MoreGwenBeachShots_002.png'
        },{
          id: 7,
          src: '../../assets/MoreGwenBeachShots_004.png'
        }
      ]
    },{
      name: 'Henry Johnson',
      avatar: '/../../assets/20170530_123716.jpg',
      banner: '/../../assets/20161101_163911.jpg',
      posts: [
        {
          id: 1,
          src:'/../../assets/20161101_163911.jpg'
        },{
          id: 2,
          src:'/../../assets/20161101_164023.jpg'
        },{
          id: 3,
          src:'/../../assets/20161101_164033.jpg'
        },{
          id: 4,
          src:'/../../assets/20161101_164124.jpg'
        },{
          id: 5,
          src:'/../../assets/20170530_123716.jpg'
        },{
          id: 6,
          src:'/../../assets/20170530_124928.jpg'
        }
      ]
    }
  ];

  get(name) {
    return this.accounts.find(account => account.name.toLowerCase().replace(/\s+/g, '') === name.trim().replace(/\s+/g, ''))
  }
}