import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css',
})
export class ProductsDetailsComponent implements OnInit {
  id: any;
  product: any = {};
  loading:boolean;
  constructor(
    private router: ActivatedRoute,
    private productService: ProductsService
  ) {
    this.id = this.router.snapshot.paramMap.get('id');
    this.loading = true;
  }
  ngOnInit(): void {

this.getProductDetails();
  }



  getProductDetails() {
    this.productService.getProductDetails(+this.id).subscribe((data) => {
      console.log(data);
      this.product = data;
      this.loading = false;
    });
  }
}
