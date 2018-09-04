import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AgendarAlimentosPage } from '../agendar-alimentos/agendar-alimentos';
import { AgendarMassagemPage } from '../agendar-massagem/agendar-massagem';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = AgendarAlimentosPage;
  tab2Root: any = AgendarMassagemPage;
  constructor(public navCtrl: NavController) {
  }
  
}
