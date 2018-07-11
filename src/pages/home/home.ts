import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';
import { ContentDetailPage} from '../content-detail/content-detail';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userData = {
    "keyword": ""
  };
  res: any;
  responseNotfound: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public webService: WebapiServiceProvider) {
  }

  getItems() {
    //alert(JSON.stringify(this.userData));
    this.webService.postData(this.userData, "search.php").then((result) => {
      this.res = result;
    }, (error) => {
      this.responseNotfound = "มีบางอย่างผิดพลาดจาก Server";
      console.log(error);
    })
  }

  searchDetail(cid) {
    this.navCtrl.push(ContentDetailPage, {
      cid: cid
    });
  } 
}
