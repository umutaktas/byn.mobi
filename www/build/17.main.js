webpackJsonp([17],{

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart__ = __webpack_require__(505);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CartPageModule = (function () {
    function CartPageModule() {
    }
    return CartPageModule;
}());
CartPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]
        ]
    })
], CartPageModule);

//# sourceMappingURL=cart.module.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_constants__ = __webpack_require__(306);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartPage = (function () {
    function CartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.constants = __WEBPACK_IMPORTED_MODULE_2__shared_constants__["a" /* Constants */];
        this.products = [
            {
                name: "Ice Seal Humor Santiago",
                categories: [{ name: "Knitwear" }],
                price: 20,
                quantity: 1,
                imgUrl: "assets/img/products/image1.png"
            },
            {
                name: "Grabber Grey Cardigan Button Up &rarr; Floral Sating Top and Brown Pants",
                categories: [{ name: "Knitwear" }],
                price: 22,
                quantity: 1,
                imgUrl: "assets/img/products/image2.png"
            },
            {
                name: "Ice Seal Humor Santiago",
                categories: [{ name: "Knitwear" }],
                price: 33,
                quantity: 1,
                imgUrl: "assets/img/products/image3.png"
            },
            {
                name: "Grabber Grey Cardigan Button Up &rarr; Floral Sating Top and Brown Pants",
                categories: [{ name: "Knitwear" }],
                price: 16,
                quantity: 1,
                imgUrl: "assets/img/products/image4.png"
            }
        ];
    }
    CartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CartPage');
    };
    CartPage.prototype.removeItem = function (item) {
        console.log(item);
        this.products.splice(this.products.indexOf(item), 1);
    };
    CartPage.prototype.getSubtotal = function () {
        var total = total || 0;
        this.products.forEach(function (item) {
            total += parseInt(item.price) * item.quantity;
        });
        return total;
    };
    CartPage.prototype.goToCheckout = function () {
        console.log("checkout");
        this.navCtrl.push('PaymentStep1Page');
    };
    return CartPage;
}());
CartPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-cart',template:/*ion-inline-start:"C:\byn.mobi\src\pages\cart\cart.html"*/'<!--\n\n  Generated template for the CartPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Cart</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n    <div class="cart-list">\n\n        \n\n              <ion-list *ngIf="products.length">\n\n    <ion-item *ngFor="let item of products" class="item-icon-right">\n\n        <ion-thumbnail item-start>\n\n              <img [src]="item.imgUrl">\n\n              </ion-thumbnail>\n\n\n\n               <h5>{{item.name}}</h5>\n\n                              <small class="category-name">{{item.category}}</small>\n\n                              <small class="size"> <span *ngIf="item.size">Size: {{item.size | uppercase}}</span><span *ngIf="item.color">, Color: {{item.color | uppercase}}</span></small>\n\n                              <small class="">Est. Delivery 5-6 days</small>\n\n                              <h3 class="price">{{item.price * item.quantity | currency:constants.currency}} </h3>\n\n             \n\n                              <button ion-button clear item-end  (click)="removeItem(item)"><ion-icon name="md-close" class="color-light-grey"></ion-icon></button>\n\n  \n\n  \n\n              <div class="quantity-items"> \n\n                    <div (click)="item.quantity = item.quantity - 1" [ngClass]="{\'disable-pointer-events\': item.quantity == 1}"><ion-icon name="md-remove"></ion-icon></div>\n\n                    <div ><span class="checkout-product-price ng-binding">{{item.quantity}}</span></div>\n\n                    <div  (click)="item.quantity = item.quantity + 1" [ngClass]="{\'disable-pointer-events\': item.quantity == 10}"><ion-icon name="md-add"></ion-icon></div>\n\n            </div>\n\n    </ion-item>\n\n              </ion-list>\n\n      </div>\n\n  \n\n          <div class="price-overview animated fadeInUpBig">\n\n              <div class="row">\n\n                  <div class="col">\n\n                      Subtotal:\n\n                  </div>\n\n                  <div class="col">\n\n                      {{getSubtotal() | currency:constants.currency}}\n\n                  </div>\n\n              </div>\n\n              <!--<div class="row">\n\n                  <div class="col">\n\n                      Estimated Tax:\n\n                  </div>\n\n                  <div class="col">\n\n                      {{calculateTax(20)}} GBP\n\n                  </div>\n\n              </div>-->\n\n              <div class="row">\n\n                  <div class="col">\n\n                      Shipping & Returns:\n\n                  </div>\n\n                  <div class="col color-grapefruit">\n\n                      FREE\n\n                  </div>\n\n              </div>\n\n              <div class="row total">\n\n                  <div class="col">\n\n                      Total\n\n                  </div>\n\n                  <div class="col">\n\n                      {{getSubtotal() | currency:constants.currency}} \n\n                  </div>\n\n              </div>\n\n          </div>\n\n              <div class="footer-button  animated fadeInUpBig" padding>\n\n               <button ion-button outline block round color="dark" [disabled]="!products.length" (click)="goToCheckout()">Checkout</button>\n\n              </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\byn.mobi\src\pages\cart\cart.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], CartPage);

//# sourceMappingURL=cart.js.map

/***/ })

});
//# sourceMappingURL=17.main.js.map