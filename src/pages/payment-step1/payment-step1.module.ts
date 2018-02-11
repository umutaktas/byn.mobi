import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentStep1Page } from './payment-step1';

@NgModule({
  declarations: [
    PaymentStep1Page,
  ],
  imports: [
    IonicPageModule.forChild(PaymentStep1Page),
  ],
  exports: [
    PaymentStep1Page
  ]
})
export class PaymentStep1PageModule {}
