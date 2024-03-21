import { Component, signal, Input } from '@angular/core';
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
  deliveryPrice = signal(10);

  @Input({required: true}) cart: Product[] = [];

  toggleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  };

  getTotal() {
    return this.cart.reduce((accumulator, product) => accumulator + product.price, 0);
  };
}
