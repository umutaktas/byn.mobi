webpackJsonp([8],{

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_step2__ = __webpack_require__(465);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentStep2PageModule", function() { return PaymentStep2PageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaymentStep2PageModule = (function () {
    function PaymentStep2PageModule() {
    }
    return PaymentStep2PageModule;
}());
PaymentStep2PageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__payment_step2__["a" /* PaymentStep2Page */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__payment_step2__["a" /* PaymentStep2Page */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__payment_step2__["a" /* PaymentStep2Page */]
        ]
    })
], PaymentStep2PageModule);

//# sourceMappingURL=payment-step2.module.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentStep2Page; });
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
 * Generated class for the PaymentStep2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PaymentStep2Page = (function () {
    function PaymentStep2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.payment_method_selected = 'card';
        this.card = {};
    }
    PaymentStep2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentStep2Page');
    };
    PaymentStep2Page.prototype.scanCard = function () {
        console.log("Scan clicked");
    };
    PaymentStep2Page.prototype.payCashOnDelivery = function () {
        this.confirmOrder();
    };
    PaymentStep2Page.prototype.makeStripePayment = function () {
        this.confirmOrder();
    };
    PaymentStep2Page.prototype.payWithPaypal = function () {
        this.confirmOrder();
    };
    PaymentStep2Page.prototype.confirmOrder = function () {
        this.navCtrl.push('PaymentStep3Page');
    };
    return PaymentStep2Page;
}());
PaymentStep2Page = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-payment-step2',template:/*ion-inline-start:"/Users/umutaktas/biyone/dev/biyone.mobi/src/pages/payment-step2/payment-step2.html"*/'<!--\n  Generated template for the PaymentStep2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Step 2</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="payment">\n\n  <h5>Payment</h5>\n\n  <div class="line-holder">\n    <img src="assets/img/icons/top-line-middle.svg" width="100%">\n  </div>\n\n  <ion-buttons>\n    <a ion-button small [color]="payment_method_selected == \'card\' ? \'dark\' : \'light-grey\'" (click)="payment_method_selected = \'card\'">Pay by card</a>\n    <a ion-button small [color]="payment_method_selected == \'paypal\' ? \'dark\' : \'light-grey\'" (click)="payment_method_selected = \'paypal\'">Paypal</a>\n    <a ion-button small [color]="payment_method_selected == \'cash\' ? \'dark\' : \'light-grey\'" (click)="payment_method_selected = \'cash\'">Cash on delivery</a>\n  </ion-buttons>\n\n\n  <!-- PAYPAL PAYMENT -->\n  <div padding *ngIf="payment_method_selected == \'paypal\'">\n    <div class="footer-button">\n      <button ion-button clear (click)="payWithPaypal()"><img src="assets/img/paypal-checkout.png" width="100%"></button>\n    </div>\n  </div>\n\n  <!-- CASH PAYMENT -->\n  <div padding *ngIf="payment_method_selected == \'cash\'">\n    <h5 class="">You have selected to pay<br></h5>\n    <h2>Cash on delivery</h2>\n    <div class="footer-button">\n      <button ion-button block round outline color="dark" (click)="payCashOnDelivery()">Confirm Order</button>\n    </div>\n  </div>\n\n\n  <!-- CARD PAYMENT -->\n\n  <div *ngIf="payment_method_selected == \'card\'">\n    <!-- <div class="line-holder">\n      <button ion-button round outline small color="dark" (click)="scanCard()">Scan card</button>\n    </div> -->\n\n    <div class="card-input-holder">\n\n      <ion-list>\n        <ion-item>\n\n          <ion-input type="text" name="cardholder" placeholder="Cardholder Name" [(ngModel)]="card.name"></ion-input>\n\n        </ion-item>\n        <ion-item>\n\n          <ion-input type="text" name="card_number" placeholder="Card Number" [(ngModel)]="card.number" name="cardNumber"></ion-input>\n\n        </ion-item>\n\n        <ion-item class="item-input">\n\n          <ion-input type="text" name="exp_month" placeholder="MM" [(ngModel)]="card.exp_month"></ion-input>\n\n\n        </ion-item>\n        <ion-item class="item-input">\n\n          <ion-input type="text" name="exp_year" [(ngModel)]="card.exp_year" placeholder="YY"></ion-input>\n\n        </ion-item>\n        <ion-item class="item-input">\n\n          <ion-input type="text" name="cvc" placeholder="CVC" [(ngModel)]="card.cvc"></ion-input>\n\n        </ion-item>\n      </ion-list>\n\n    </div>\n\n    <div class="footer-button">\n      <button ion-button block round outline color="dark" (click)="makeStripePayment(card)">Confirm Order</button>\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/umutaktas/biyone/dev/biyone.mobi/src/pages/payment-step2/payment-step2.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], PaymentStep2Page);

//# sourceMappingURL=payment-step2.js.map

/***/ })

});
//# sourceMappingURL=8.main.js.map