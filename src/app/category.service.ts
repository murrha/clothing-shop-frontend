import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './category';

const baseUrl = 'http://localhost:8080/category'; 

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(baseUrl); 
  }
}
