import {HomeComponent} from "./home/home.component";
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'shop', loadChildren: './shop/shop.module#ShopModule'},
    {path: 'admin', loadChildren: './admin/admin.module#AdminModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
