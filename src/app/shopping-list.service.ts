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

  getShoppingList(): Observable<ShoppingList[]> {
    return this.http.get<ShoppingList[]>('/api/shoppinglist')
  }

  postShoppingListItem(list: ShoppingList) {
    return this.http.post<ShoppingList>(url + '/api/record', list);
  }

  deleteShoppingList(_id) {
    return this.http.delete(`${url}/api/record/${_id}`)
  }

  editShoppingListItem(_id, list: ShoppingList) {
    return this.http.put<ShoppingList>(`${url}/api/record/${_id}`, list)
  }

}
