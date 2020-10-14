import { Component, Input, OnInit } from '@angular/core';
import {GalleryCardService} from './gal-card.service'

@Component({
  selector: 'gal-card',
  templateUrl: './gal-card.component.html',
  styleUrls: ['./gal-card.component.css']
})

export class GalCardComponent implements OnInit {
  @Input() post;

  ngOnInit() {}
s
}
