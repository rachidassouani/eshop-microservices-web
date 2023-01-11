import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService) { }

  products: any

  ngOnInit(): void {
    this.productService.findAllProducts().subscribe({
        next: (response) => {
          this.products = response
        },error: (error) => {
          console.log(error)
        }
      });
  }
}