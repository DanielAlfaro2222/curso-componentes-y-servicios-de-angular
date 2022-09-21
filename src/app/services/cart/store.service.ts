import { Injectable } from '@angular/core';
import { Product } from '../../models/Product.models';

@Injectable({
  providedIn: 'root'
})
/***
 * Servicio encargado de encapsular toda la logica del carrito de compras.
 */
export class StoreService {
  shoppingCart: Product[] = [];
  total: number = 0;

  constructor() { }

  addProductToShoppingCart(product: Product): void {
    this.shoppingCart.push(product);
    this.total = this.calculateTotal();
  }

  calculateTotal(): number {
    return this.shoppingCart.reduce((previous, current) => previous + Number(current.price), 0);
  }
}
