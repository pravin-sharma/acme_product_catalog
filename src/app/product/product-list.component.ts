import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {

  getProductSub!: Subscription
  constructor(private productService: ProductService){

  }

  ngOnInit(): void {
    console.log('In ngOnInit');
    this.getProductSub = this.productService.getProducts().subscribe({
      next: product=> {
        this.productList = product
        this.updateFilteredProductList();
      },
      error: err => console.log(err)
    });
  }

  ngOnDestroy():void{
    this.getProductSub.unsubscribe();
  }

  listTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  productList: IProduct[] = [];
  filteredList: IProduct[] = [];
  private _listFilter: string = '';

  //getter & setter
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(str) {
    this._listFilter = str;
    this.updateFilteredProductList();
  }

  // Toggle Image
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  //filter funtion for updating filteredList based  on listFilter
  updateFilteredProductList() {
    this.filteredList = this.productList.filter((product) => {
      return (
        product.productName
          .toLowerCase()
          .includes(this.listFilter.toLowerCase()) ||
        product.productCode
          .replace('-', ' ')
          .toLowerCase()
          .includes(this.listFilter.toLowerCase())
      );
    });
  }

  onRatingClicked(message: string){
    console.log(message);
  }


}
