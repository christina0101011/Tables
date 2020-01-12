import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from '../interfaces/auth.model';
import { BehaviorSubject } from 'rxjs';
import { AuthResponse } from '../interfaces/auth-response.model';

const url = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  currentUser = JSON.parse(localStorage.getItem('currentUser'));
  token = this.currentUser.token;

  isLoggedIn = new BehaviorSubject(!!this.token);

  createUser(email: string, password: string) {
    const authData: AuthData = {email: email, password: password};
    return this.http.post(`${url}/api/auth/signup`, authData);
  }

  signIn(email: string, password: string) {
    const authData: AuthData = {email: email, password: password};
    return this.http.post<AuthResponse>(`${url}/api/auth/signin`, authData)  ;
  }

  signOut() {
    localStorage.setItem('currentUser', JSON.stringify({ token: null }));
    this.isLoggedIn.next(false);
  }

}
