import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{HttpClientModule} from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { CategoryListComponent } from './components/category-list/category-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CartComponent,
    LoginComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
