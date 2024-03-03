import { ProductsService } from './../../../services/products.service';
import { product } from './../../../models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { sharedService } from '../../../../shared/services/services.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  title: string;
  product?: any;
  categories: string[];
  imageSrc: string | ArrayBuffer | null;

  constructor(
    private builder: FormBuilder,
    private ProductsService: ProductsService,
    private sharedService: sharedService,
    private router: ActivatedRoute
  ) {
    this.categories = [];
    this.imageSrc = '';
    {
      this.title = '';
      this.productForm = builder.group({
        title: ['', Validators.required],
        price: ['', [Validators.required, Validators.min(0)]],
        description: ['', Validators.required],
        image: ['', Validators.required],
        category: ['', Validators.required],
      });
    }
  }
  ngOnInit(): void {
    console.log(this.router.snapshot.paramMap.get('id'));
    this.title =
      this.router.snapshot.paramMap.get('id') != undefined || null
        ? (this.title = 'Update')
        : (this.title = 'Add');
    this.getCategoriesList();
    if (this.router.snapshot.paramMap.get('id') != undefined || null) {
      const id = this.router.snapshot.paramMap.get('id') ?? 0;
      this.ProductsService.getProductDetails(+id).subscribe((data) => {
        this.product = data;
         console.log(data)
      });
    }
  }
  getCategoriesList() {
    this.ProductsService.getCategoriesList().subscribe(
      (data: any) => {
        this.categories = data;
      },
      (error) => this.sharedService.fireToast(error, 'error', 1000)
    );
  }
  updateCategory(category: any) {
    this.productForm.controls['category'].setValue(category);
  }
  onsubmit() {
    this.router.snapshot.paramMap.get('id') != undefined || null
      ? this.updateProduct()
      : this.addProduct();
  }
  addProduct() {
    this.ProductsService.addProduct(this.productForm.value).subscribe(
      (product) => {
        this.sharedService.fireToast(
          'Product Added successfully',
          'success',
          1500
        );
        this.productForm.reset();
        this.imageSrc = '';
      }
    );
  }

  updateProduct() {
    this.ProductsService.addProduct(this.productForm.value).subscribe(
      (product) => {
        this.sharedService.fireToast(
          'Product Updated successfully',
          'success',
          1500
        );
      }
    );
  }

  readURL(event: any): void {
    if (event.target?.files && event.target?.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => (this.imageSrc = reader.result);
      reader.readAsDataURL(file);
    }
  }
}
