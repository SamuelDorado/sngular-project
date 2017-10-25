import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-item',
  template: `
  <div class="ui form create-item--form">
    <div class="three fields">
      <div class="field">
        <label>Name</label>
        <input type="text" placeholder="First Name">
      </div>
      <div class="field">
        <label>Description</label>
        <input type="text" placeholder="Middle Name">
      </div>
      <div class="field">
        <label>Price</label>
        <input type="text" placeholder="Last Name">
      </div>
      </div>
      <div class="two fields">
      <div class="field">
        <label>Image</label>
        <input type="text" placeholder="Last Name">
      </div>
      <div class="field">
        <label>Description</label>
        <textarea rows="2"></textarea>
      </div>
    </div>
    <div class="ui container right aligned">
      <button class="ui button green big">Create Item</button>
    </div>
  </div>
   
  `,
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
