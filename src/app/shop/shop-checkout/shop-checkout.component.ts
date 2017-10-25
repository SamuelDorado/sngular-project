import {Component} from "@angular/core";

@Component({
    selector: 'app-shop-checkout',
    template: `
    <h1 class="ui header">Payment</h1>
    <form class="ui form">
        <div class="field">
            <label>Name</label>
            <div class="two fields">
              <div class="field">
                <input type="text" placeholder="First Name">
              </div>
              <div class="field">
                <input type="text" placeholder="Last Name">
              </div>
            </div>
        </div>
        <div class="field">
            <label>Billing Address</label>
            <div class="fields">
              <div class="twelve wide field">
                <input type="text" placeholder="Street Address">
              </div>
              <div class="four wide field">
                <input type="text" placeholder="Apt #">
              </div>
            </div>
        </div>
        <h4 class="ui dividing header">Billing Information</h4>
        <div class="fields">
            <div class="seven wide field">
              <label>Card Number</label>
              <input type="text" maxlength="16" placeholder="Card #">
            </div>
            <div class="three wide field">
              <label>CVC</label>
              <input type="text" maxlength="3" placeholder="CVC">
            </div>
        </div>
        <div class="ui button primary" tabindex="0" routerLink="../">Submit Order</div>
    </form>
  `,
    styles: [`
    :host {
        display: block;
        padding: 8rem;
    }
    `]
})
export class ShopCheckoutComponent {

}
