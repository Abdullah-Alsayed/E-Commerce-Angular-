import { Component, EventEmitter, Output } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { product } from '../../models/product';
import { Router } from '@angular/router';
import { ErrorComponent } from '../../../shared/components/error/error.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: product[];
  categories: string[];
  loading :boolean
  constructor(private services: ProductsService, private router: Router) {
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
      (error) => this.router.navigateByUrl('/error')
    );
  }
  getCategoriesList() {
    this.services.getCategoriesList().subscribe(
      (data: any) => {
        console.log(data);
        this.categories = data;
      },
      (error) => this.router.navigateByUrl('/error')
    );
  }
  getProductListByCategory(category: any) {
    this.services.getProductListByCategory(category).subscribe(
      (data: any) => {
        this.products = data;
        this.loading = false;
      },
      (error) => this.router.navigateByUrl('/error')
    );
  }
  productFilterByCategory(category: any) {
    console.log(category);
    this.loading = true;
    category == "All"
      ? this.getProductList()
      : this.getProductListByCategory(category);
  }
  ngOnInit() {
    this.getCategoriesList();
    this.getProductList();
  }
}
