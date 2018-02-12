webpackJsonp([14],{

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coupons__ = __webpack_require__(508);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponsPageModule", function() { return CouponsPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CouponsPageModule = (function () {
    function CouponsPageModule() {
    }
    return CouponsPageModule;
}());
CouponsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__coupons__["a" /* CouponsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__coupons__["a" /* CouponsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__coupons__["a" /* CouponsPage */]
        ]
    })
], CouponsPageModule);

//# sourceMappingURL=coupons.module.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CouponsPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CouponsPage = (function () {
    function CouponsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CouponsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CouponsPage');
    };
    return CouponsPage;
}());
CouponsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-coupons',template:/*ion-inline-start:"C:\byn.mobi\src\pages\coupons\coupons.html"*/'<!--\n\n  Generated template for the CouponsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Kuponlar</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list no-border>\n\n\n\n    <ion-list-header>\n\n      Aktif Kuponlar\n\n    </ion-list-header>\n\n\n\n    <ion-item>\n\n      <ion-icon name=\'ios-checkmark-circle-outline\' color="biyone" item-start></ion-icon>\n\n      Koton\n\n      <ion-note item-end>Son Gün: 25.10.2017</ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name=\'ios-checkmark-circle-outline\'  color="biyone" item-start></ion-icon>\n\n      LCW\n\n      <ion-note item-end>Son Gün: 24.10.2017</ion-note>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  <ion-list>\n\n\n\n    <ion-list-header>\n\n      Kullanılmış Kuponlar\n\n    </ion-list-header>\n\n\n\n    <ion-item>\n\n      <ion-icon name=\'md-checkmark-circle\'  color="biyone" item-start></ion-icon>\n\n      LCW\n\n      <ion-note item-end>Kulanılmış: 25.08.2017</ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name=\'md-checkmark-circle\'  color="biyone" item-start></ion-icon>\n\n      LCW\n\n      <ion-note item-end>Kulanılmış: 12.07.2017</ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name=\'md-checkmark-circle\'  color="biyone" item-start></ion-icon>\n\n      Adil IŞIK\n\n      <ion-note item-end>Kulanılmış: 07.06.2017</ion-note>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\byn.mobi\src\pages\coupons\coupons.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], CouponsPage);

//# sourceMappingURL=coupons.js.map

/***/ })

});
//# sourceMappingURL=14.main.js.map