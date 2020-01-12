import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()

export class AuthIntercepter implements HttpInterceptor {

  currentUser;
  token;

  constructor(public _authService: AuthService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUser ? this.token = this.currentUser.token : '';
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req);
  }
}
