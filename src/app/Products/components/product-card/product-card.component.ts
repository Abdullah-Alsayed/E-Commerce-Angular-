import { cart } from './../../../carts/models/cart';
import { Component, Input, OnInit } from '@angular/core';
import { product } from '../../models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product?: product;
  cart: cart[];
  toggleAddBtn: boolean;
  Quantity: number;
  constructor() {
    this.cart = [];
    this.toggleAddBtn = false;
    this.Quantity = 1;
  }
  addToCart() {
    if ('cart' in localStorage) {
      this.cart = JSON.parse(localStorage.getItem('cart')!);
      this.cart.push({ product: this.product!, quantity: this.Quantity });
      localStorage.setItem('cart', JSON.stringify(this.cart));
    } else {
      this.cart.push({ product: this.product!, quantity: this.Quantity });
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
    this.toggleAddBtn = false;
    alert('Added Successfully product');
  }
}
