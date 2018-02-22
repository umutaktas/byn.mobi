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

  userData : any = {};

  ionViewDidLoad() {
  }

   loginfb() {
      this.myFirebase.facebookLogin().then(() =>
          this.skipLogin()
      )


  }

  loginWithMail() {
     // this.navCtrl.push(LoginWithMail)
      this.myFirebase.signOut()
  }


  skipLogin(){
    this.navCtrl.setRoot(HomePage)
  }
}
