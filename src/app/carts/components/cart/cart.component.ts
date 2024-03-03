import { json } from 'express';
import { cart } from '../../models/cart';
import {
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { OperationEnum } from '../../../core/model/OperationEnum';
import { sharedService } from '../../../shared/services/services.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit, DoCheck {
  cartList: cart[];
  total: number;
  IsDone: boolean;
  constructor(private sharedService:sharedService) {
    this.cartList = [];
    this.total = 0;
    this.IsDone = false;
  }

  ngOnInit(): void {
    if ('cart' in localStorage) {
      this.cartList = JSON.parse(localStorage.getItem('cart')!);
      console.log(this.cartList);
    } else {
      this.cartList = [];
    }
    this.getTotalOrder();
  }
  ngDoCheck(): void {
    this.getTotalOrder();
    this.saveChanges();
  }
  getTotalOrder(): void {
    this.total = 0;
    if (this.cartList.length !== 0) {
      this.cartList.forEach((element) => {
        this.total += element.product.price * element.quantity;
      });
    }
    this.total = Math.round(this.total);
  }

  UpdateQuantity(Operation: OperationEnum, index: number) {
    this.total = 0;
    switch (Operation) {
      case OperationEnum.plus:
        this.cartList[index].quantity++;
        console.log('+');
        break;
      case OperationEnum.minus:
        this.cartList[index].quantity--;
        console.log('-');
        break;
    }
  }
  deleteProduct(index: number) {
    this.cartList.splice(index, 1);
   this.sharedService.fireToast("Successfully deleted product","success",1500);
  }
  orderNow() {
    this.IsDone = true;
    this.clearChart();
    this.sharedService.fireToast("Successfully", "success",1500);
  }
  clearChart() {
    console.log('clearChart');
    this.cartList = [];
    this.total = 0;
    this.sharedService.fireToast("Successfully", "success",1500);
  }
  saveChanges() {
    localStorage.setItem('cart', JSON.stringify(this.cartList));
  }
}
