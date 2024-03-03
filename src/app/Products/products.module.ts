import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AdminProductListComponent } from './Admin/components/admin-product-list/admin-product-list.component';
import { ProductFormComponent } from './Admin/components/product-form/product-form.component';

@NgModule({
  declarations: [
    ProductsDetailsComponent,
    ProductListComponent,
    ProductCardComponent,
    AdminProductListComponent,
    ProductFormComponent,

  ],
  imports: [CommonModule,HttpClientModule,FormsModule,SharedModule,RouterModule,ReactiveFormsModule],
  exports: [ProductCardComponent, ProductListComponent,AdminProductListComponent,ReactiveFormsModule],
})
export class ProductsModule {}
