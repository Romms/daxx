import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  moduleId: module.id,
  selector: 'my-products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.css']
})

export class ProductsComponent implements OnInit {
  products: Product[];
  error: any;
  productToRemove: Product;

  constructor(private router: Router,
              private productService: ProductService) {
  }

  getProducts(): void {
    this.productService
      .getProducts()
      .then(products => this.products = products)
      .catch(error => this.error = error);
  }

  close(savedProduct: Product): void {
    if (savedProduct) {
      this.getProducts();
    }
  }

  askToDeleteProduct(product: Product): void {
    this.productToRemove = product;
  }

  cancelDeletion(): void {
    this.productToRemove = undefined;
  }

  deleteProduct(): void {
    this.productService
      .delete(this.productToRemove)
      .then(res => {
        this.products = this.products.filter(h => h !== this.productToRemove);
        this.productToRemove = undefined;
      })
      .catch(error => this.error = error);
  }

  goToEdit(product: Product): void {
    this.router.navigate(['/product', product.id]);
  }

  addProduct(): void {
    this.router.navigate(['/product-create']);
  }

  ngOnInit(): void {
    this.getProducts();
  }
}
