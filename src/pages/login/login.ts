import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home'
import {MyFirebase} from "../../providers/my-firebase/my-firebase";
import {LoginWithMail} from "../login-with-mail/login-with-mail";


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
    //  if (this.myFirebase.authFire.auth.)

  }

   loginfb() {
      this.myFirebase.facebookLogin().then(user => {
        if (user != null) {
            this.navCtrl.setRoot(HomePage)
        }
      })
  }

  loginWithMail() {
      this.navCtrl.push(LoginWithMail)
  }


  skipLogin(){
    this.navCtrl.setRoot(HomePage)
  }
}
