webpackJsonp([5],{

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(517);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = (function () {
    function ProfilePageModule() {
    }
    return ProfilePageModule;
}());
ProfilePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]
        ]
    })
], ProfilePageModule);

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__ = __webpack_require__(308);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
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
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, userP) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userP = userP;
        this.user = {};
        this.offerPosts = [];
        this.orderList = [];
        this.user.full_name = this.userP.userData.userDisplayName;
        this.user.username = this.userP.userData.first_name;
        this.user.gravatar = this.userP.userData.picture;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
        this.initiateProfilePage();
    };
    ProfilePage.prototype.initiateProfilePage = function () {
        this.show = 'orders';
        this.orderList = [
            {
                number: 46121,
                status: "pending",
                total: 22.00,
                currency: "GBP",
                line_items: [{
                        name: "Ice Seal Humor Santiago Chinos",
                        price: "22.00",
                        quantity: 1,
                        total: "22.00",
                        meta: [{ label: "color", value: "red" }, { label: "size", value: 'xl' }]
                    }]
            },
            {
                number: 46121,
                status: "completed",
                transaction_id: "adsdfasfg",
                total: 22.00,
                currency: "GBP",
                line_items: [{
                        name: "Ice Seal Humor Santiago Chinos",
                        price: "22.00",
                        quantity: 1,
                        total: "22.00",
                        meta: [{ label: "color", value: "red" }, { label: "size", value: 'xl' }]
                    },]
            }
        ];
        this.offerPosts = [
            { thumbnail: "assets/img/Offer2.png" }, { thumbnail: "assets/img/Offer3.png" }, { thumbnail: "assets/img/Offer1.png" }
        ];
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"C:\byn.mobi\src\pages\profile\profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header class="no-shadow">\n\n\n\n  <ion-navbar>\n\n    <ion-title>Profil</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="profile">\n\n\n\n  <!-- profile -->\n\n  <div class="cover-photo-holder">\n\n\n\n    <ion-card *ngIf="userP.userData">\n\n      <ion-card-header>{{ userP.userData.username }}</ion-card-header>\n\n      <img [src]="userP.userData.picture" />\n\n      <ion-card-content>\n\n        <p>Email: {{ userP.userData.email }}</p>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n  </div>\n\n\n\n\n\n  <!-- tab  -->\n\n  <div class="row tab">\n\n    <div class="col" (click)="show = \'orders\'" [ngClass]="{\'color-warm-grey\': show==\'orders\'}">\n\n      <h5 [ngClass]="{\'color-light-grey\': show==\'offers\'}">{{user.orders_count || 0}}</h5>\n\n      orders\n\n    </div>\n\n    <div class="col" (click)="show = \'offers\'" [ngClass]="{\'color-warm-grey\': show==\'offers\'}">\n\n      <h5 [ngClass]="{\'color-light-grey\': show==\'orders\'}">{{offerPosts.length || 0}}</h5>\n\n      offers\n\n    </div>\n\n  </div>\n\n\n\n\n\n  <!-- offers -->\n\n  <div class="offer-list" *ngIf="show == \'offers\'">\n\n\n\n    <img [src]="offer.thumbnail" *ngFor="let offer of offerPosts" width="100%">\n\n  </div>\n\n\n\n\n\n  <!-- orders -->\n\n\n\n  <div class="order-list" *ngIf="show == \'orders\'">\n\n\n\n    <div *ngIf="orderList && orderList.length" padding>\n\n\n\n      \n\n\n\n      <div class="card" *ngFor="let order of orderList">\n\n        <div class="item item-divider" padding>\n\n          <div class="row">\n\n            <div class="col col-67">\n\n              <div>ORDER #{{order.number}}</div>\n\n            </div>\n\n            <div class="col text-right status-holder">\n\n              <span class="status-badge">{{order.status}}</span>\n\n            </div>\n\n          </div>\n\n\n\n        </div>\n\n        <div class="item item-text-wrap" *ngIf="order.line_items">\n\n          <div class="line-item" *ngFor="let item of order.line_items">\n\n\n\n            <h3>{{item.name}}</h3>\n\n            <div *ngFor="let variation of item.meta" style="line-height: 0px; text-transform: uppercase;">\n\n              <small>{{variation.label}}: {{variation.value}}</small>\n\n            </div>\n\n            <h5 class="price">{{item.price | currency:order.currency:true}}</h5>\n\n          </div>\n\n\n\n\n\n        </div>\n\n        <div class="item item-divider card-footer" [ngClass]="{\'pending\': !order.transaction_id}">\n\n          <div class="row">\n\n            <div class="col">\n\n              <button ion-button small clear block color="light" class=" button-text" *ngIf="!order.transaction_id">Pay Now</button>\n\n            </div>\n\n            <div class="col price-holder">\n\n              Total {{order.total | currency:order.currency:true}}\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\byn.mobi\src\pages\profile\profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map