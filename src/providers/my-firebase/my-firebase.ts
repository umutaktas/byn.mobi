import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {AngularFireDatabase} from "angularfire2/database";
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from "firebase";
import {Facebook} from "@ionic-native/facebook";
import {Storage} from "@ionic/storage";




@Injectable()
export class MyFirebase {

    public fbProfile: any

  constructor(private dbFire: AngularFireDatabase,
              private  authFire: AngularFireAuth,
              private face: Facebook,
              private storage: Storage) {

  }



    facebookLogin(): Promise<any>  {
        return this.face.login(['email'])
            .then(response => {
                const credantial = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
                this.authFire.auth.signInWithCredential(credantial)
                    .then(success => {
                        this.face.api('me?fields=id,name,email,picture.width(720).height(720).as(picture_large)', [])
                            .then(profile => {
                                const userData = {
                                    uid: success.uid,
                                    email: profile['email'],
                                    picture_large: profile['picture_large']['data']['url'],
                                    username: profile['name'],
                                    method: 'Facebook'
                                };
                                this.saveUser(userData).then(() =>
                                console.log('saved'))
                            })
                    })
        }).catch((err) => {
            console.log(err)
        })
    }

    emailLogin() {
        // TODO: Email
    }

    private saveUser(userData) {
        const uid = userData.uid;
        return this.dbFire.list('mobileUsers/')
            .set(uid, userData).then((res) => {
                this.storage.set('mobileUser', userData)
            })

    }

    hasLoggedIn(){
      return this.storage.get('mobileUser');
    };

    getAllDiscounts() {
        return this.dbFire.list('allDiscounts/Colins')

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
        this.authFire.auth.signOut()
            .then(() => {
            this.storage.remove('mobileUser')
        })
    };



}
