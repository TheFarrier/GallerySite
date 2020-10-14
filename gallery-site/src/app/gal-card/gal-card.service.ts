import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})

export class GalleryCardService {
  posts =[
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
    },

  ];

  get() {
    return this.posts
  }

  add(newPost) {
    this.posts.push(newPost);
  }

  delete(post) {
    const index = this.posts.indexOf(post);
    if (index >= 0){
      this.posts.splice(index, 1)
    }
  }
}