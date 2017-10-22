import { CartItem } from '../../types/cart-item';
import { ShopItem } from '../../types/shop-item';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  template: `
  <ng-container *ngIf="shoppingList.length > 0;else emptyCart">
    <table class="ui very basic collapsing celled table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
      </tr>
      </thead>
      <tbody>
        <tr *ngFor="let item of shoppingList">
          <td>
            <h4 class="ui image header">
              <img src="{{item.img}}" class="ui mini rounded image">
              <div class="content">
                {{item.name}}
                <div>
                  <a (click)="deleteItem(item)">Delete</a>
                </div>
              </div>
          </h4></td>
          <td>
            {{item.price}}
          </td>
          <td>
            {{item.quantity}}
          </td>
        </tr>     
      </tbody>
    </table>
    <button class="ui yellow button checkout" routerLink="checkout">Checkout!</button>   
  </ng-container>
  
  <ng-template #emptyCart>
    Your <i class="shop icon big"></i> is empty
  </ng-template>
  `,
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  @Input() shoppingList: Array<CartItem>= []
  constructor() { }

  ngOnInit() {
  }

  deleteItem(item:ShopItem){
    this.shoppingList.find((el,index)=>{
      if(el.id === item.id){
        this.shoppingList.splice(index,1)
        return true
      }
      return false
    })
  }

}
