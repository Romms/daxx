import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  moduleId: module.id,
  selector: 'product-detail',
  templateUrl: 'product-detail.component.html',
  styleUrls: ['product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.navigated = true;
        this.productService.getProduct(id)
            .then(product => this.product = product);
      } else {
        this.navigated = false;
        this.product = new Product();
      }
    });
  }

  save(): void {
    this.productService
        .save(this.product)
        .then(product => {
          this.product = product;
          this.goBack();
        })
        .catch(error => this.error = error);
  }

  goBack(savedProduct: Product = null): void {
    this.router.navigate(['/']);
  }
}
