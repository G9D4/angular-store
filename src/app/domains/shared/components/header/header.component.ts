import { Component, signal, Input, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  // La variable es privada porque no queremos que se renderice al componente
  // El servicio se encarga de la gestion de datos y el componente, del render
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  subtotal = this.cartService.subtotal;
  deliveryPrice = this.cartService.deliveryPrice;
  total = this.cartService.total

  toggleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  };
}
