webpackJsonp([13],{

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile__ = __webpack_require__(460);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditProfilePageModule = (function () {
    function EditProfilePageModule() {
    }
    return EditProfilePageModule;
}());
EditProfilePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */]
        ]
    })
], EditProfilePageModule);

//# sourceMappingURL=edit-profile.module.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_country_picker_country_picker__ = __webpack_require__(283);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EditProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EditProfilePage = (function () {
    function EditProfilePage(navCtrl, navParams, countryService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.countryService = countryService;
        this.countries = [];
        this.user = {};
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
        };
    }
    EditProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditProfilePage');
        this.initialize();
    };
    EditProfilePage.prototype.initialize = function () {
        this.loadCountry();
    };
    EditProfilePage.prototype.loadCountry = function () {
        var _this = this;
        this.countryService.getCountries().subscribe(function (countries) {
            _this.countries = countries;
            console.log(_this.countries);
        });
    };
    return EditProfilePage;
}());
EditProfilePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-edit-profile',template:/*ion-inline-start:"/Users/umutaktas/biyone/dev/biyone.mobi/src/pages/edit-profile/edit-profile.html"*/'<!--\n  Generated template for the EditProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Edit Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="settings">\n  <div class="profile-img">\n    <img [src]="user.gravatar">\n  </div>\n\n<ion-list>\n  <form name="editProfileForm" #editProfileForm=\'ngForm\' autocomplete="false">\n    <ion-item-group>\n      <ion-item-divider>Info</ion-item-divider>\n      <ion-item>\n        <ion-label fixed>First name</ion-label>\n        <ion-input type="text" [(ngModel)]="user.first_name" name="first_name" placeholder="You first name" required></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label fixed>Last name</ion-label>\n          <ion-input type="text" [(ngModel)]="user.last_name" name="last_name" placeholder="You last name" required></ion-input>\n        </ion-item>\n      </ion-item-group>\n\n\n      <ion-item-group>\n        <ion-item-divider>Shipping address</ion-item-divider>\n        <ion-item>\n            <ion-label fixed>Address line 1</ion-label>\n            <ion-input type="text" [(ngModel)]="user.shipping.address_1" name="address_1" placeholder="" required></ion-input>\n          </ion-item>\n\n          <ion-item>\n              <ion-label fixed>Address line 2</ion-label>\n              <ion-input type="text" [(ngModel)]="user.shipping.address_2" name="address_2" placeholder="" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label fixed>City</ion-label>\n                <ion-input type="text" [(ngModel)]="user.shipping.city" name="city" placeholder="" required></ion-input>\n              </ion-item>\n            <ion-item>\n                <ion-label fixed>Postcode</ion-label>\n                <ion-input type="text" [(ngModel)]="user.shipping.postcode" name="postcode" placeholder="" required></ion-input>\n              </ion-item>\n\n              <ion-item>\n                  <ion-label>Country</ion-label>\n                  <ion-select [(ngModel)]="user.shipping.country" name="country">\n                    <ion-option [value]="country.code" *ngFor="let country of countries">{{country.name}}</ion-option>\n                    </ion-select>\n                    </ion-item>\n\n                    <div class="footer-button">\n                      <button ion-button outline block round color="dark" margin-bottom [disabled]="!editProfileForm || !editProfileForm.form.valid">Save changes</button>\n                      <button ion-button block round color="danger">Delete Account</button>\n                    </div>\n\n      </ion-item-group>\n  </form>\n\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/umutaktas/biyone/dev/biyone.mobi/src/pages/edit-profile/edit-profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_country_picker_country_picker__["a" /* CountryPickerProvider */]])
], EditProfilePage);

//# sourceMappingURL=edit-profile.js.map

/***/ })

});
//# sourceMappingURL=13.main.js.map