import { product } from './../models/product';
import { environment as env } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private http:HttpClient) { }
  getProductList(){
  return this.http.get(`${env.apiUrl}/products`);
  }
  getCategoriesList(){
    return this.http.get(`${env.apiUrl}/products/categories`);
    }
    getProductListByCategory(Category: string) {
      console.log(`${env.apiUrl}/products/category/${Category}`);
    return this.http.get(`${env.apiUrl}/products/category/${Category}`);
    }
    getProductDetails(id:number){
      return this.http.get(`${env.apiUrl}/products/${id}`);
      }
}
