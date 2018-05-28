import { Component, ViewEncapsulation, TemplateRef, ViewChild, ElementRef, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'product-view',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductViewComponent {
 
  public productlist : any[] = [
    {
      productname : 'JBL Flip 4',
      code : 'cat1-0001',
      price : 18.01,
      cartprice : 0,
      available : 10,
      qty : 0
    }, {
      productname : 'Bose Sound Link',
      code : 'cat1-0010',
      price : 129.05,
      cartprice : 0,
      available : 9,
      qty : 0
    }, {
      productname : 'AB Portable',
      code : 'cat1-0008',
      price : 19.78,
      cartprice : 0,
      available : 11,
      qty : 0
    }, {
      productname : 'AE-9 Portable',
      code : 'cat1-0011',
      price : 299.99,
      cartprice : 0,
      available : 8,
      qty : 0
    }, {
      productname : 'JBL Pulse 3',
      code : 'cat1-0009',
      price : 23.05,
      cartprice : 0,
      available : 10,
      qty : 0
    }
  ];
  constructor() {
  }


  
  public addToCart(product) {
    if(product.qty === product.available) {
      console.log('Product is out of Stock.');
    } else {
      product.qty = product.qty + 1;
      const productcartele = document.querySelector('product-cart');
      if(productcartele != null) {
        productcartele['message']=product;
      }
    }
   }
  
  
  @Input()
  set message(message: string) {
    let productObj = message;
    for(let product of this.productlist) {
      if(product.productname === productObj['productname']) {
        product.qty= productObj['qty'];
        break;
      }
    }
  
  }
  get message(): string { return this._message; }
  _message: string;

}