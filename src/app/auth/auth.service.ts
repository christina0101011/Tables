import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from './auth.model';

const url = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  createUser(email: string, password: string) {
    const authData: AuthData = {email: email, password: password}
    return this.http.post(`${url}/api/auth/signup`, authData)
  }
}