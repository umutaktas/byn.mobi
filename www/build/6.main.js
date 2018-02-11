webpackJsonp([6],{

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_details__ = __webpack_require__(468);
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

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_constants__ = __webpack_require__(282);
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
        selector: 'page-product-details',template:/*ion-inline-start:"/Users/umutaktas/biyone/dev/biyone.mobi/src/pages/product-details/product-details.html"*/'<!--\n  Generated template for the ProductDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{product.categories[0].name}}</ion-title>\n\n    <ion-buttons end>\n        <button ion-button button-clear icon-only class=" button-cart button-clear" (click)="navCtrl.push(\'CartPage\')">\n            <i><img src="assets/img/icons/cart-icon-dark.png" width="24px"></i>\n            <div class="shopping-cart">\n            <span class="badge badge-assertive header-badge"></span>\n            </div></button>\n        </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <!-- slider -->\n    <div class="slider-holder">\n        <ion-slides pager>\n          <ion-slide *ngFor="let image of product.images">\n            <img [src]="image.src">\n          </ion-slide>\n        </ion-slides>\n      </div>\n\n      <!-- product info -->\n      <div class="animated pulse">\n          <h1 class="regular-font">{{product.name}}</h1>\n          <h5 class="color-warm-grey regular-font">{{product.categories[0].name}}</h5>\n          <h3>{{selectedProduct.price | currency:constants.currency}}</h3>\n        </div>\n\n        <div class="product-description">\n          <!-- description -->\n            <div class="section">\n              <h5>Product Description</h5>\n              <div class="color-warm-grey" [innerHTML]="product.description"></div>\n            </div>\n\n          <!-- variation selection -->\n\n      <form name="productSelectionForm" #productSelectionForm=\'ngForm\' autocomplete="false">\n          <!-- color -->\n          <div class="section" *ngIf="product.attributes.length">\n              <ul class="option-radio">\n                <li *ngFor="let attribute of product.attributes[0].options">\n                  <label>\n                              <input type="radio" name="color" [(ngModel)]="selectedProduct.color" [value]="attribute" required>\n                              <div class="with-color" [ngStyle]="{\'background\': \'\' + attribute}">\n                              </div>\n                          </label>\n                </li>\n                \n              </ul>\n          </div>\n\n          <!-- size -->\n          <div class="section" text-center *ngIf="product.attributes.length > 1">\n              <ul class="option-radio">\n                <li *ngFor="let attribute of product.attributes[1].options">\n                  <label>\n                              <input type="radio" name="size" [(ngModel)]="selectedProduct.size" [value]="attribute" required>\n                              <div class="with-text" >\n                                  <span>{{attribute}}</span>\n                                </div>\n                          </label>\n                </li>\n                \n              </ul>\n          </div>\n\n          <!--footer button-->\n		<div margin-top>\n        <button ion-button block round color="dark" (click)="addToCart(selectedProduct)" [disabled]="productSelectionForm && !productSelectionForm.form.valid">\n    {{addToCartButtonText}}\n  </button>\n        <button margin-top ion-button block round outline color="dark" (click)="addToWishList(selectedProduct)" [disabled]="productSelectionForm && !productSelectionForm.form.valid">\n    {{wishListButtonText}}\n  </button>\n      </div>\n\n\n          </form>\n\n        </div>\n</ion-content>\n'/*ion-inline-end:"/Users/umutaktas/biyone/dev/biyone.mobi/src/pages/product-details/product-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ProductDetailsPage);

//# sourceMappingURL=product-details.js.map

/***/ })

});
//# sourceMappingURL=6.main.js.map