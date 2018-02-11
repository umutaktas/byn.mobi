import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {AngularFireDatabase} from "angularfire2/database";
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from "firebase";


@Injectable()
export class MyFirebase {

  constructor(private dbFire: AngularFireDatabase,
              private  authFire: AngularFireAuth,
              private router: Router) {

  }

    googleLogin() {
        const provider = new firebase.auth.GoogleAuthProvider();
        return this.oAuthLogin(provider);
    }

    facebookLogin() {
        const provider = new firebase.auth.FacebookAuthProvider();
        return this.oAuthLogin(provider);
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
            this.router.navigate(['/']);
        });
    }


}
