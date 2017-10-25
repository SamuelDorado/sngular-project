import {NgModule} from "@angular/core";
import { FormsModule } from '@angular/forms';
import {CommonModule} from "@angular/common";
import { CreateProductComponent } from './create-product/create-product.component';
import {AdminComponent} from "./admin.component";
import {ShopRoutingModule} from "./admin-routing.module";
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ShopRoutingModule
    ],
    declarations: [AdminComponent, ProductListComponent, CreateProductComponent]
})
export class AdminModule {
}
