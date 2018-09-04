import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AgendarAlimentosPage } from '../pages/agendar-alimentos/agendar-alimentos';
import { AgendarMassagemPage } from '../pages/agendar-massagem/agendar-massagem';
import { BemVindoPage } from '../pages/bem-vindo/bem-vindo';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
    IonicModule.forRoot(MyApp)
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