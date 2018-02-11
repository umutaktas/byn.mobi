import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CouponsPage } from './coupons';

@NgModule({
  declarations: [
    CouponsPage,
  ],
  imports: [
    IonicPageModule.forChild(CouponsPage),
  ],
  exports: [
    CouponsPage
  ]
})
export class CouponsPageModule {}
