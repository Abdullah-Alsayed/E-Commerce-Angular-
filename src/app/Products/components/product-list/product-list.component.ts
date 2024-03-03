import { Component, EventEmitter, Output } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { product } from '../../models/product';
import { Router } from '@angular/router';
import { sharedService } from '../../../shared/services/services.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: product[];
  categories: string[];
  loading: boolean;
  constructor(
    private services: ProductsService,
    private router: Router,
    private sharedService: sharedService
  ) {
    this.products = [];
    this.categories = [];
    this.loading = true;
  }
  getProductList() {
    this.services.getProductList().subscribe(
      (data: any) => {
        console.log(data);
        this.products = data;
        this.loading = false;
      },
      (error) => this.sharedService.fireToast(error, 'error', 1000)
    );
  }
  getCategoriesList() {
    this.services.getCategoriesList().subscribe(
      (data: any) => {
        console.log(data);
        this.categories = data;
      },
      (error) => this.sharedService.fireToast(error, 'error', 1000)
    );
  }
  getProductListByCategory(category: any) {
    this.services.getProductListByCategory(category).subscribe(
      (data: any) => {
        this.products = data;
        this.loading = false;
      },
      (error) => this.sharedService.fireToast(error, 'error', 1000)
    );
  }
  productFilterByCategory(category: any) {
    console.log(category);
    this.loading = true;
    category == 'All'
      ? this.getProductList()
      : this.getProductListByCategory(category);
  }
  ngOnInit() {
    this.getCategoriesList();
    this.getProductList();
  }
}
