import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AdminComponent} from "./admin.component";
import {ShopRoutingModule} from "./admin-routing.module";
import { ItemListComponent } from './item-list/item-list.component';
import { CreateItemComponent } from './create-item/create-item.component';

@NgModule({
    imports: [
        CommonModule,
        ShopRoutingModule
    ],
    declarations: [AdminComponent, ItemListComponent, CreateItemComponent]
})
export class AdminModule {
}
