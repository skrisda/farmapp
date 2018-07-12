import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContentsPage} from '../pages/contents/contents';
import { HomePage } from '../pages/home/home';
import { ContentDetailPage} from '../pages/content-detail/content-detail';
import { TabsPage } from '../pages/tabs/tabs';
import { ChatPage} from '../pages/chat/chat';
import { AddRoomPage } from '../pages/add-room/add-room';
import { RoomPage} from '../pages/room/room';
import { SigninPage} from '../pages/signin/signin';
import { LoginPage} from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WebapiServiceProvider } from '../providers/webapi-service/webapi-service';
import { HttpModule } from '@angular/http';
import { Network} from '@ionic-native/network';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContentsPage,
    HomePage,
    ContentDetailPage,
    TabsPage,
    ChatPage,
    AddRoomPage,
    RoomPage,
    SigninPage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContentsPage,
    HomePage,
    ContentDetailPage,
    TabsPage,
    ChatPage,
    AddRoomPage,
    RoomPage,
    SigninPage,
    LoginPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WebapiServiceProvider,
    Network
  ]
})
export class AppModule {}
