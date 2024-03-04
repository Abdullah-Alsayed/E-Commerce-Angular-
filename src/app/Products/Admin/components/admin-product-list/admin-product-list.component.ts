import { Router } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { product } from '../../../models/product';
import { Component } from '@angular/core';
import { error } from 'console';
import { sharedService } from '../../../../shared/services/services.service';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrl: './admin-product-list.component.css',
})
export class AdminProductListComponent {
  productList: product[];
  loading: boolean;
  categories: string[];
  constructor(
    private service: ProductsService,
    private router: Router,
    private sharedService: sharedService
  ) {
    this.productList = [];
    this.categories = [];
    this.loading = true;
  }
  ngOnInit() {
    this.getProducts();
    this.getCategoriesList();
  }
  getCategoriesList() {
    this.service.getCategoriesList().subscribe(
      (data: any) => {
        this.categories = data;
      },
      (error) => this.router.navigateByUrl('/error')
    );
  }
  getProducts() {
    this.service.getProductList().subscribe(
      (data: any) => {
        this.productList = data;
        this.loading = false;
      },
      (error) => this.router.navigateByUrl('/error')
    );
  }
  getProductListByCategory(category: any) {
    this.service.getProductListByCategory(category).subscribe(
      (data: any) => {
        this.productList = data;
        this.loading = false;
      },
      (error) => this.router.navigateByUrl('/error')
    );
  }

  productFilterByCategory(category: any) {
    this.loading = true;
    category == 'All'
      ? this.getProducts()
      : this.getProductListByCategory(category);
  }

  deleteProduct(id: number) {
    this.service.deleteProduct(id).subscribe(
      (data: any) => {
        this.productList = this.productList.filter((item) => item.id !== id);
        this.sharedService.fireToast('successfully', 'success', 1500);
      },
      (error: any) => {
        this.sharedService.fireToast(error.message, 'error', 1500);
      }
    );
  }
}
