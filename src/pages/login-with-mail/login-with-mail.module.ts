import { NgModule } from '@angular/core';
import { IonicPageModule} from 'ionic-angular';
import { LoginWithMail } from './login-with-mail';

@NgModule({
  declarations: [
    LoginWithMail,
  ],
  imports: [
    IonicPageModule.forChild(LoginWithMail)
  ],
  exports: [
    LoginWithMail
  ]
})
export class LoginWithMailModule {}
