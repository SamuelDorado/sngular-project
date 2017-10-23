import { AuthGuardService } from './services/auth-guard.service';
import {HomeComponent} from "./home/home.component";
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'shop', loadChildren: './shop/shop.module#ShopModule'},
    {path: 'admin', loadChildren: './admin/admin.module#AdminModule', canLoad:[AuthGuardService]},
    {path:'',redirectTo: '/home',pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
