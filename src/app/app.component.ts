import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import {MyFirebase} from "../providers/my-firebase/my-firebase";
import {LoginPage} from "../pages/login/login";




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

//  rootPage: any = "OnboardingPage";

    rootPage: any ;
    userData: any = null;

  pages: Array<{title: string, component: any, module?:any}>;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              private myfirebase: MyFirebase) {

      let self = this;
      this.myfirebase.hasLoggedIn()
          .then(res => {
              if(res) {
                  self.userData = res;
                  self.rootPage = HomePage;
              } else {
                  self.rootPage = LoginPage
              }
          });

      this.initializeApp();


    this.pages = [
      { title: 'İndirimler', component: HomePage }
    ];


  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.


      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.module || page.component);
  }


  // open custom page
  openCustomPage(name){
    console.log(name)
    this.nav.push(name)
  }

  // logout
  logout(){
      this.myfirebase.signOut();
      this.nav.setRoot("LoginPage");
  }


}
