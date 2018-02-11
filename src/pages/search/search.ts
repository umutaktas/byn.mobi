import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Constants } from '../../shared/constants'

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  constants:any = Constants
  products: any = []
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  initializeItems(){
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
  getItems(ev:any){
    this.initializeItems();
    let val = ev.target.value

    if (val && val.trim() != '') {
      this.products = this.products.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
