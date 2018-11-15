import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AgendarAlimentosPage } from '../pages/agendar-alimentos/agendar-alimentos';
import { AgendarMassagemPage } from '../pages/agendar-massagem/agendar-massagem';
import { BemVindoPage } from '../pages/bem-vindo/bem-vindo';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { FIREBASE_CONFIG} from "./app.firebase.config";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';


@NgModule({
  declarations: [
    MyApp,
    AgendarAlimentosPage,
    AgendarMassagemPage,
    BemVindoPage,
    TabsControllerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AgendarAlimentosPage,
    AgendarMassagemPage,
    BemVindoPage,
    TabsControllerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
