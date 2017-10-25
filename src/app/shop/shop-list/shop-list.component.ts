import {Component, EventEmitter, Input, Output} from "@angular/core";
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
export class ShopListComponent {
    @Output() addItem: EventEmitter<ProductItem> = new EventEmitter();
    @Input() productList: ProductItem[] = [];
}
