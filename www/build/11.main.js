webpackJsonp([11],{

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(511);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
        ]
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_my_firebase_my_firebase__ = __webpack_require__(308);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, myFirebase) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.myFirebase = myFirebase;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.loginfb = function () {
        this.myFirebase.facebookLogin().then(function (user) {
            console.log(user);
        });
    };
    LoginPage.prototype.skipLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\byn.mobi\src\pages\login\login.html"*/'<ion-content class="login">\n\n\n\n\n\n  <div class="header animated fadeInDown">\n\n    <img src="assets/img/biyone-logo.jpg" width="280px">\n\n\n\n  </div>\n\n\n\n\n\n  <form name="loginForm" #loginForm="ngForm" autocomplete="false">\n\n    <div class="signin-input-holder animated fadeInRight">\n\n\n\n      <ion-list>\n\n        <ion-item>\n\n         <ion-label color="biyone" floating>E-Mail</ion-label>\n\n          <ion-input name="username" minlength="6" required></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label color="biyone" floating>Şifre</ion-label>\n\n          <ion-input type="password"  name="password" minlength="6" required></ion-input>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n\n\n      <h5 class="regular-font animated fadeIn" (click)="navCtrl.push(\'ForgotPasswordPage\')">Şifremi Unuttum</h5>\n\n\n\n\n\n      <div class="footer-button animated fadeInUp">\n\n          \n\n    \n\n          <button ion-button outline block round color=biyone margin-bottom  (click)="skipLogin()">Giriş</button>\n\n\n\n         <button ion-button outline block round (click)="loginfb()"> <ion-icon name="logo-facebook">Facebok ile bağlan</ion-icon></button>\n\n\n\n        <h5 class="light-font color-black"  (click)="navCtrl.push(\'SignupPage\')">Üye Değil misiniz? <span class="semibold-font">Kayıt</span></h5>\n\n    \n\n        <p class="padding light-font color-warm-grey">Gizlilik Politikası</p>\n\n        </div>\n\n\n\n    </div>\n\n\n\n\n\n  </form>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\byn.mobi\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_my_firebase_my_firebase__["a" /* MyFirebase */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=11.main.js.map