import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CountryPickerProvider } from '../../providers/country-picker/country-picker'

/**
 * Generated class for the EditProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
  countries:any = [];
  user:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public countryService: CountryPickerProvider) {
    this.user = {
      first_name: "Louella",
      last_name: "White",
      username: "louella",
      gravatar: "assets/img/user.jpg",
      shipping: {
        address_1: "Unit 20",
        address_2: "16 Tabernacle St",
        city: "London",
        postcode: "EC2A 4DD",
        country: "GB"
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
    this.initialize()
  }
  initialize(){
    
    this.loadCountry()

  }

  loadCountry(){
    this.countryService.getCountries().subscribe(countries => {
      this.countries = countries;
      console.log(this.countries)
    })
  }

}
