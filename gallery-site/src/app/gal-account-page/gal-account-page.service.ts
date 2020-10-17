import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})

export class GalleryCardService {
  accounts =[
    {
      name: 'Gwen Elliot',
      posts: [
        {
          id: 1,
          image: '../../assets/Gwen_001.png'
        },{
          id: 2,
          image: '../../assets/Gwen_look_crop.png'
        },{
          id: 3,
          image: '../../assets/Gwen_Pool_003.png'
        },{
          id: 4,
          image: '../../assets/Gwen_Pool_005.png'
        },{
          id: 5,
          image: '../../assets/Gwen_Pool_009.png'
        },{
          id: 6,
          image: '../../assets/MoreGwenBeachShots_002.png'
        },{
          id: 7,
          image: '../../assets/MoreGwenBeachShots_004.png'
        }
      ]
    },{
      name: 'Henry Johnson',
      posts:[
        {
          id: 1,
          image:''
        },{
          id: 2,
          image:''
        },{
          id: 3,
          image:''
        },{
          id: 4,
          image:''
        }
      ]
    }
  ];

  get(name) {
    return this.accounts.find(account => account.name.trim().toLowerCase() === name.trim().toLowerCase())
  }
}