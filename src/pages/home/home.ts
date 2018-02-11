import {Component} from '@angular/core';
import { NavController} from 'ionic-angular';
import { Constants } from '../../shared/constants'

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

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

  constructor(public navCtrl: NavController ,afDB: AngularFireDatabase) {

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

    this.latestProducts = afDB.list('latestProducts').valueChanges();


    /*

    this.latestProducts = [
      {
        id: 81,
        name: "Adil IŞIK",
        categories: [{name: "Editorial"}],
        desc: "Adil Işık İndiriminiz Sizi Bekliyor. Hemen Tıklayın!",
        images: [{src: "assets/img/firms/adilisik.jpg"}]
      },
      {
        id: 82,
        name: "Kiğılı",
        categories: [{name: "Editorial"}],
        desc: "Kiğılı ile Kaliteyi Keşfet. Hemen İndirimini Al",
        images: [{src: "assets/img/firms/kigili.png"}]
      },
      {
        id: 83,
        name: "Mavi Jeans",
        categories: [{name: "Editorial"}],
        desc: "Çok mu Çok Oluyoruz. İnidirimi Hemen Al",
        images: [{src: "assets/img/firms/mavi.png"}]
      },
      {
        id: 84,
        name: "Zara",
        categories: [{name: "Editorial"}],
        desc: "Zara'da Işıltı ve Zerafet Var. İndirimin Seni Bekliyor.",
        images: [{src: "assets/img/firms/zara.png"}]
      }
    ]
    */

  }



}
