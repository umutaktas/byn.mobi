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



  constructor(public navCtrl: NavController, public navParams: NavParams,
              private myFirebase: MyFirebase  )
  {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
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
