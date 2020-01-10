import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from './auth.model';
import { Subject, BehaviorSubject } from 'rxjs';

const url = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  getToken = new Subject();
  isLoggedIn = new BehaviorSubject(false);
  currentlyLoggedIn: boolean;

  createUser(email: string, password: string) {
    const authData: AuthData = {email: email, password: password}
    return this.http.post(`${url}/api/auth/signup`, authData)
  }

  signIn(email: string, password: string) {
    const authData: AuthData = {email: email, password: password}
    return this.http.post<{status: number, token: string, message: string}>(`${url}/api/auth/signin`, authData)  
  }

  signOut() {
    this.getToken.next(null);
    this.isLoggedIn.next(false);
  }

  checkLogin() {
    this.isLoggedIn.subscribe(res => {
      return this.currentlyLoggedIn = res;
    })
  }
}
