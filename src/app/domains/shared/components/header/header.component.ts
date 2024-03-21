import { Component, signal, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  deliveryPrice = signal('10.00');

  @Input({required: true}) cart: Product[] = [];
  subtotal = signal<string>('0');
  total = signal<string>('0');

  toggleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  };

  getSubtotal() {
    return this.cart.reduce((accumulator, product) => accumulator + product.price, 0);
  };
  
  getTotal() {
    return Number(this.deliveryPrice()) + Number(this.subtotal());
  };

  ngOnChanges(changes: SimpleChanges) {
    // Se detona si hay un cambio en el input, o sea cart
     const cart =  changes['cart'];
     if(cart) {
      this.subtotal.set(this.getSubtotal().toFixed(2));
      this.total.set(this.getTotal().toFixed(2));
     }
  };

}
