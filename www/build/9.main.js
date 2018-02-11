webpackJsonp([9],{

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_step1__ = __webpack_require__(464);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentStep1PageModule", function() { return PaymentStep1PageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaymentStep1PageModule = (function () {
    function PaymentStep1PageModule() {
    }
    return PaymentStep1PageModule;
}());
PaymentStep1PageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__payment_step1__["a" /* PaymentStep1Page */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__payment_step1__["a" /* PaymentStep1Page */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__payment_step1__["a" /* PaymentStep1Page */]
        ]
    })
], PaymentStep1PageModule);

//# sourceMappingURL=payment-step1.module.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_country_picker_country_picker__ = __webpack_require__(283);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentStep1Page; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentStep1Page = (function () {
    function PaymentStep1Page(navCtrl, navParams, countryService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.countryService = countryService;
        this.user = {};
        this.order = {};
        this.countries = [];
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
        };
    }
    PaymentStep1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentStep1Page');
        this.initialize();
    };
    PaymentStep1Page.prototype.initialize = function () {
        this.loadCountry();
    };
    PaymentStep1Page.prototype.loadCountry = function () {
        var _this = this;
        this.countryService.getCountries().subscribe(function (countries) {
            _this.countries = countries;
            console.log(_this.countries);
        });
    };
    PaymentStep1Page.prototype.confirmOrder = function () {
        this.navCtrl.push('PaymentStep2Page');
    };
    return PaymentStep1Page;
}());
PaymentStep1Page = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-payment-step1',template:/*ion-inline-start:"/Users/umutaktas/biyone/dev/biyone.mobi/src/pages/payment-step1/payment-step1.html"*/'<!--\n  Generated template for the PaymentStep1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Step 1</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="payment">\n\n    <h5>Shipping Address</h5>\n    <div class="line-holder">\n            <img src="assets/img/icons/top-line-start.svg" width="50%">\n    </div>\n\n\n    <form name="orderShippingForm" #orderShippingForm="ngForm" autocomplete="false">\n<div class="card-input-holder">\n\n<ion-list>\n  <ion-item>\n      \n<ion-input type="text" name="first_name" placeholder="First Name" [(ngModel)]="order.shipping.first_name"></ion-input>\n\n  </ion-item>\n  <ion-item>\n      \n<ion-input type="text" name="last_name" placeholder="Last Name"  [(ngModel)]="order.shipping.last_name"></ion-input>\n\n  </ion-item>\n  <ion-item>\n      \n<ion-input type="text" name="phone" placeholder="Phone" [(ngModel)]="order.shipping.phone"></ion-input>\n\n  </ion-item>\n  <ion-item>\n      \n<ion-input type="text" name="address" placeholder="Address" [(ngModel)]="order.shipping.address_1"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n      \n<ion-input type="text" name="postcode" placeholder="Zip/Postcode" [(ngModel)]="order.shipping.postcode"></ion-input>\n\n  </ion-item>\n  <ion-item>\n      \n<ion-input type="text" name="city" placeholder="City" [(ngModel)]="order.shipping.city"></ion-input>\n\n  </ion-item>\n  <ion-item>\n      <ion-label>Country</ion-label>\n      <ion-select [(ngModel)]="order.shipping.country" name="country">\n          <ion-option [value]="country.code" *ngFor="let country of countries">{{country.name}}</ion-option>\n          </ion-select>\n\n  </ion-item>\n  \n      \n\n</ion-list>\n\n</div>\n</form>\n\n\n<div class="footer-button">\n <button ion-button block round outline color="dark" [disabled]="!orderShippingForm || !orderShippingForm.form.valid" (click)="confirmOrder()">Next</button>\n \n</div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/umutaktas/biyone/dev/biyone.mobi/src/pages/payment-step1/payment-step1.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_country_picker_country_picker__["a" /* CountryPickerProvider */]])
], PaymentStep1Page);

//# sourceMappingURL=payment-step1.js.map

/***/ })

});
//# sourceMappingURL=9.main.js.map