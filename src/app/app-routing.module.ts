import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CategoryProductsComponent } from './components/category-products/category-products.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';

//more specific routes at the top
//add custom 404 page afterwards
const routes: Routes = [
  {path:'cart', component: CartComponent},
  {path:'category/:name', component: CategoryProductsComponent},
  {path: 'product/:id', component: ProductDetailsComponent},
  {path: 'product', component: ProductListComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
