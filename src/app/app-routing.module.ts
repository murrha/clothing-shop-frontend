import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';

//more specific routes at the top
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path:'cart', component: CartComponent},
  {path:'category/:name', component: CategoryListComponent},
  {path: 'product/:name', component: ProductDetailsComponent},
  {path: 'product', component: ProductListComponent},
  {path: '', redirectTo: '/product', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
