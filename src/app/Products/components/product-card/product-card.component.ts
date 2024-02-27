import { Component, Input, OnInit } from '@angular/core';
import { product } from '../../models/product';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent{
  @Input() product?: product;
  cart:product[];
  toggleAddBtn:boolean;
  Quantity:number;
  constructor() {
  this.cart = [];
  this.toggleAddBtn = false;
  this.Quantity = 0;
  }
addToCart(){
  if("cart" in localStorage)
   {
    this.cart= JSON.parse(localStorage.getItem("cart")!);
    this.cart.push(this.product!);
    localStorage.setItem("cart", JSON.stringify({item:this.cart,Quantity: this.Quantity}));
   }else{
    this.cart.push(this.product!);
    localStorage.setItem("cart", JSON.stringify({item:this.cart,Quantity: this.Quantity}))
   }
}

}
