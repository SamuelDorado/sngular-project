import { CartItem } from '../../types/cart-item';
import { ShopItem } from '../../types/shop-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  template: `
    <article>
      <app-items-list (itemAdded)="addItemToCart($event)"></app-items-list>
      <app-shopping-cart [shoppingList]="shoppingList"></app-shopping-cart>
    </article>

  `,
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  shoppingList: Array<CartItem>=[]
  itemsInCart: object={}
  constructor() { }

  ngOnInit() {
  }

  addItemToCart(item:CartItem){
    if(this.itemsInCart[item.id]){
      this.shoppingList.find((el:any,index:number)=>{
        if(el.id === item.id){
          this.shoppingList[index].quantity += 1 
          return true
        }
        return false
      })
    }else{
      item.quantity = 1
      this.itemsInCart[item.id]=true
      this.shoppingList.push(item)
    }
  }

}
