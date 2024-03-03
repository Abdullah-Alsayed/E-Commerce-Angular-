import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CartComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ]
})
export class CartsModule { }
