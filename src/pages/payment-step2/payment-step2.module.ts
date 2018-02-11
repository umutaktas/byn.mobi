import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentStep2Page } from './payment-step2';

@NgModule({
  declarations: [
    PaymentStep2Page,
  ],
  imports: [
    IonicPageModule.forChild(PaymentStep2Page),
  ],
  exports: [
    PaymentStep2Page
  ]
})
export class PaymentStep2PageModule {}
