import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    
    this.productService.getProduct(this.id).subscribe({
      next: product=> this.product = product
    })
  }
  

  id: Number = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  product: IProduct | undefined;
  pageTitle: string = 'Product Details';

  onBack() {
    this.router.navigate(['/product-list']);
  }
}
