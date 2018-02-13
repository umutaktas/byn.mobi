import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CountryPickerProvider } from '../providers/country-picker/country-picker';
import { UserDataProvider } from '../providers/user-data/user-data';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {MyFirebase} from '../providers/my-firebase/my-firebase';
import {Facebook} from "@ionic-native/facebook";
import {LoginWithMailModule} from "../pages/login-with-mail/login-with-mail.module";



export const firebaseConfig = ({
    apiKey: "AIzaSyADXJ2n3IJd5Ax8rpWXG8q3-YTyuMyA7ow",
    authDomain: "biyonezamansizindirim.firebaseapp.com",
    databaseURL: "https://biyonezamansizindirim.firebaseio.com",
    projectId: "biyonezamansizindirim",
    storageBucket: "biyonezamansizindirim.appspot.com",
    messagingSenderId: "161289504708"
    });

@NgModule({
  declarations: [
    MyApp,
    HomePage
     ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginWithMailModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp, {
      backButtonText: ''
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CountryPickerProvider,
    AngularFireDatabase,
    AngularFireAuthModule,
    UserDataProvider,
    MyFirebase,
    Facebook
  ]
})
export class AppModule {}
