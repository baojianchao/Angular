import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list.component';
import { ProductDepartmentComponent } from './product-department.component';
import { ProductRowComponent } from './product-row.component';
import { ProductImageComponent } from './product-image.component';
import { ProductPriceComponent } from './product-price.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductDepartmentComponent,
    ProductImageComponent,
    ProductPriceComponent,
    ProductRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
