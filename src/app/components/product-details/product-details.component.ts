import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  products?: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) { }

  getProductById(id: any): void {
    this.productService.getById(id)
    .subscribe({
      next: (data)=>{
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

  ngOnInit(): void {
    this.getProductById(this.route.snapshot.paramMap.get('id'));
  }


}
