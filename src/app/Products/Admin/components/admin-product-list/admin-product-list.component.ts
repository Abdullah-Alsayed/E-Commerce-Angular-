import { Router } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { product } from '../../../models/product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrl: './admin-product-list.component.css',
})
export class AdminProductListComponent {
  productList: product[];
  loading: boolean;
  categories: string[];
  constructor(private service: ProductsService, private router: Router) {
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
    category == "All"
      ? this.getProducts()
      : this.getProductListByCategory(category);
  }
}
