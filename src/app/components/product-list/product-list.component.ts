import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products?: Product[]; 

  constructor(private productService: ProductService) { }

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

}
