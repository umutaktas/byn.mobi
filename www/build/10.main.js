webpackJsonp([10],{

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__onboarding__ = __webpack_require__(463);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingPageModule", function() { return OnboardingPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OnboardingPageModule = (function () {
    function OnboardingPageModule() {
    }
    return OnboardingPageModule;
}());
OnboardingPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__onboarding__["a" /* OnboardingPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__onboarding__["a" /* OnboardingPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__onboarding__["a" /* OnboardingPage */]
        ]
    })
], OnboardingPageModule);

//# sourceMappingURL=onboarding.module.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(130);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnboardingPage; });
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
 * Generated class for the OnboardingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var OnboardingPage = (function () {
    function OnboardingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OnboardingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OnboardingPage');
    };
    OnboardingPage.prototype.goToHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return OnboardingPage;
}());
OnboardingPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-onboarding',template:/*ion-inline-start:"/Users/umutaktas/biyone/dev/biyone.mobi/src/pages/onboarding/onboarding.html"*/'<!--\n  Generated template for the OnboardingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>onboarding</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content class="onboarding">\n\n  <!-- slider -->\n<div class="image-slider-holder">\n        <div class="animate"> <img src="assets/img/banner3x.jpg"></div>\n</div>\n\n\n<!-- bottom -->\n<div class="bottom">\n    <img class="animated fadeIn" src="assets/img/biyone-logo.jpg" width="100px">\n\n    <ion-slides slider="slider" pager>\n        <ion-slide>\n            <h5>Zamansız İndirim.</h5>\n        </ion-slide>\n        <ion-slide>\n            <h5>İndirimi zamanı beklemek artık sona erdi. Biyone ile istediğin zaman indirim...</h5>\n        </ion-slide>\n        <ion-slide>\n            <h5>Haydi Biyone dünyasıne sende katıl.</h5>\n        </ion-slide>\n        \n    </ion-slides>\n</div>\n  \n<button ion-button round clear icon-only color="light"  class="button-icon skip-button animated fadeInRight" (click)="navCtrl.setRoot(\'LoginPage\')" ><img src="assets/img/icons/icon_arrow.svg"></button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/umutaktas/biyone/dev/biyone.mobi/src/pages/onboarding/onboarding.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], OnboardingPage);

//# sourceMappingURL=onboarding.js.map

/***/ })

});
//# sourceMappingURL=10.main.js.map