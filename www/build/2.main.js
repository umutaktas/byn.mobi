webpackJsonp([2],{

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(520);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = (function () {
    function SignupPageModule() {
    }
    return SignupPageModule;
}());
SignupPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]
        ]
    })
], SignupPageModule);

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(144);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
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
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.signUp = function () {
        this.skipLogin();
    };
    SignupPage.prototype.skipLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return SignupPage;
}());
SignupPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"C:\byn.mobi\src\pages\signup\signup.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Signup</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="login">\n\n\n\n    <form name="signUpForm" #signUpForm="ngForm" autocomplete="false">\n\n        <div class="signin-input-holder animated fadeInRight">\n\n    \n\n          <ion-list>\n\n              <ion-item>\n\n                  <i item-start><img src="assets/img/icons/icon_email.svg"></i>\n\n                  <ion-input type="text" [(ngModel)]="user.email" name="email"  email placeholder="Email" required></ion-input>\n\n                </ion-item>\n\n            \n\n            <ion-item>\n\n                <i item-start><img src="assets/img/icons/icon_lock.svg"></i>\n\n                <ion-input type="password" [(ngModel)]="user.password" name="password" minlength="6" placeholder="Password (min 6 char)" required></ion-input>\n\n      \n\n              </ion-item>\n\n            <ion-item [ngClass]="{\'has-errors\': !reentry.pristine && user.password && user.password != user.reentry}">\n\n              <i item-start><img src="assets/img/icons/icon_lock.svg"></i>\n\n              <ion-input type="password" [(ngModel)]="user.reentry" name="reentry" placeholder="Re-enter password" #reentry=\'ngModel\' required></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <i item-start><img src="assets/img/icons/icon_user.svg"></i>\n\n                <ion-input type="text" [(ngModel)]="user.username" name="username" minlength="6" placeholder="username" required></ion-input>\n\n              </ion-item>\n\n    \n\n          </ion-list>\n\n    \n\n          \n\n          <div class="footer-button animated fadeInUp">\n\n              \n\n        \n\n              <button ion-button outline block round color="dark" margin-bottom [disabled]="!signUpForm || !signUpForm.form.valid || (user.password != user.reentry)" (click)="signUp()">Signup</button>\n\n              <a ion-button clear block color="light-grey" (click)="skipLogin()">Skip for now</a>\n\n             \n\n            <h5 class="light-font color-black"  (click)="navCtrl.pop()">Have an account already? <span class="semibold-font">Signin</span></h5>\n\n        \n\n            <p class="padding light-font color-warm-grey">Terms &amp; Conditions</p>\n\n            </div>\n\n    \n\n        </div>\n\n    \n\n    \n\n      </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\byn.mobi\src\pages\signup\signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map