import { ShoppingList } from './Shopping-list.model';

export interface ResponseModel {
  list: ShoppingList[];
  recordsAmount: number;
}