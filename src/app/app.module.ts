import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { ProductViewComponent } from './productview/productview.component';

@NgModule({
  declarations: [ProductViewComponent],
  imports: [BrowserModule],
  entryComponents: [ProductViewComponent]
})
export class ProductViewModule {
  constructor(private injector: Injector) {
    const productView = createCustomElement(ProductViewComponent, { injector });
    customElements.define('product-view', productView);
  }

  ngDoBootstrap() {}
}
