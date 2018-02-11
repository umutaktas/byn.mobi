import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Constants } from '../../shared/constants'


@IonicPage()
@Component({
  selector: 'page-product-by-category',
  templateUrl: 'product-by-category.html',
})
export class ProductByCategoryPage {
  products:any = []
  constants:any
  layout = 'grid' // to manipulate grid/list view 
  order = 'name' // to manipulate list order
  direction: number; // asecending and descending order
  isDesc: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.constants = Constants;
    this.products = [
      {
        name: "Ice Seal Humor Santiago",
        categories: [{name: "Knitwear"}],
        price: 20,
        images: [{src: "assets/img/products/image1.png"}]
      },
      {
        name: "Grabber Grey Cardigan Button Up &rarr; Floral Sating Top and Brown Pants",
        categories: [{name: "Knitwear"}],
        price: 22,
        images: [{src: "assets/img/products/image2.png"}]
      },
      {
        name: "Ice Seal Humor Santiago",
        categories: [{name: "Knitwear"}],
        price: 33,
        images: [{src: "assets/img/products/image3.png"}]
      },
      {
        name: "Grabber Grey Cardigan Button Up &rarr; Floral Sating Top and Brown Pants",
        categories: [{name: "Knitwear"}],
        price: 16,
        images: [{src: "assets/img/products/image4.png"}]
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductByCategoryPage');
  }


sort(property){
  this.isDesc = !this.isDesc; //change the direction    
  this.order = property;
  this.direction = this.isDesc ? 1 : -1;
}

  scrollToTop(){
    console.log("Scroll to top")
  }

}
