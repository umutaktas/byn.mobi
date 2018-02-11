webpackJsonp([0],{

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_by_category__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_order_by_order_by__ = __webpack_require__(474);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductByCategoryPageModule", function() { return ProductByCategoryPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProductByCategoryPageModule = (function () {
    function ProductByCategoryPageModule() {
    }
    return ProductByCategoryPageModule;
}());
ProductByCategoryPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__product_by_category__["a" /* ProductByCategoryPage */],
            __WEBPACK_IMPORTED_MODULE_3__pipes_order_by_order_by__["a" /* OrderByPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product_by_category__["a" /* ProductByCategoryPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__product_by_category__["a" /* ProductByCategoryPage */]
        ]
    })
], ProductByCategoryPageModule);

//# sourceMappingURL=product-by-category.module.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_constants__ = __webpack_require__(282);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductByCategoryPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductByCategoryPage = (function () {
    function ProductByCategoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.products = [];
        this.layout = 'grid'; // to manipulate grid/list view 
        this.order = 'name'; // to manipulate list order
        this.isDesc = false;
        this.constants = __WEBPACK_IMPORTED_MODULE_2__shared_constants__["a" /* Constants */];
        this.products = [
            {
                name: "Ice Seal Humor Santiago",
                categories: [{ name: "Knitwear" }],
                price: 20,
                images: [{ src: "assets/img/products/image1.png" }]
            },
            {
                name: "Grabber Grey Cardigan Button Up &rarr; Floral Sating Top and Brown Pants",
                categories: [{ name: "Knitwear" }],
                price: 22,
                images: [{ src: "assets/img/products/image2.png" }]
            },
            {
                name: "Ice Seal Humor Santiago",
                categories: [{ name: "Knitwear" }],
                price: 33,
                images: [{ src: "assets/img/products/image3.png" }]
            },
            {
                name: "Grabber Grey Cardigan Button Up &rarr; Floral Sating Top and Brown Pants",
                categories: [{ name: "Knitwear" }],
                price: 16,
                images: [{ src: "assets/img/products/image4.png" }]
            }
        ];
    }
    ProductByCategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductByCategoryPage');
    };
    ProductByCategoryPage.prototype.sort = function (property) {
        this.isDesc = !this.isDesc; //change the direction    
        this.order = property;
        this.direction = this.isDesc ? 1 : -1;
    };
    ProductByCategoryPage.prototype.scrollToTop = function () {
        console.log("Scroll to top");
    };
    return ProductByCategoryPage;
}());
ProductByCategoryPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-product-by-category',template:/*ion-inline-start:"/Users/umutaktas/biyone/dev/biyone.mobi/src/pages/product-by-category/product-by-category.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle color="dark">\n      <ion-icon name="md-menu"></ion-icon>\n    </button>\n    <ion-title>Knitwear</ion-title>\n    <ion-buttons end>\n        <button ion-button clear icon-only class="button button-cart"  (click)="navCtrl.push(\'CartPage\')">\n            <i><img src="assets/img/icons/cart-icon-dark.png" width="24px"></i>\n            <div class="shopping-cart">\n            <span class="badge badge-assertive header-badge"></span>\n            </div></button>\n        </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <ion-toolbar>\n  <ion-buttons>\n      <button ion-button (click)="sort(\'name\'); scrollToTop()" [color]=" order==\'name\' ? \'dark\' : \'warm-grey\'">name</button>\n      <button ion-button (click)="sort(\'price\'); scrollToTop()" [color]=" order==\'price\' ? \'dark\' : \'warm-grey\'">price</button>\n      <button ion-button icon-only (click)="layout = \'list\'; scrollToTop()" [color]="layout==\'list\' ? \'grapefruit\' : \'warm-grey\'"><ion-icon name="ios-list-box-outline"></ion-icon></button>\n      <button ion-button icon-only (click)="layout = \'grid\'; scrollToTop()" [color]="layout==\'grid\' ? \'grapefruit\' : \'warm-grey\'"><ion-icon name="ios-apps-outline"></ion-icon></button>\n  </ion-buttons>\n  </ion-toolbar>\n  \n\n        <!-- product list -->\n        <div class="product-list animated fadeInUp" [ngClass]="{\'list-view\': layout && layout==\'list\'}" >\n          <ul>\n            <li class="list-item" *ngFor="let item of products | orderBy: {property: order, direction: direction}" (click)="navCtrl.push(\'ProductDetailsPage\', {product_id: item.id})">\n              <div class="product-image" [ngStyle]="{\'background-image\': \'url(\' + item.images[0].src + \')\', \'background-size\':\'cover\'}">\n              </div>\n              <h5>{{item.name}}</h5>\n              <small class="category-name">{{item.categories[0].name}}</small>\n              <small class="price">{{item.price | currency:constants.currency}}</small>\n            </li>\n          </ul>\n        </div>\n\n\n  \n</ion-content>\n'/*ion-inline-end:"/Users/umutaktas/biyone/dev/biyone.mobi/src/pages/product-by-category/product-by-category.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ProductByCategoryPage);

//# sourceMappingURL=product-by-category.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the OrderByPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
var OrderByPipe = (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (records, args) {
        return records.sort(function (a, b) {
            if (a[args.property] < b[args.property]) {
                return -1 * args.direction;
            }
            else if (a[args.property] > b[args.property]) {
                return 1 * args.direction;
            }
            else {
                return 0;
            }
        });
    };
    ;
    return OrderByPipe;
}());
OrderByPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'orderBy',
    })
], OrderByPipe);

//# sourceMappingURL=order-by.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map