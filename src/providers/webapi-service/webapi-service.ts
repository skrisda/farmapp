import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WebapiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WebapiServiceProvider {

  //Base URL API
  baseUrl: any;

  constructor(public http: Http) {
    this.baseUrl='http://sc.sci.tsu.ac.th/farmer/ionic_api/';
  }

  // POST Method
  postData(objdata, segment) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      //headers.append('Content-Type', 'application/json;charset=UTF-8');
      this.http.post(this.baseUrl + segment, JSON.stringify(objdata), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  // GET Method
  getData(segment) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      //headers.append('Content-Type', 'application/json;charset=UTF-8');
      this.http.get(this.baseUrl + segment, { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }
}
