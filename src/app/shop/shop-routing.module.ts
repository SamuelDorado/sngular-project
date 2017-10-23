import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ShopComponent} from "./shop.component";
import {ShopCheckoutComponent} from "./shop-checkout/shop-checkout.component";

const routes: Routes = [
    {path: '', component: ShopComponent},
    {path: 'checkout', component: ShopCheckoutComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})
export class ShopRoutingModule {
}
