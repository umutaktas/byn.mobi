import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserDataProvider} from "../../providers/user-data/user-data";

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  user:any = {}
  offerPosts: any = []
  orderList:any = [];
  show:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userP : UserDataProvider) {
    this.user.full_name= this.userP.userData.userDisplayName;
    this.user.username= this.userP.userData.first_name;
    this.user.gravatar= this.userP.userData.picture;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.initiateProfilePage()
  }
  initiateProfilePage(){
    this.show = 'orders';
    this.orderList = [
      {
        number: 46121,
        status: "pending",
        total: 22.00,
        currency: "GBP",
        line_items: [{
          name: "Ice Seal Humor Santiago Chinos",
          price: "22.00",
          quantity: 1,
          total: "22.00",
          meta: [{label: "color", value: "red"}, {label: "size", value: 'xl'}]
        }]
      },
      {
        number: 46121,
        status: "completed",
        transaction_id:"adsdfasfg",
        total: 22.00,
        currency: "GBP",
        line_items: [{
          name: "Ice Seal Humor Santiago Chinos",
          price: "22.00",
          quantity: 1,
          total: "22.00",
          meta: [{label: "color", value: "red"}, {label: "size", value: 'xl'}]
        }, ]
      }
    ]
    this.offerPosts = [
      {thumbnail: "assets/img/Offer2.png"}, {thumbnail: "assets/img/Offer3.png"}, {thumbnail: "assets/img/Offer1.png"}
    ]
  }

}
