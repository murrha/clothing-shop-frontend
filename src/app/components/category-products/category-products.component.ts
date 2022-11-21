import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/category';
import { CategoryService } from 'src/app/category.service';
import { Product } from 'src/app/product';

//for getting the products associated by a certain category
@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit {

  products?: Product[];
  currentCategoryName: string = ""; 
  categoryProducts?: Category[]; 

  constructor(private categoryService: CategoryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=> {
      this.listCategoryProducts();
    });
  }

  listCategoryProducts(){
      this.categoryService.getByName(this.currentCategoryName).subscribe(
        data => {
          this.products = data; 
        }
      )
  }
  

}
