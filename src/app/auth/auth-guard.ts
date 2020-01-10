import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()

export class AuthGuard implements CanActivate {

constructor(private _authService: AuthService, private router: Router) {}

canActivate(
  route: import("@angular/router").ActivatedRouteSnapshot,
  state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    let isLoggedIn = this._authService.currentlyLoggedIn;
    if(!isLoggedIn) {
      this.router.navigate(['/auth/signin'])
    } else {
      return isLoggedIn
    }
  }
}