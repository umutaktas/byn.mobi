import { Component } from '@angular/core';

/**
 * Generated class for the LoginWithMailComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'login-with-mail',
  templateUrl: 'login-with-mail.html'
})
export class LoginWithMailComponent {

  text: string;

  constructor() {
    console.log('Hello LoginWithMailComponent Component');
    this.text = 'Hello World';
  }

}
