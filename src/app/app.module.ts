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

export const firebaseConfig = ({
    apiKey: "AIzaSyCWmYThVQgqZt6ulzTyPKwh4-95CWDLY6Y",
    authDomain: "biyonebackend.firebaseapp.com",
    databaseURL: "https://biyonebackend.firebaseio.com",
    projectId: "biyonebackend",
    storageBucket: "biyonebackend.appspot.com",
    messagingSenderId: "1005362584494"
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
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp, {
      backButtonText: ''
    }),
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
    UserDataProvider,
  ]
})
export class AppModule {}
