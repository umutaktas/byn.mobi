webpackJsonp([6],{

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_details__ = __webpack_require__(517);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPageModule", function() { return ProductDetailsPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductDetailsPageModule = (function () {
    function ProductDetailsPageModule() {
    }
    return ProductDetailsPageModule;
}());
ProductDetailsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__product_details__["a" /* ProductDetailsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product_details__["a" /* ProductDetailsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__product_details__["a" /* ProductDetailsPage */]
        ]
    })
], ProductDetailsPageModule);

//# sourceMappingURL=product-details.module.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_constants__ = __webpack_require__(306);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailsPage; });
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
 * Generated class for the ProductDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProductDetailsPage = (function () {
    function ProductDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.product = {};
        this.productImages = [];
        this.selectedProduct = {};
        this.constants = __WEBPACK_IMPORTED_MODULE_2__shared_constants__["a" /* Constants */];
        this.wishListButtonText = this.constants.wishListButtonText;
        this.addToCartButtonText = this.constants.addToCartButtonText;
        this.initiate();
    }
    ProductDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductDetailsPage');
    };
    ProductDetailsPage.prototype.initiate = function () {
        this.product = { id: 84,
            name: "Grabber Grey Cardigan Button Up",
            categories: [{ name: "Editorial" }],
            price: 16,
            images: [{ src: "assets/img/products/image4.png" }, { src: "assets/img/products/image1.png" }, { src: "assets/img/products/image2.png" }],
            description: "<p>Meggings next level yr, 90's small batch four loko brunch wes anderson fixie american apparel flexitarian pitchfork neutra.</p><p>Constructed in cotton sweat fabric, this lovely piece, lacus eu mattis auctor, dolor lectus venenatis nulla, at tristique eros sem vel ante. Sed leo enim, iaculis ornare tristique non, vulputate sit amet ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean fringilla laoreet mauris lectus pellentesque eu.</p>",
            attributes: [
                {
                    id: 1,
                    name: "color",
                    options: ["black", "orange", "red"],
                    position: 0,
                    variation: true,
                    visible: true
                },
                {
                    id: 2,
                    name: "size",
                    options: ["s", "l", "xl"],
                    position: 0,
                    variation: true,
                    visible: true
                }
            ]
        };
        this.selectedProduct = {
            name: this.product.name,
            id: this.product.id,
            price: this.product.price,
            imgUrl: this.product.images[0].src,
            quantity: 1
        };
    };
    ProductDetailsPage.prototype.addToCart = function () {
        console.log();
        this.addToCartButtonText = this.constants.addToCartSuccessButtonText;
    };
    ProductDetailsPage.prototype.addToWishList = function () {
        this.wishListButtonText = this.constants.wishListAddSuccessButtonText;
    };
    return ProductDetailsPage;
}());
ProductDetailsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-product-details',template:/*ion-inline-start:"C:\byn.mobi\src\pages\product-details\product-details.html"*/'<!--\n\n  Generated template for the ProductDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{product.categories[0].name}}</ion-title>\n\n\n\n    <ion-buttons end>\n\n        <button ion-button button-clear icon-only class=" button-cart button-clear" (click)="navCtrl.push(\'CartPage\')">\n\n            <i><img src="assets/img/icons/cart-icon-dark.png" width="24px"></i>\n\n            <div class="shopping-cart">\n\n            <span class="badge badge-assertive header-badge"></span>\n\n            </div></button>\n\n        </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <!-- slider -->\n\n    <div class="slider-holder">\n\n        <ion-slides pager>\n\n          <ion-slide *ngFor="let image of product.images">\n\n            <img [src]="image.src">\n\n          </ion-slide>\n\n        </ion-slides>\n\n      </div>\n\n\n\n      <!-- product info -->\n\n      <div class="animated pulse">\n\n          <h1 class="regular-font">{{product.name}}</h1>\n\n          <h5 class="color-warm-grey regular-font">{{product.categories[0].name}}</h5>\n\n          <h3>{{selectedProduct.price | currency:constants.currency}}</h3>\n\n        </div>\n\n\n\n        <div class="product-description">\n\n          <!-- description -->\n\n            <div class="section">\n\n              <h5>Product Description</h5>\n\n              <div class="color-warm-grey" [innerHTML]="product.description"></div>\n\n            </div>\n\n\n\n          <!-- variation selection -->\n\n\n\n      <form name="productSelectionForm" #productSelectionForm=\'ngForm\' autocomplete="false">\n\n          <!-- color -->\n\n          <div class="section" *ngIf="product.attributes.length">\n\n              <ul class="option-radio">\n\n                <li *ngFor="let attribute of product.attributes[0].options">\n\n                  <label>\n\n                              <input type="radio" name="color" [(ngModel)]="selectedProduct.color" [value]="attribute" required>\n\n                              <div class="with-color" [ngStyle]="{\'background\': \'\' + attribute}">\n\n                              </div>\n\n                          </label>\n\n                </li>\n\n                \n\n              </ul>\n\n          </div>\n\n\n\n          <!-- size -->\n\n          <div class="section" text-center *ngIf="product.attributes.length > 1">\n\n              <ul class="option-radio">\n\n                <li *ngFor="let attribute of product.attributes[1].options">\n\n                  <label>\n\n                              <input type="radio" name="size" [(ngModel)]="selectedProduct.size" [value]="attribute" required>\n\n                              <div class="with-text" >\n\n                                  <span>{{attribute}}</span>\n\n                                </div>\n\n                          </label>\n\n                </li>\n\n                \n\n              </ul>\n\n          </div>\n\n\n\n          <!--footer button-->\n\n		<div margin-top>\n\n        <button ion-button block round color="dark" (click)="addToCart(selectedProduct)" [disabled]="productSelectionForm && !productSelectionForm.form.valid">\n\n    {{addToCartButtonText}}\n\n  </button>\n\n        <button margin-top ion-button block round outline color="dark" (click)="addToWishList(selectedProduct)" [disabled]="productSelectionForm && !productSelectionForm.form.valid">\n\n    {{wishListButtonText}}\n\n  </button>\n\n      </div>\n\n\n\n\n\n          </form>\n\n\n\n        </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\byn.mobi\src\pages\product-details\product-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ProductDetailsPage);

//# sourceMappingURL=product-details.js.map

/***/ })

});
//# sourceMappingURL=6.main.js.map