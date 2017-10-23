import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AdminComponent} from "./admin.component";
import {ShopRoutingModule} from "./admin-routing.module";

@NgModule({
    imports: [
        CommonModule,
        ShopRoutingModule
    ],
    declarations: [AdminComponent]
})
export class AdminModule {
}
