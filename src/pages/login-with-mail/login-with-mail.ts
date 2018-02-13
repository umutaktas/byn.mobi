import {Component} from '@angular/core';
import {MyFirebase} from "../../providers/my-firebase/my-firebase";


/**
 * Generated class for the LoginWithMailComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */

@Component({
  selector: 'login-with-mail',
  templateUrl: 'login-with-mail.html',
})
export class LoginWithMail {
  user: any={};

  text: string;

  constructor(private myFirebase:MyFirebase) {

  }


}
