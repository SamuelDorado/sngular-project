import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ProductItem } from '../../../types/product-item';

@Component({
  selector: 'app-create-product',
  template: `
  <div class="ui form create-product--form">
    <div class="two fields">
      <div class="field">
        <label>Name</label>
        <input type="text" placeholder="Name" [(ngModel)]="newProduct.name">
      </div>
      <div class="field">
        <label>Price</label>
        <input type="text" placeholder="17$" [(ngModel)]="newProduct.price">
      </div>
      </div>
      <div class="two fields">
      <div class="field">
        <label>Image</label>
        <input type="text" placeholder="Image Url" [(ngModel)]="newProduct.img">
      </div>
      <div class="field">
        <label>Description</label>
        <textarea rows="2" [(ngModel)]="newProduct.description"></textarea>
      </div>
    </div>
    <div class="ui container right aligned">
      <button class="ui button green big" (click)="createProduct.emit(newProduct)">Create product</button>
    </div>
  </div>
   
  `,
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  newProduct:ProductItem = new ProductItem();
  @Output() createProduct:EventEmitter<ProductItem> = new EventEmitter<ProductItem>()
  constructor() { }

  ngOnInit() {
  }

}
