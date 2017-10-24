import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {ProductItem} from "../../types/product-item";
import "rxjs/add/operator/map";
import {environment} from "../../environments/environment";

@Injectable()
export class ProductsService {

    constructor(private http: Http) {
    }

    getProducts(): Observable<ProductItem[]> {
        return this.http.get(`${environment.url}/products`)
            .map(res => res.json());
    };

    getProduct(id: string): Observable<ProductItem> {
        return this.http.get(`${environment.url}/products/${id}`)
            .map(res => res.json());
    };

    addProduct(product: ProductItem): Observable<ProductItem> {
        return this.http.post(`${environment.url}/products/`, product)
            .map(res => res.json());
    };

    updateProduct(product: ProductItem): Observable<ProductItem> {
        return this.http.put(`${environment.url}/products/${product.id}`, product)
            .map(res => res.json());
    };

}
