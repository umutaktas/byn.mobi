import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

/*
  Generated class for the CountryPickerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CountryPickerProvider {

  dataUrl = 'assets/countries.json'

  constructor(public http: Http) {
    console.log('Hello CountryPickerProvider Provider');
  }

  getCountries(){
    return this.http.get(this.dataUrl)
    .map((res: Response) => { return res.json() || {} })
    .catch(this.handleError);
  }


  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      if (error.status === 404) {
        errMsg = 'Error loading countries.json file. Please configure WebPack and load countries.json assets to your root folder';
      }
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  

}
