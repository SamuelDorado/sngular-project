import { ShopItem } from '../../types/shop-item';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-items-list',
  template: `
    <ul class="ui cards">
      <li *ngFor="let item of shopItemsList" class="card">
          <div class="image">
            <img src="{{item.img}}">
          </div>
          <div class="content">
            <div class="header">{{item.name}} - {{item.price}}</div>
            <div class="description">
              {{item.description}}
            </div>
          </div>
          <div class="ui bottom animated attached button yellow" (click)="addToCart(item)">
            <div class="hidden content">
              <i class="add icon"></i>
              Add to cart
            </div>
            <div class="visible content">
              <i class="right arrow icon"></i>
              <i class="shop icon big"></i>
            </div>
          </div>
      </li>
    </ul>
  `,
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  shopItemsList : Array <ShopItem> = [];
  @Output() itemAdded:EventEmitter<ShopItem> = new EventEmitter(); 
  constructor() { }

  ngOnInit() {
    this.shopItemsList = [
      {
        id:'00',
        name:'Trooper mug',
        description:'An awesome Storm Trooper mug for your favourite hot drinks',
        price:'55$',
        img:'https://usatsneakhype.files.wordpress.com/2015/05/star-wars-coffee-mugs-5.png?w=640&h=432'
      },
      {
        id:'01',
        name:'Trooper mug',
        description:'An awesome Storm Trooper mug for your favourite hot drinks',
        price:'55$',
        img:'https://usatsneakhype.files.wordpress.com/2015/05/star-wars-coffee-mugs-5.png?w=640&h=432'
      },
      {
        id:'02',
        name:'Trooper mug',
        description:'An awesome Storm Trooper mug for your favourite hot drinks',
        price:'55$',
        img:'https://usatsneakhype.files.wordpress.com/2015/05/star-wars-coffee-mugs-5.png?w=640&h=432'
      },
      {
        id:'03',
        name:'Trooper mug',
        description:'An awesome Storm Trooper mug for your favourite hot drinks',
        price:'55$',
        img:'https://usatsneakhype.files.wordpress.com/2015/05/star-wars-coffee-mugs-5.png?w=640&h=432'
      },
      {
        id:'04',
        name:'Trooper mug',
        description:'An awesome Storm Trooper mug for your favourite hot drinks',
        price:'55$',
        img:'https://usatsneakhype.files.wordpress.com/2015/05/star-wars-coffee-mugs-5.png?w=640&h=432'
      },
      {
        id:'05',
        name:'Trooper mug',
        description:'An awesome Storm Trooper mug for your favourite hot drinks',
        price:'55$',
        img:'https://usatsneakhype.files.wordpress.com/2015/05/star-wars-coffee-mugs-5.png?w=640&h=432'
      },
      {
        id:'06',
        name:'Trooper mug',
        description:'An awesome Storm Trooper mug for your favourite hot drinks',
        price:'55$',
        img:'https://usatsneakhype.files.wordpress.com/2015/05/star-wars-coffee-mugs-5.png?w=640&h=432'
      },
      {
        id:'07',
        name:'Trooper mug',
        description:'An awesome Storm Trooper mug for your favourite hot drinks',
        price:'55$',
        img:'https://usatsneakhype.files.wordpress.com/2015/05/star-wars-coffee-mugs-5.png?w=640&h=432'
      },
      {
        id:'08',
        name:'Trooper mug',
        description:'An awesome Storm Trooper mug for your favourite hot drinks',
        price:'55$',
        img:'https://usatsneakhype.files.wordpress.com/2015/05/star-wars-coffee-mugs-5.png?w=640&h=432'
      },
      {
        id:'09',
        name:'Trooper mug',
        description:'An awesome Storm Trooper mug for your favourite hot drinks',
        price:'55$',
        img:'https://usatsneakhype.files.wordpress.com/2015/05/star-wars-coffee-mugs-5.png?w=640&h=432'
      }
    ]
  }

  addToCart(item: ShopItem){
    this.itemAdded.emit(item)
  }

}
