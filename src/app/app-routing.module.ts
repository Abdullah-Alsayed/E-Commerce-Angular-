import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './Products/components/product-list/product-list.component';
import { ProductsDetailsComponent } from './Products/components/products-details/products-details.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { ErrorComponent } from './shared/components/error/error.component';
import { AdminProductListComponent } from './Products/Admin/components/admin-product-list/admin-product-list.component';
import { ProductFormComponent } from './Products/Admin/components/product-form/product-form.component';

const routes: Routes = [
 { path:'products', component:ProductListComponent},
 { path:'admin/products', component:AdminProductListComponent},
 { path:'admin/productForm', component:ProductFormComponent},
 { path:'admin/productForm/:id', component:ProductFormComponent},
 { path:'details/:id', component:ProductsDetailsComponent},
 { path:'cart', component:CartComponent},
 { path:'error', component:ErrorComponent},
 { path:'**', redirectTo:'products', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
