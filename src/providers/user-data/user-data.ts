import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Facebook, FacebookLoginResponse} from "@ionic-native/facebook";


@Injectable()
export class UserDataProvider {


    userData: any = [];

    //constructor(private facebook: Facebook) {
    constructor() {
    }

    /*
    loginWithFB() {
        this.facebook.login(['email' ]).then((response: FacebookLoginResponse) => {
            this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
                this.userData = {
                    email: profile['email'],
                    first_name: profile['first_name'],
                    picture: profile['picture_large']['data']['url'],
                    username: profile['name']
                }
            });
        });
    }
    */


    loginWithFB() {

                this.userData = {
                    email: "umut.aktas@gmail.com",
                    first_name: "umut aktas",
                    picture: "",
                    username: "umutaktas"
                }
            }


}
