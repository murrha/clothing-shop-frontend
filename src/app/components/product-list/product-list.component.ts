import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products?: Product[];

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.retrieveProducts();
  }

  retrieveProducts(): void{
    this.productService.getAllProducts()
    .subscribe({
      next: (data) => {
        this.products = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
