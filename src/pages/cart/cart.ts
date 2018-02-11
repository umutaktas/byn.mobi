import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Constants } from '../../shared/constants'


@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  constants:any = Constants
  products:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.products = [
      {
        name: "Ice Seal Humor Santiago",
        categories: [{name: "Knitwear"}],
        price: 20,
        quantity: 1,
        imgUrl: "assets/img/products/image1.png"
      },
      {
        name: "Grabber Grey Cardigan Button Up &rarr; Floral Sating Top and Brown Pants",
        categories: [{name: "Knitwear"}],
        price: 22,
        quantity: 1,
        imgUrl: "assets/img/products/image2.png"
      },
      {
        name: "Ice Seal Humor Santiago",
        categories: [{name: "Knitwear"}],
        price: 33,
        quantity: 1,
        imgUrl: "assets/img/products/image3.png"
      },
      {
        name: "Grabber Grey Cardigan Button Up &rarr; Floral Sating Top and Brown Pants",
        categories: [{name: "Knitwear"}],
        price: 16,
        quantity: 1,
        imgUrl: "assets/img/products/image4.png"
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  removeItem(item){
    console.log(item);
    this.products.splice(this.products.indexOf(item), 1);
  }


  getSubtotal(){
    var total = total || 0;
    this.products.forEach(function (item) {
      total += parseInt(item.price) * item.quantity;
    });
    return total;
  }

  goToCheckout(){
    console.log("checkout")
    this.navCtrl.push('PaymentStep1Page')
  }

}
