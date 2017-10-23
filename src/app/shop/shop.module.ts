import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ShopListComponent} from "./shop-list/shop-list.component";
import {ShopCartComponent} from "./shop-cart/shop-cart.component";
import {ShopCheckoutComponent} from "./shop-checkout/shop-checkout.component";
import {ShopComponent} from "./shop.component";
import {ShopRoutingModule} from "./shop-routing.module";

@NgModule({
    imports: [
        CommonModule,
        ShopRoutingModule
    ],
    declarations: [
        ShopComponent,
        ShopListComponent,
        ShopCartComponent,
        ShopCheckoutComponent
    ]
})
export class ShopModule {
}
