import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home'
import {MyFirebase} from "../../providers/my-firebase/my-firebase";


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private myFirebase: MyFirebase)  {
  }

  ionViewDidLoad() {

  }

   loginfb() {
      this.myFirebase.facebookLogin().then(user => {
        console.log(user)
      })
  }


  skipLogin(){
    this.navCtrl.setRoot(HomePage)
  }
}
