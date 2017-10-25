import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';


import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import { ProductsService } from './services/products.service';
import {HttpModule} from "@angular/http";


@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    providers: [AuthGuardService,AuthService, ProductsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
