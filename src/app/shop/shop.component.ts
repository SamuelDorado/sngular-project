import {Component, OnInit} from "@angular/core";
import {CartItem} from "../../types/cart-item";
import {ProductItem} from "../../types/product-item";
import {find, pull} from "lodash";
import {ProductsService} from "../services/products.service";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-shop',
    template: `
    <header>
        <h1>Star Wars Shop</h1>
    </header>
    <article>
        <app-shop-list [productList]="productList|async" (addItem)="addItem($event)"></app-shop-list>
        <app-shop-cart [shoppingList]="shoppingList" (removeItem)="removeItem($event)"></app-shop-cart>
        <button *ngIf="shoppingList?.length > 0" class="ui yellow button checkout" [routerLink]="'checkout'">Checkout!</button>
    </article>
    `,
    styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
    shoppingList: CartItem[] = [];
    productList: Observable<ProductItem[]>;

    constructor(private productsService: ProductsService) {
    }

    ngOnInit() {
        this.productList = this.productsService.getProducts();
    }

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
