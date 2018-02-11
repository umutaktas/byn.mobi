webpackJsonp([15],{

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coupon__ = __webpack_require__(458);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponPageModule", function() { return CouponPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CouponPageModule = (function () {
    function CouponPageModule() {
    }
    return CouponPageModule;
}());
CouponPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__coupon__["a" /* CouponPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__coupon__["a" /* CouponPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__coupon__["a" /* CouponPage */]
        ]
    })
], CouponPageModule);

//# sourceMappingURL=coupon.module.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(130);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CouponPage; });
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
 * Generated class for the CouponPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CouponPage = (function () {
    function CouponPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    CouponPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CouponPage');
        this.amount = this.navParams.get("amount");
        this.yuzde = this.navParams.get("yuzde");
        this.anapara = this.navParams.get("anapara");
        console.log(this.anapara);
        console.log(this.yuzde);
        console.log(this.amount);
    };
    CouponPage.prototype.homeNavigate = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    CouponPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Gift Card!',
            subTitle: 'Gift Card Göndereceğiniz Mail Adresinizi Giriniz',
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Email'
                },
            ],
            buttons: [
                {
                    text: 'Tamam',
                    handler: function (data) {
                        console.log('Saved clicked');
                    }
                },
                {
                    text: 'İptal',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
            ]
        });
        alert.present();
    };
    return CouponPage;
}());
CouponPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-coupon',template:/*ion-inline-start:"/Users/umutaktas/biyone/dev/biyone.mobi/src/pages/coupon/coupon.html"*/'<!--\n  Generated template for the CouponPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Tebrikler !</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n        İndirimiz: % {{yuzde}}\n   </ion-card-header>\n   <ion-card-content>\n     Harcamanız: {{anapara}} &#8378;\n       <br>\n     Kazancınız: {{ amount}} &#8378;\n      <br>\n\n     <img src="assets/img/karekod.png" >\n   </ion-card-content>\n </ion-card>\n    <div class="footer-button animated fadeInUp">\n        <button ion-button outline block round color = biyone margin-bottom  (click)="homeNavigate()">Tamam</button>\n        <button ion-button outline block round color = biyone margin-bottom  (click)="showAlert()">Gift Card Olarak Gönder</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/umutaktas/biyone/dev/biyone.mobi/src/pages/coupon/coupon.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* AlertController */]])
], CouponPage);

//# sourceMappingURL=coupon.js.map

/***/ })

});
//# sourceMappingURL=15.main.js.map