import { AuthService } from './services/auth.service';
import {Component} from "@angular/core";

@Component({
    selector: 'app-root',
    template: `<router-outlet></router-outlet>`
})
export class AppComponent {
    constructor(private auth: AuthService) {
        this.auth.handleAuthentication();
       }
}
