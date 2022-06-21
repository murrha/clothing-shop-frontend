import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

const baseUrl = 'http://localhost:8080/product'; 

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(baseUrl); 
  }

  getByName(name: any): Observable<any>{
    return this.http.get(`${baseUrl}/${name}`); 
  }
}
