import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/models/product.model';
import { ReversePipe } from '@shared/pipes/reverse.pipe'
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe'
import { RouterLinkWithHref } from '@angular/router';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ReversePipe, TimeAgoPipe, RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;

  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    console.log('click from child');
    this.addToCart.emit(this.product);
    console.log(typeof this.product.creationAt)
  }
}
