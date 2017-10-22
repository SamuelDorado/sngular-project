import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <article>
      <section id="customer">
        <h1>Welcome to our shop!</h1>
        <button class="ui inverted button big" routerLink="shop">Let's buy some cool stuff</button>
      </section>
      <section id="admin">
        <button class="ui inverted button red big" routerLink="admin_login">Admin Login</button>
      </section> 
    </article> 
  `,
  styleUrls:['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
