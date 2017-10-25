
import { ProductItem } from './../../types/product-item';
import { ProductsService } from '../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: `
      <app-create-product (createProduct)="createProduct($event)"></app-create-product>    
      <app-product-list [productList]="productList" (deleteProduct)="deleteProduct($event)"></app-product-list>
  `,
  styles: []
})
export class AdminComponent implements OnInit {
  productList:ProductItem[] = [];
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.refreshProductList();
  }
  refreshProductList(){
    this.productsService.getProducts().subscribe((data=>this.productList = data))
  }
  createProduct(product:ProductItem){
    this.productsService.addProduct(product).subscribe((e)=> this.refreshProductList())
  }
  deleteProduct(product:ProductItem){
    this.productsService.deleteProduct(product.id).subscribe((e)=> this.refreshProductList())
  }
}
