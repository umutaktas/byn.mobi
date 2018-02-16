import {Component} from '@angular/core';
import { NavController} from 'ionic-angular';
import { Constants } from '../../shared/constants'
import { Observable } from 'rxjs/Observable';
import {MyFirebase} from "../../providers/my-firebase/my-firebase";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  offerImgSrc: String;
  featuredProducts: Array<any>;
  //latestProducts: any[];
  latestProducts:  Observable<any[]>;
  constants: any;

  constructor(public navCtrl: NavController , private myFirebase: MyFirebase) {

    this.offerImgSrc = "assets/img/bann" +
        "" +
        "er-white.jpg"
    this.constants = Constants

    this.featuredProducts = [
      {
        id: 61,
        name: "Ice Seal Humor Santiago",
        categories: [{name: "Editorial"}],
        price: 20,
        images: [{src: "assets/img/products/cat-image-1.png"}]
      },
      {
        id: 62,
        name: "Grabber Grey Cardigan Button Up &rarr; Floral Sating Top and Brown Pants",
        categories: [{name: "Editorial"}],
        price: 18,
        images: [{src: "assets/img/products/cat-image-2.png"}]
      }
    ];


  }

    ionViewDidLoad() {

    }



}
