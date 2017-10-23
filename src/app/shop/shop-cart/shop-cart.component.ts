import {Component, EventEmitter, Input, Output} from "@angular/core";
import {CartItem} from "../../../types/cart-item";

@Component({
    selector: 'app-shop-cart',
    template: `
        <ng-container *ngIf="shoppingList?.length > 0;else emptyCart">
            <table class="ui very basic collapsing celled table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
              </tr>
              </thead>
              <tbody>
                <tr *ngFor="let item of shoppingList">
                  <td>
                    <h4 class="ui image header">
                      <img src="{{item.img}}" class="ui mini rounded image">
                      <div class="content">
                        {{item.name}}
                        <div>
                          <a (click)="removeItem.emit(item)">Delete</a>
                        </div>
                      </div>
                  </h4></td>
                  <td>
                    {{item.price}}
                  </td>
                  <td>
                    {{item.quantity}}
                  </td>
                </tr>     
              </tbody>
            </table>
        </ng-container>
        
        <ng-template #emptyCart>
        Your <i class="shop icon big"></i> is empty
        </ng-template>
    `,
    styles: [`
        a:hover {
          cursor: pointer;
        }
        
        button.checkout {
          height: 45px;
          margin: 30px;
        }
    `]
})
export class ShopCartComponent {
    @Input() shoppingList: CartItem[] = [];
    @Output() removeItem: EventEmitter<CartItem> = new EventEmitter();
}
