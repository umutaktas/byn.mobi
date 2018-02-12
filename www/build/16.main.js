webpackJsonp([16],{

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__change_password__ = __webpack_require__(505);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChangePasswordPageModule = (function () {
    function ChangePasswordPageModule() {
    }
    return ChangePasswordPageModule;
}());
ChangePasswordPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__change_password__["a" /* ChangePasswordPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__change_password__["a" /* ChangePasswordPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__change_password__["a" /* ChangePasswordPage */]
        ]
    })
], ChangePasswordPageModule);

//# sourceMappingURL=change-password.module.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
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
 * Generated class for the ChangePasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ChangePasswordPage = (function () {
    function ChangePasswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
    }
    ChangePasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangePasswordPage');
    };
    ChangePasswordPage.prototype.saveChanges = function (user) {
        console.log(user);
        this.navCtrl.pop();
    };
    return ChangePasswordPage;
}());
ChangePasswordPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-change-password',template:/*ion-inline-start:"C:\byn.mobi\src\pages\change-password\change-password.html"*/'<!--\n\n  Generated template for the ChangePasswordPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Settings</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="settings">\n\n    <ion-list text-left>\n\n        <form name="changePasswordForm" #changePasswordForm=\'ngForm\' autocomplete="false">\n\n        <ion-item-group>\n\n          <ion-item-divider>Change password</ion-item-divider>\n\n          <ion-item>\n\n              <ion-label >New</ion-label>\n\n              <ion-input type="password" [(ngModel)]="user.password" name="password" minlength="8" placeholder="Min 8 char" required></ion-input>\n\n          </ion-item>\n\n          <ion-item [ngClass]="{\'has-errors\': !reentry.pristine && user.password && user.password != user.reentry}">\n\n              <ion-label >Retype</ion-label>\n\n              <ion-input type="password" [(ngModel)]="user.reentry" name="reentry" placeholder="Re-enter" #reentry=\'ngModel\' required></ion-input>\n\n          </ion-item>\n\n          </ion-item-group>\n\n          <div class="footer-button">\n\n            <button ion-button outline round block color="dark" [disabled]="!changePasswordForm || !changePasswordForm.form.valid || (user.password != user.reentry)" (click)="saveChanges(user)">Save Changes</button>\n\n          </div>\n\n          </form>\n\n    </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\byn.mobi\src\pages\change-password\change-password.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ChangePasswordPage);

//# sourceMappingURL=change-password.js.map

/***/ })

});
//# sourceMappingURL=16.main.js.map