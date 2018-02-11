import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CountryPickerProvider } from '../../providers/country-picker/country-picker'


@IonicPage()
@Component({
  selector: 'page-payment-step1',
  templateUrl: 'payment-step1.html',
})
export class PaymentStep1Page {

  user:any = {}
  order:any = {}
  countries:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public countryService: CountryPickerProvider) {
    this.order = {
      shipping: {
        first_name: "Louella",
        last_name: "White",
        address_1: "Unit 20",
        address_2: "16 Tabernacle St",
        city: "London",
        postcode: "EC2A 4DD",
        country: "GB"
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentStep1Page');
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


  confirmOrder(){
    this.navCtrl.push('PaymentStep2Page')
  }

}
