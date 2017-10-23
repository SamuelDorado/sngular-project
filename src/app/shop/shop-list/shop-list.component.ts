import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {ProductItem} from "../../../types/product-item";

@Component({
    selector: 'app-shop-list',
    template: `
    <ul class="ui cards">
      <li *ngFor="let product of productList" class="card">
          <div class="image">
            <img src="{{product.img}}">
          </div>
          <div class="content">
            <div class="header">{{product.name}} - {{product.price}}</div>
            <div class="description">
              {{product.description}}
            </div>
          </div>
          <div class="ui bottom animated attached button yellow" (click)="addItem.emit(product)">
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
  `
})
export class ShopListComponent implements OnInit {
    @Output() addItem: EventEmitter<ProductItem> = new EventEmitter();
    productList: ProductItem[] = [];

    ngOnInit() {
        this.productList = [
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
            },
            {
                id: '02',
                name: 'Chicozy Cotton Square',
                description: 'Extra comfort, 100% cotton. You can buy green, yellow, black and red colors',
                price: '12$',
                img: 'https://images-na.ssl-images-amazon.com/images/I/519XMiCdKFL._AC_US160_.jpg'
            },
            {
                id: '03',
                name: 'Support Shirt',
                description: 'Support the EMPIRE! All sizes, all countries',
                price: '55$',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO6TRo_rM-pg10RBPalnpVrYwchzLmd8FouKEr7G7_J6IEsOym'
            },
            {
                id: '04',
                name: 'Star Wars Lightsaber',
                description: 'An awesome Storm Trooper mug for your favourite hot drinks',
                price: '55$',
                img: 'https://images-eu.ssl-images-amazon.com/images/I/51GWxBOxLLL._AC_US218_.jpg'
            },
            {
                id: '05',
                name: 'Trooper mug',
                description: 'An awesome Storm Trooper mug for your favourite hot drinks',
                price: '55$',
                img: 'https://usatsneakhype.files.wordpress.com/2015/05/star-wars-coffee-mugs-5.png?w=640&h=432'
            },
            {
                id: '06',
                name: 'Trooper mug',
                description: 'An awesome Storm Trooper mug for your favourite hot drinks',
                price: '55$',
                img: 'https://usatsneakhype.files.wordpress.com/2015/05/star-wars-coffee-mugs-5.png?w=640&h=432'
            },
            {
                id: '07',
                name: 'Trooper mug',
                description: 'An awesome Storm Trooper mug for your favourite hot drinks',
                price: '55$',
                img: 'https://usatsneakhype.files.wordpress.com/2015/05/star-wars-coffee-mugs-5.png?w=640&h=432'
            },
            {
                id: '08',
                name: 'Trooper mug',
                description: 'An awesome Storm Trooper mug for your favourite hot drinks',
                price: '55$',
                img: 'https://usatsneakhype.files.wordpress.com/2015/05/star-wars-coffee-mugs-5.png?w=640&h=432'
            },
            {
                id: '09',
                name: 'Trooper mug',
                description: 'An awesome Storm Trooper mug for your favourite hot drinks',
                price: '55$',
                img: 'https://usatsneakhype.files.wordpress.com/2015/05/star-wars-coffee-mugs-5.png?w=640&h=432'
            }
        ]
    }

}
