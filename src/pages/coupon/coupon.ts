import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";

/**
 * Generated class for the CouponPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-coupon',
  templateUrl: 'coupon.html',
})
export class CouponPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }
    private amount: any;
    private yuzde: any;
    private anapara: any;

  ionViewDidLoad() {
    console.log('ionViewDidLoad CouponPage');
    this.amount= this.navParams.get("amount");
    this.yuzde = this.navParams.get("yuzde");
    this.anapara = this.navParams.get("anapara");
      console.log(this.anapara);
      console.log(this.yuzde);
      console.log(this.amount);

  }

  homeNavigate() {
    this.navCtrl.setRoot(HomePage);

  }


    showAlert() {
        let alert = this.alertCtrl.create({
            title: 'Gift Card!',
            subTitle: 'Gift Card Göndereceğiniz Mail Adresinizi Giriniz',
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Email'
                },
            ],
            buttons: [
                {
                    text: 'Tamam',
                    handler: data => {
                        console.log('Saved clicked');
                    }
                },
                {
                    text: 'İptal',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },

            ]
        });
        alert.present();
    }
}
