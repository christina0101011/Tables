import { ShoppingList } from './shopping-list.model';

export interface ShoppingListResponse {
  list: ShoppingList[];
  recordsAmount: number;
}
