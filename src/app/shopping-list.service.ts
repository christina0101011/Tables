import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShoppingList } from './Shopping-list.model';

const url = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})

export class ShoppingListService {

  constructor(private http: HttpClient) {}

  getInitialShoppingList(): Observable<ShoppingList[]> {
    return this.http.get<ShoppingList[]>('./assets/shoppng-list.json')
  }

  // getShoppingList(): Observable<any> {
  //   return this.http.get('/api/blogs')
  // }

}
