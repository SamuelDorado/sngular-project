import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { CanLoad, Route, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardService implements CanLoad{

  constructor(private authService: AuthService,
              private router: Router) {}
  

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
        return this.checkLogin()
  }

  checkLogin(): boolean {
    return this.authService.isAuthenticated();
  }
}
