import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/category';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories?: Category[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.retrieveCategories(); 
  }

  retrieveCategories(): void{
    this.categoryService.getAllCategories()
    .subscribe({
      next: (data) => {
        this.categories = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

}
