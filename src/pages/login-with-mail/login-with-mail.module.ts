import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { LoginWithMailComponent } from './login-with-mail';

@NgModule({
  declarations: [
    LoginWithMailComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    LoginWithMailComponent
  ]
})
export class LoginWithMailComponentModule {}
