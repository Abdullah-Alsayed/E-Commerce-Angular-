import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductsDetailsComponent,
    ProductListComponent,
    ProductCardComponent,
  ],
  imports: [CommonModule,HttpClientModule,FormsModule,SharedModule],
  exports: [ProductCardComponent, ProductListComponent],
})
export class ProductsModule {}
