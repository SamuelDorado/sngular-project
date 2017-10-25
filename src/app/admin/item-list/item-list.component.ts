import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { ProductItem } from './../../../types/product-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  template: `
  <div class="table--container">
    <table class="ui celled padded table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th></th>
      </tr>
      </thead>
      <tbody>
        <tr *ngFor="let item of itemList">
          <td>
            <h4 class="ui image header">
              <img src="{{item.img}}" class="ui mini rounded image">
              <div class="content">
                {{item.name}}
                <div class="sub header">
                  {{item.description}}
                </div>
              </div>
          </h4></td>
          <td>
            {{item.price}}
          </td>
          <td>
            <a (click)="removeItem.emit(item)">Delete</a>
          </td>
        </tr>     
      </tbody>
    </table>
  </div>
  `,
  styleUrls:['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  @Input() itemList: ProductItem[] = [];
  @Output() removeItem: EventEmitter<ProductItem> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
