import { ProductItem } from './../../types/product-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: `
      <app-create-item></app-create-item>    
      <app-item-list [itemList]="itemList"></app-item-list>
  `,
  styles: []
})
export class AdminComponent implements OnInit {
  itemList: ProductItem[]=[];
  constructor() { }

  ngOnInit() {
    this.itemList = [
      {
          id: '00',
          name: 'Trooper mug',
          description: 'An awesome Storm Trooper mug for your favourite hot drinks',
          price: '55$',
          img: 'https://usatsneakhype.files.wordpress.com/2015/05/star-wars-coffee-mugs-5.png?w=640&h=432'
      },
      {
          id: '01',
          name: 'Imperial Series Helmet',
          description: 'An awesome Helmet',
          price: '79$',
          img: 'https://images-na.ssl-images-amazon.com/images/I/41FVMssKN9L._AC_US160_.jpg'
      }
    ]
  }

}
