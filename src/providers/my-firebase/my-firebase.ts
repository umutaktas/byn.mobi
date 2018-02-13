import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {AngularFireDatabase} from "angularfire2/database";
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from "firebase";
import {Facebook, FacebookLoginResponse} from "@ionic-native/facebook";


@Injectable()
export class MyFirebase {

  constructor(private dbFire: AngularFireDatabase,
              private  authFire: AngularFireAuth,
              private face: Facebook) {

  }
  userData:any = null;

    facebookLogin() {
        this.face.login(['email','public_profile']).then((responce:FacebookLoginResponse)=> {
            this.face.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)',[]).then(profile => {
                this.userData = {email: profile['email'],first_name: profile['first_name'], picture_large:profile['picture_large']['data']['url'],username: profile['name'] };
            })
        })
        return this.userData;
    }

    emailLogin() {

    }

    private saveUser(){

    }


    private oAuthLogin(provider: firebase.auth.AuthProvider) {
        return this.authFire.auth.signInWithPopup(provider);

    }

    anonymousLogin() {
        return this.authFire.auth.signInAnonymously()
            .then((user) => {
                return user;
            })
    }

    signOut() {
        this.authFire.auth.signOut().then(() => {
            localStorage.removeItem('isLoggedin');
        });
    }


}
