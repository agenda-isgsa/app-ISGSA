import{Component}from'@angular/core';
import {NavController }from 'ionic-angular';
import {AlertController }from 'ionic-angular';

@Component({
selector: 'page-home',
templateUrl: 'home.html'
})
export class HomePage {

constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

Alerta(){
  console.log('cliquei')
      const alert = this.alertCtrl.create({
      title: 'Olá',
      subTitle: 'Tudo bom contigo?',
      buttons: ['OK']
    });
    alert.present();
  }

}


