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

      this.latestProducts = this.myFirebase.getAllDiscounts().valueChanges()
  }

    ionViewDidLoad() {


    }





}
