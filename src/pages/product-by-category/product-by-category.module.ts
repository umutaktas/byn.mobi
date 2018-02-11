import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductByCategoryPage } from './product-by-category';
import { OrderByPipe } from '../../pipes/order-by/order-by'

@NgModule({
  declarations: [
    ProductByCategoryPage,
    OrderByPipe
  ],
  imports: [
    IonicPageModule.forChild(ProductByCategoryPage),
  ],
  exports: [
    ProductByCategoryPage
  ]
})
export class ProductByCategoryPageModule {}
