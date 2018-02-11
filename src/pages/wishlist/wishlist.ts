import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Constants } from '../../shared/constants'

/**
 * Generated class for the WishlistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-wishlist',
  templateUrl: 'wishlist.html',
})
export class WishlistPage {
  editWishlist: boolean;
  products:any = []
  constants:any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.constants = Constants;
    this.products = [
      {
        id: 1,
        name: "Ice Seal Humor Santiago",
        categories: [{name: "Knitwear"}],
        price: 20,
        images: [{src: "assets/img/products/image1.png"}]
      },
      {
        id: 2,
        name: "Grabber Grey Cardigan Button Up &rarr; Floral Sating Top and Brown Pants",
        categories: [{name: "Knitwear"}],
        price: 22,
        images: [{src: "assets/img/products/image2.png"}]
      },
      {
        id: 3,
        name: "Ice Seal Humor Santiago",
        categories: [{name: "Knitwear"}],
        price: 33,
        images: [{src: "assets/img/products/image3.png"}]
      },
      {
        id: 4,
        name: "Grabber Grey Cardigan Button Up &rarr; Floral Sating Top and Brown Pants",
        categories: [{name: "Knitwear"}],
        price: 16,
        images: [{src: "assets/img/products/image4.png"}]
      }
    ]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WishlistPage');
    this.editWishlist = false;
  }

  makeListEditable(){
    this.editWishlist = true;
  }

  removeSelectedItems(){
    this.editWishlist = false;
  }

}
