import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Network } from '../../../node_modules/@ionic-native/network';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';
import { AlertController } from 'ionic-angular';
import { ContentDetailPage} from '../content-detail/content-detail';
/**
 * Generated class for the ContentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contents',
  templateUrl: 'contents.html',
})
export class ContentsPage {

  responseData: any;
  responseNotfound: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public webService: WebapiServiceProvider,
    private toast:ToastController, 
    private Network:Network,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    if (this.Network.type !== 'none') { // ถ้าต่อ Network ไว้
      this.webService.getData("feed_contents.php").then((result) => {
        console.log(result);
        this.responseData = result;
      }, (error) => {
        if (error.status == 0) {
          /*this.toast.create({
            message: 'มีบางอย่างผิดพลาดในการดึงข้อมูลจาก Server',
            duration: 3000
          }).present();*/
          let alert = this.alertCtrl.create({
            title: 'มีข้อผิดพลาด',
            subTitle: 'มีบางอย่างผิดพลาดในการดึงข้อมูลจาก Server',
            buttons: ['Dismiss']
          });
          alert.present();
        }
      });
    } else {
      // show Message No network
      this.toast.create({
        message: 'โปรดตรวจสอบการเชื่อมต่ออินเตอร์เน็ต',
        duration: 3000
      }).present();
    }
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      this.webService.getData("feed_contents.php").then((result) => {
        console.log(result);
        this.responseData = result;
      }, (error) => {
        this.responseNotfound = "มีบางอย่างผิดพลาดจาก Server";
        console.log(error);
      })
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  
  contentDetail(cid) {
    this.navCtrl.push(ContentDetailPage, {
      cid: cid
    });
  } 
}
