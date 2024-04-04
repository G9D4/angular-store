import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);

  subtotal= computed(() => {
    const cart = this.cart();
    return cart.reduce((accumulator, product) => accumulator + product.price, 0);
  })

  deliveryPrice = signal(10);

  total= computed(() => {
    const totalNumber = Number(this.deliveryPrice()) + Number(this.subtotal());
    return totalNumber;
  })

  addToCart(product: Product) {
    this.cart.update(state => [...state, product]);
  }

  constructor() { }
}
