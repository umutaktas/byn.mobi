webpackJsonp([3],{

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(519);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsPageModule = (function () {
    function SettingsPageModule() {
    }
    return SettingsPageModule;
}());
SettingsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]
        ]
    })
], SettingsPageModule);

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
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
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"C:\byn.mobi\src\pages\settings\settings.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Settings</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="settings">\n\n\n\n  <ion-list text-left>\n\n        <ion-item-group>\n\n          <ion-item-divider>PROFILE SETTINGS</ion-item-divider>\n\n          <ion-item (click)="navCtrl.push(\'EditProfilePage\')">\n\n              Edit Profile\n\n              <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n          </ion-item>\n\n          <ion-item (click)="navCtrl.push(\'ChangePasswordPage\')">\n\n              Change Password\n\n              <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n          </ion-item>\n\n          <ion-item>\n\n              <ion-label>Send push notifications</ion-label>\n\n              <ion-toggle checked="true" color="danger"></ion-toggle>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label>Refresh automatically</ion-label>\n\n              <ion-toggle checked="false" color="danger"></ion-toggle>\n\n            </ion-item>\n\n        </ion-item-group>\n\n\n\n\n\n        <ion-item-group>\n\n            <ion-item-divider>Support</ion-item-divider>\n\n            <ion-item >\n\n                About Pinro\n\n            </ion-item>\n\n            <ion-item >\n\n                Support\n\n            </ion-item>\n\n            <ion-item >\n\n                Find your shop\n\n            </ion-item>\n\n            <ion-item >\n\n                We’re hiring\n\n            </ion-item>\n\n\n\n        </ion-item-group>\n\n\n\n        <div class="footer-button">\n\n          <button ion-button block round color="danger">Log out</button>\n\n        </div>\n\n      </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\byn.mobi\src\pages\settings\settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=3.main.js.map