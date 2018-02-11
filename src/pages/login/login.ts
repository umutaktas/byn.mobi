import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home'
import {UserDataProvider} from "../../providers/user-data/user-data";


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {



  constructor(public navCtrl: NavController, public navParams: NavParams, private userdataProvider: UserDataProvider )
  {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

   loginfb() {
      this.userdataProvider.loginWithFB();
  }


  skipLogin(){
    this.navCtrl.setRoot(HomePage)
  }
}
