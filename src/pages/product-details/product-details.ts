import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Constants } from '../../shared/constants'

/**
 * Generated class for the ProductDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {
  product: any = {}
  productImages:any = []
  selectedProduct: any = {}
  constants:any = Constants

  wishListButtonText = this.constants.wishListButtonText;
  addToCartButtonText = this.constants.addToCartButtonText

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initiate()
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailsPage');
  }

  initiate(){
    this.product = {id: 84,
      name: "Grabber Grey Cardigan Button Up",
      categories: [{name: "Editorial"}],
      price: 16,
      images: [{src: "assets/img/products/image4.png"}, {src: "assets/img/products/image1.png"}, {src: "assets/img/products/image2.png"}],
      description: "<p>Meggings next level yr, 90's small batch four loko brunch wes anderson fixie american apparel flexitarian pitchfork neutra.</p><p>Constructed in cotton sweat fabric, this lovely piece, lacus eu mattis auctor, dolor lectus venenatis nulla, at tristique eros sem vel ante. Sed leo enim, iaculis ornare tristique non, vulputate sit amet ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean fringilla laoreet mauris lectus pellentesque eu.</p>",
      attributes: [
        {
          id:1,
          name:"color",
          options:["black","orange","red"],
          position:0,
          variation:true,
          visible:true
        },
        {
          id:2,
          name:"size",
          options:["s","l","xl"],
          position:0,
          variation:true,
          visible:true
        }
      ]
    }

    this.selectedProduct = {
      name: this.product.name,
      id: this.product.id,
      price: this.product.price, // selected product price, will be updated if it has variation
      imgUrl: this.product.images[0].src,
      quantity: 1
    }
  }


  addToCart(){
    console.log()
    this.addToCartButtonText = this.constants.addToCartSuccessButtonText
  }


  addToWishList (){
    this.wishListButtonText = this.constants.wishListAddSuccessButtonText
  }

}
