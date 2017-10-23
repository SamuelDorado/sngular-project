import {CartItem} from "../../types/cart-item";
import {Component} from "@angular/core";
import {find, pull} from "lodash";

@Component({
    selector: 'app-shop',
    template: `
    <header>
        <h1>Star Wars Shop</h1>
    </header>
    <article>
        <app-shop-list (addItem)="addItem($event)"></app-shop-list>
        <app-shop-cart [shoppingList]="shoppingList" (removeItem)="removeItem($event)"></app-shop-cart>
        <button *ngIf="shoppingList?.length > 0" class="ui yellow button checkout" [routerLink]="'checkout'">Checkout!</button>
    </article>
    `,
    styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
    shoppingList: CartItem[] = [];

    addItem(item: CartItem) {
        if (find(this.shoppingList, item)) item.quantity += 1;
        else {
            item.quantity = 1;
            this.shoppingList.push(item);
        }
    }

    removeItem(item: CartItem) {
        pull(this.shoppingList, item);
    }

}
