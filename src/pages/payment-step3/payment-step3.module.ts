import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentStep3Page } from './payment-step3';

@NgModule({
  declarations: [
    PaymentStep3Page,
  ],
  imports: [
    IonicPageModule.forChild(PaymentStep3Page),
  ],
  exports: [
    PaymentStep3Page
  ]
})
export class PaymentStep3PageModule {}
