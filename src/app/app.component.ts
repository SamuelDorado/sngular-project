import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>
      app Works!
    </p>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
