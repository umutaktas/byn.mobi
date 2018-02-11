import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PaymentStep2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-payment-step2',
  templateUrl: 'payment-step2.html',
})
export class PaymentStep2Page {
  payment_method_selected = 'card'
  card:any = {}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentStep2Page');
  }

  scanCard(){
    console.log("Scan clicked")
  }
  payCashOnDelivery(){
    this.confirmOrder()
  }

  makeStripePayment(){
    this.confirmOrder()
  }

  payWithPaypal(){
    this.confirmOrder()
  }

  confirmOrder(){
    this.navCtrl.push('PaymentStep3Page')
  }

}
