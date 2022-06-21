import { Category } from "./category";

export class Product {
    id!: number;
    name!: String;
    description!: String;
    price!: number; 
    stock!: number;
    imageUrl!: String;
    active!: boolean;
    category!: Category; 
}
