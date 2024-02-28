import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './Products/components/product-list/product-list.component';
import { ProductsDetailsComponent } from './Products/components/products-details/products-details.component';
import { ChartComponent } from './carts/components/chart/chart.component';
import { ErrorComponent } from './shared/components/error/error.component';

const routes: Routes = [
 { path:'products', component:ProductListComponent},
 { path:'details/:id', component:ProductsDetailsComponent},
 { path:'cart', component:ChartComponent},
 { path:'error', component:ErrorComponent},
 { path:'**', redirectTo:'products', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
