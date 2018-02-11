import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home'
/**
 * Generated class for the PaymentStep3Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-payment-step3',
  templateUrl: 'payment-step3.html',
})
export class PaymentStep3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentStep3Page');
  }

  goToMain(){
    this.navCtrl.setRoot(HomePage);
  }

}
