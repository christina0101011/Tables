export interface ShoppingList {
  amountDetails?: {
    amount: number;
    units: ['Kg.' | 'G.' | 'L.' | 'Pc.'];
  };
  comments?: string;
  done: boolean;
  itemName: string;
  metadata: {
    createdAt: number | Date;
    updatedAt?: Date;
    deletedAt?: Date;
  };
  price?: {
    currency: string;
    pricePerUnit: number;
  };
  priority: 'Low' | 'Medium' | 'High';
}
