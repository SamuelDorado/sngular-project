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
                <input type="text" name="shipping[first-name]" placeholder="First Name">
              </div>
              <div class="field">
                <input type="text" name="shipping[last-name]" placeholder="Last Name">
              </div>
            </div>
        </div>
        <div class="field">
            <label>Billing Address</label>
            <div class="fields">
              <div class="twelve wide field">
                <input type="text" name="shipping[address]" placeholder="Street Address">
              </div>
              <div class="four wide field">
                <input type="text" name="shipping[address-2]" placeholder="Apt #">
              </div>
            </div>
        </div>
        <h4 class="ui dividing header">Billing Information</h4>
        <div class="field">
            <label>Card Type</label>
            <div class="ui selection dropdown">
              <input type="hidden" name="card[type]">
              <div class="default text">Type</div>
              <i class="dropdown icon"></i>
              <div class="menu">
                <div class="item" data-value="visa">
                  <i class="visa icon"></i>
                  Visa
                </div>
                <div class="item" data-value="amex">
                  <i class="amex icon"></i>
                  American Express
                </div>
                <div class="item" data-value="discover">
                  <i class="discover icon"></i>
                  Discover
                </div>
              </div>
            </div>
        </div>
        <div class="fields">
            <div class="seven wide field">
              <label>Card Number</label>
              <input type="text" name="card[number]" maxlength="16" placeholder="Card #">
            </div>
            <div class="three wide field">
              <label>CVC</label>
              <input type="text" name="card[cvc]" maxlength="3" placeholder="CVC">
            </div>
        </div>
        <div class="ui button primary" tabindex="0">Submit Order</div>
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
