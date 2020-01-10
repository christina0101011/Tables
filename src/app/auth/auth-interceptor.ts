import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()

export class AuthIntercepter implements HttpInterceptor {

  private authRequest;

  constructor(public _authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this._authService.getToken.subscribe(token => {
      this.authRequest = req.clone({
        headers: req.headers.set('authorization', `Bearer ${token}`)
      })
    })
    return next.handle(this.authRequest)
  }
}