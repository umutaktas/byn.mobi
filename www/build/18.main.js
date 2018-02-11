webpackJsonp([18],{

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__campaing_details__ = __webpack_require__(455);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaingDetailsPageModule", function() { return CampaingDetailsPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CampaingDetailsPageModule = (function () {
    function CampaingDetailsPageModule() {
    }
    return CampaingDetailsPageModule;
}());
CampaingDetailsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__campaing_details__["a" /* CampaingDetailsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__campaing_details__["a" /* CampaingDetailsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__campaing_details__["a" /* CampaingDetailsPage */]
        ]
    })
], CampaingDetailsPageModule);

//# sourceMappingURL=campaing-details.module.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CampaingDetailsPage; });
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
 * Generated class for the CampaingDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CampaingDetailsPage = (function () {
    function CampaingDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CampaingDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CampaingDetailsPage');
    };
    return CampaingDetailsPage;
}());
CampaingDetailsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-campaing-details',template:/*ion-inline-start:"/Users/umutaktas/biyone/dev/biyone.mobi/src/pages/campaing-details/campaing-details.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Detaylar</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <ion-label>\n      <h2>\n      Ne Kadar Harcayacaksın?\n    </h2>\n    </ion-label>\n\n    <ion-range min="300" max="2000" step="300" snaps="false" color="biyone" pin="true" [(ngModel)]="singleValue4">\n      <ion-label range-left><h4>300&#8378;</h4></ion-label>\n      <ion-label range-right><h4>2.000&#8378;</h4></ion-label>\n\n    </ion-range>\n    <p></p>\n   <ion-card>\n    <ion-card-header>\n       <span *ngIf="singleValue4>0">\n            % {{singleValue4 / 75}}\n       </span>\n        <span *ngIf="singleValue4==null">\n            % {{300/75}}\n       </span>\n    </ion-card-header>\n       <ion-card-content>\n           <p></p>\n          <span *ngIf="singleValue4==null">\n                Kazancınız: {{ 300 * (300/75)/100}} &#8378;\n          </span>\n           <span *ngIf="singleValue4!=null">\n                    Kazancınız: {{singleValue4 * (singleValue4 / 75)/100 }} &#8378;\n           </span>\n           <p> </p>\n           <p> </p>\n       </ion-card-content>\n   </ion-card>\n    <div class="footer-button animated fadeInUp">\n        <button ion-button outline block round color=biyone margin-bottom  (click)="navCtrl.push(\'CouponPage\',{amount: singleValue4 * (singleValue4 / 75)/100 ,yuzde: singleValue4 / 75,anapara: singleValue4})">Biyone\'le</button>\n    </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/umutaktas/biyone/dev/biyone.mobi/src/pages/campaing-details/campaing-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], CampaingDetailsPage);

//# sourceMappingURL=campaing-details.js.map

/***/ })

});
//# sourceMappingURL=18.main.js.map