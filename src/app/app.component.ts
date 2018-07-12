import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { LoginPage} from '../pages/login/login';

const config = {
  apiKey: 'AIzaSyD4wexzt7uXMerfYJEds-zsml9oEsYmJVg',
  authDomain: 'farm-chat-5345c.firebaseapp.com',
  databaseURL: 'https://farm-chat-5345c.firebaseio.com/',
  projectId: 'farm-chat-5345c',
  storageBucket: 'gs://farm-chat-5345c.appspot.com',
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
