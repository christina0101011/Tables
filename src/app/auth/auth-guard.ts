import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()

export class AuthGuard implements CanActivate {
  currentUser;
  token;
constructor(private _authService: AuthService, private router: Router) {
  this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  this.token = this.currentUser.token;
}
canActivate(
  route: import('@angular/router').ActivatedRouteSnapshot,
  state: import('@angular/router').RouterStateSnapshot): boolean | import('@angular/router').UrlTree | import('rxjs').Observable<boolean
  | import('@angular/router').UrlTree> | Promise<boolean | import('@angular/router').UrlTree> {
    if (!this.token) {
      this.router.navigate(['/auth/signin']);
    } else {
      return !!this.token;
    }
  }
}
