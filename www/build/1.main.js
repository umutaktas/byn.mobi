webpackJsonp([1],{

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wishlist__ = __webpack_require__(473);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistPageModule", function() { return WishlistPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WishlistPageModule = (function () {
    function WishlistPageModule() {
    }
    return WishlistPageModule;
}());
WishlistPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__wishlist__["a" /* WishlistPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wishlist__["a" /* WishlistPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__wishlist__["a" /* WishlistPage */]
        ]
    })
], WishlistPageModule);

//# sourceMappingURL=wishlist.module.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_constants__ = __webpack_require__(282);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistPage; });
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
 * Generated class for the WishlistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var WishlistPage = (function () {
    function WishlistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.products = [];
        this.constants = __WEBPACK_IMPORTED_MODULE_2__shared_constants__["a" /* Constants */];
        this.products = [
            {
                id: 1,
                name: "Ice Seal Humor Santiago",
                categories: [{ name: "Knitwear" }],
                price: 20,
                images: [{ src: "assets/img/products/image1.png" }]
            },
            {
                id: 2,
                name: "Grabber Grey Cardigan Button Up &rarr; Floral Sating Top and Brown Pants",
                categories: [{ name: "Knitwear" }],
                price: 22,
                images: [{ src: "assets/img/products/image2.png" }]
            },
            {
                id: 3,
                name: "Ice Seal Humor Santiago",
                categories: [{ name: "Knitwear" }],
                price: 33,
                images: [{ src: "assets/img/products/image3.png" }]
            },
            {
                id: 4,
                name: "Grabber Grey Cardigan Button Up &rarr; Floral Sating Top and Brown Pants",
                categories: [{ name: "Knitwear" }],
                price: 16,
                images: [{ src: "assets/img/products/image4.png" }]
            }
        ];
    }
    WishlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WishlistPage');
        this.editWishlist = false;
    };
    WishlistPage.prototype.makeListEditable = function () {
        this.editWishlist = true;
    };
    WishlistPage.prototype.removeSelectedItems = function () {
        this.editWishlist = false;
    };
    return WishlistPage;
}());
WishlistPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-wishlist',template:/*ion-inline-start:"/Users/umutaktas/biyone/dev/biyone.mobi/src/pages/wishlist/wishlist.html"*/'<!--\n  Generated template for the WishlistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="pinro-header">\n\n  <ion-navbar >\n      \n    <ion-title>Wishlist</ion-title>\n\n    <ion-buttons end>\n        <button ion-button clear class="text-button text-button-right" (click)="makeListEditable()" *ngIf="!editWishlist">\n            <span class="color-light-grey">EDIT</span>\n            </button>\n          <button ion-button clear class="text-button text-button-right" (click)="removeSelectedItems()" *ngIf="editWishlist">\n            <span class="color-grapefruit">DELETE</span>\n          </button>\n    </ion-buttons>\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n  <!-- product list -->\n  <div class="product-list">\n      <ul>\n        <li class="list-item" *ngFor="let item of products" (click)="navCtrl.push(\'ProductDetailsPage\', {product_id: item.id})">\n            <ion-checkbox *ngIf="editWishlist" color="danger" [(ngModel)]="item.selected"></ion-checkbox>\n          <div class="product-image" [ngStyle]="{\'background-image\': \'url(\' + item.images[0].src + \')\', \'background-size\':\'cover\'}">\n          </div>\n          <h5>{{item.name}}</h5>\n          <small class="category-name">{{item.categories[0].name}}</small>\n          <small class="price">{{item.price | currency:constants.currency}}</small>\n        </li>\n      </ul>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/umutaktas/biyone/dev/biyone.mobi/src/pages/wishlist/wishlist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], WishlistPage);

//# sourceMappingURL=wishlist.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map